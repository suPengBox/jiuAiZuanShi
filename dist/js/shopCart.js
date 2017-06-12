require(["jquery","cookieTools"],function(){
	//获取cookie
	//2.得到cookie
	$(function(){
		var userNameValue=getCookie("userName");
    	//alert(userNameValue);
    	if(userNameValue!=""){
    		$(".header_top-l h1").html(userNameValue+"你好！你是<span style='color:#ff8a81'> 钻石 </span>会员");
    		$(".header_top-l a").css("display","none");
    		$(".header_top-l .quit").css("display","block");
    	}
    	
    	var goodsType=getCookie("goodsType");
    	var boyInc=getCookie("boyInc");
    	var nvInc=getCookie("nvInc");
    	
    	$.get("php/getShoppingCart.php",{"vipName":userNameValue},function(data){
    		var d=eval(data);
    		//创建表格
    		var totalMoney=0;
    		$("thead").append("<tr><td>商品</td><td>定制内容</td><td>单价</td><td>数量</td><td>小计</td><td>操作</td></tr>");
    		for(var i in d){
    		     var count=d[i].goodsSum;
    			 var id=d[i].goodsId;
    			 var img=d[i].goodsImg;
    			 var name=d[i].goodsName;
    			 var kind=d[i].goodsDesc;
    			 var price=d[i].goodsPrice;
    			 totalMoney+=count*price;
    			 var tr="<tr class='ord'><td><img src='"+img+"' /><i>"+name+"</i><span>"+kind+"编号:<u>"+id+"</u></span></td><td><span>材质："+goodsType+"&nbsp;</span><i>手寸： 男"+boyInc+",&nbsp;女："+nvInc+"</i></td><td>"+price+"</td><td><input type='button' value='-' id='btn1'/><span>"+count+"</span><input type='button' value='+' id='btn2'/></td><td>"+count*price+"</td><td>删除</td></tr>";
    			$("tbody").append(tr);
    		}
    		$("tfoot").append("<tr><td>清除购物车</td><td colspan='5'>订单总额<i id='count'>"+totalMoney+"</i></td></tr>");	
    		
    		//增加数量
			$("tr").on("click","#btn2",function(){
				var baseCount=$(this).prev().text();
				baseCount++;
				$(this).prev().text(baseCount);
				var endPrice=$(this).parent().prev().text();
				var calMoney=parseInt(baseCount)*parseInt(endPrice);
				$(this).parent().next().text(calMoney);//单个总价
				//总价变化
				total();
				var goodsId=$(this).parents("tr").children().eq(0).children().eq(2).children().text();
				$.get("php/updateGoodsCount.php",{"vipName":userNameValue,"goodsId":goodsId,"goodsCount":baseCount},function(data){
					if(data=="1"){
						//ebhlocation.href=("shopCart.html")
					}
				})
			})
    		//减少数量
    		$("tr").on("click","#btn1",function(){
				var baseCount=$(this).next().text();
				if(baseCount>1){
					baseCount--;
					$(this).next().html(baseCount);
					var endPrice=$(this).parent().prev().text();
					var calMoney=parseInt(baseCount)*parseInt(endPrice);
					$(this).parent().next().text(calMoney);//单个总价
					//减法总价变化
					total();
					var goodsId=$(this).parents("tr").children().eq(0).children().eq(2).children().text();
					$.get("php/updateGoodsCount.php",{"vipName":userNameValue,"goodsId":goodsId,"goodsCount":baseCount},function(data){
						if(data=="1"){
						}
					})
				}else{
					baseCount=2;
				}
			})
    		
    		//总价计算
    		function total(){
    			var total=0;
				for(var i=0;i<$(".ord").length;i++){
					total+=parseInt($("tbody").children().eq(i).children().eq(4).text());
				}
				$("tfoot tr i").text(total);
    		}
    		
    		//删除商品
    		$("tr").on("click","td:last",function(){
				console.log(1);
	    		$.get("php/deleteGoods.php",{"vipName":userNameValue,"goodsId":$(this).parent().children().eq(0).children().last().children().html()},function(data){
	    				if(data=="1"&&confirm("你确定要铲平它吗？")){
	    					alert("删除成功！")
	    					location.href=("shopCart.html");
	    				}
	    		})
			})	
			
			//
			if($("tbody tr").length==0){
				$("section").css("display","none");
				$("aside").css("display","block");
			}else{
				$("section").css("display","block");
				$("aside").css("display","none");
			}
    	})	
		
		
		
	})
	
	
	
	//退出登录
	$(".quit").click(function(){
		if(confirm("确定好要退出吗？")){
			removeCookie("userName");
			removeCookie("userPass");
			$(".header_top-l a").css("display","block");
    		$(".header_top-l .quit").css("display","none");
    		$(".header_top-l h1").html("欢迎进入钻石小鸟官网");
    		$("section").css("display","none");
			$("aside").css("display","block");
		}
	})
	
	//下拉框
	$(".nav").css("display","none");
	$(".nav").parent().hover(function(){
		$(this).find(".nav").css("display","block");
	},function(){
		$(this).find(".nav").css("display","none");
	})
	
	//nav选项卡
	$("#nav1").on("mouseover",".bb",function(){
		$(this).parent().next().css("display","block")
		$(this).addClass("active");
		var index=$(this).index()-1;
			$("#content dd").eq(index).addClass("show").siblings().removeClass("show")
	})

	$("#nav1").on("mouseout","li",function(){
			$(this).removeClass("active");
			$(".next-select").hide();
	})
	$(".next-select").on("mouseleave",function(){
		$(this).css("display","none")
	})
	$(".next-select").on("mouseenter",function(){
		$(this).css("display","block")
	})
	
	
	//向上
	$("#top").click(function(){		
		$('html,body').animate({scrollTop:0},'slow');
	})
	
	
	//下拉框男
	$("#nan").mouseover(function(){
		$(".nan-list").css("display","block");
	})
	$("#nan").mouseout(function(){
		$(".nan-list").css("display","none");
	})
	$(".nan-list").mouseenter(function(){
		$(this).css("display","block");
	})
	$(".nan-list").on("click","span",function(){
		var inc=$(this).html();
		$("#nan").val(inc);
	})
	$(".nan-list").mouseleave(function(){
		$(this).css("display","none");
	})
	
})
