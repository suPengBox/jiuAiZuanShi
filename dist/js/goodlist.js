require(["jquery","cookieTools"],function(){

	//获取cookie
	//2.得到cookie
	$(function(){
		var userNameValue=getCookie("userName");
    	//var userPassValue=getCookie("userPass");	
    	//alert(userNameValue);
    	if(userNameValue!=""){
    		$(".header_top-l h1").html(userNameValue+"你好！你是<span style='color:#ff8a81'> 钻石 </span>会员");
    		$(".header_top-l a").css("display","none");
    		$(".header_top-l .quit").css("display","block");
    	}
    	
    	//动态添加图片信息
		//所有的标签动态添加
		$.get("php/getGoodsList.php",function(data){
			var d=eval(data)
			var name,price,img1,img2;
			for(var i in d){
				id=d[i].goodsId;
				name=d[i].goodsName;
				price=d[i].goodsPrice;
				img1=d[i].goodsImg;
				img2=d[i].beiyong1;
				//console.log(name)
				$(".show-r-c").append(
					"<li ord="+id+"><a href='#' class='bb'><img id='imgId01' src='"+img2+"' /><img id='imgId02' src='"+img1+"' /></a><p><a href='#' class='aa'>"+name+"</a></p><i>¥ "+price+"</i><br />售出  <span>3500</span><a class='talk' href='#'>评论</a> <span>274</span><u></u></li>"
				);	
			}	
			$(".show-r-c li a").mouseenter(function(){
				$(this).children().eq(1).fadeTo("slow", 0);
				$(this).children().eq(0).fadeTo("slow", 1);	
			});
			$(".show-r-c li a").mouseleave(function(){
				$(this).children().eq(1).fadeTo("slow", 1);
				$(this).children().eq(0).fadeTo("slow", 0);	
			});	
		})		
	})
	
	$(".show-r-c").on("click","li",function(){
			var GoodsId=$(this).attr("ord"); 
			saveCookie("GoodsId",GoodsId,7);
			location.href=("goodDetails.html")
		})
	
	
	
	
	//退出登录
	$(".quit").click(function(){
		removeCookie("userName");
		removeCookie("userPass");
		$(".header_top-l a").css("display","block");
    	$(".header_top-l .quit").css("display","none");
    	$(".header_top-l h1").html("欢迎进入钻石小鸟官网");
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
	
	//下拉标签
	let show=true;
	$(".show-l-t ul").on("click","li p span",function(){
		if(show){
			$(this).parent().next().addClass("change");
			$(this).addClass("bottom")
			show=false;
		}else{
			$(this).parent().next().removeClass("change");
			$(this).removeClass("bottom");
			show=true;
		}	
	})
	
	$('.show-l-c a img').mouseover(function(){
		$(this).animate({width:"216px",height:"192px"},1000)
	})
	$('.show-l-c a img').mouseout(function(){
		$(this).animate({width:"180px",height:"160px"},1000)
	})
	
	//展开高级搜索
	$(".show-r ul p").toggle(function(){

		$(this).html("收起高级搜索").prev().addClass("show");
	},function(){
		$(this).html("展开高级搜索").prev().removeClass("show");
	})
	
	
	//图片淡入淡出

	
})
