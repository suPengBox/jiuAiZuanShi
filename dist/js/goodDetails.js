require(["jquery","cookieTools","mirror"],function(){
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
    	
    	//得到商品页面保存的cookie	
    	var GoodsId=getCookie("GoodsId");
    	$.get("php/getGoodsInfo.php",{"goodsId":GoodsId},function(data){
    			var d=eval("("+data+")");
    			var name,price,count,type,zuan,send;
    			name=d.goodsName;
    			price=d.goodsPrice;
    			count=d.goodsCount;
    			type=d.goodsType;
    			zuan=d.goodsDesc;
    			send=d.beiyong2;
    		var str1="<p>"+name+"</p>价格<i>¥</i><span class='price'>"+price+"</span>售出<span class='sold'>"+count+"</span>评论<span class='discuss'>274</span>";
    		var str2="<li><i>品名</i><span>"+type+"</span></li><li><i>钻石</i><span>"+zuan+"</span></li><li><i>配送</i><span>"+send+"</span></li>";
    		$(".article-t").append(str1);
    		$(".article-c").append(str2);
    	})
    	
    	//添加到购物车
    	var goodsCount;
    	var cal=0;
		$("#addBtn02").click(function(){
			cal++;
			$(this).prev().html(cal);
			goodsCount=$(".cal span").text();
		})
		$("#addBtn01").click(function(){
			if(cal>=1){
				cal--;
				$(this).next().html(cal)
				goodsCount=$(".cal span").text();
			}	
		})
    		
		$("#goShop").click(function(){
			if(userNameValue!=""){
				$.get("php/addShoppingCart.php",{"vipName":userNameValue,"goodsId":GoodsId,"goodsCount":goodsCount},function(data){
					if(data=="1"){
						alert("恭喜你添加成功")
						location.href=("shopCart.html")
					}
				})	
			}else{
				alert("请先登录您的账号")
			}
		})
		
		
		//添加放大镜
		$(".box1").mirror({
			smallBoxId: ".box1",                      
			smallImgId: ".img01",                      
			imgPath: "img/29652_99_.jpg",                  
			baseLeft: 0,    //图片容器初始的left                    
			baseTop: 0,     //图片容器初始的top                    
			baseWidth: 420,    //图片容器的width                
			baseHeight: 315,  //图片容器的height                    
			mirrorWidth: 150,                     
			mirrorHeight: 150,                    
			multiple: 3, 
			position:"右"
		})
		
		$(".box2").mirror({
			smallBoxId: ".box2",                      
			smallImgId: ".img02",                      
			imgPath: "img/29652_88_.jpg",                  
			baseLeft: 0,    //图片容器初始的left                    
			baseTop: 0,     //图片容器初始的top                    
			baseWidth: 420,    //图片容器的width                
			baseHeight: 315,  //图片容器的height                    
			mirrorWidth: 150,                     
			mirrorHeight: 150,                    
			multiple: 3, 
			position:"右"
		})
    	
	})
	//退出登录
	$(".quit").click(function(){
		removeCookie("userName");
		removeCookie("userPass");
		$(".header_top-l a").css("display","block");
    	$(".header_top-l .quit").css("display","none");
    	$(".header_top-l h1").html("欢迎进入钻石小鸟官网");
	})
	
	//点击加减号
	
	
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
	
	
	
	
	//材质
	$(".article-b-t dl").on("click","dd",function(){
		$(this).addClass("change");
		$(this).siblings("dd").removeClass("change");
		//存cookie
		saveCookie("goodsType",$(this).text(),7);
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
		//存cookie
		saveCookie("boyInc",$(this).text(),1);
	})
	
	
	$(".nan-list").mouseleave(function(){
		$(this).css("display","none");
	})
	
	//下拉框女
	$("#nv").mouseover(function(){
		$(".nv-list").css("display","block");
	})
	$("#nv").mouseout(function(){
		$(".nv-list").css("display","none");
	})
	$(".nv-list").mouseenter(function(){
		$(this).css("display","block");
	})
	$(".nv-list").on("click","span",function(){
		var inc=$(this).html();
		$("#nv").val(inc);
		//存cookie
		saveCookie("nvInc",$(this).text(),1);
	})
	$(".nv-list").mouseleave(function(){
		$(this).css("display","none");
	})
	
	//点击切换放大镜轮播
	var space=0;
	
	$(".toright").click(function(){
		space=space+270;
		if(space<=270){
		 	$(".nei ul").animate({left:-1*space+"px"},1000);	
		}else{
		 	space=270;	 	
		}	
		goStep();
	})
	$(".toleft").click(function(){
		space=space-270;
		if(space>=0){
		 	$(".nei ul").animate({left:-1*space+"px"},1000); 	 	
		}else{
		 	space=0; 		
		}
		goStep();
	})
	function goStep(){
		if(space==0){
			$(".toright").css("display","block");
			$(".toleft").css("display","none");
		}
		if(space==270){
			$(".toleft").css("display","block");
			$(".toright").css("display","none");
		}
	}
	//鼠标放上去，上面图片显示
	$(".bottom ul").on("mouseover","li",function(){
		//得到轮播图片的下标
		var ord=$(this).index();
		$(".top ul li").eq(ord).addClass("show").siblings().removeClass("show")
	})
	
})
