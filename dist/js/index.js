require(["banner","jquery","cookieTools"],function(banner){
	//获取cookie
	//2.得到cookie
	$(function(){
		var userNameValue=getCookie("userName");
    	var userPassValue=getCookie("userPass");	
    	//alert(userNameValue);
    	if(userNameValue!="" && userPassValue!=""){
    		$(".header_top-l h1").html(userNameValue+"你好！你是<span style='color:#ff8a81'> 钻石 </span>会员");
    		$(".header_top-l a").css("display","none");
    		$(".header_top-l .quit").css("display","block");
    	}
	})
	//退出登录
	$(".quit").click(function(){
		removeCookie("userName");
		removeCookie("userPass");
		$(".header_top-l a").css("display","block");
    	$(".header_top-l .quit").css("display","none");
    	$(".header_top-l h1").html("欢迎进入钻石小鸟官网");
	})
	//bird_love_Opcity 图片透明闪现
	$(".design-r").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$(".story-t-l").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$(".story-b").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$(".story-t-r").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$("#product dl img").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	//header-top我的鸟巢下拉框
	
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
	
	//产品选项卡
	$("#product-nav li").hover(function(){
		$(this).addClass("active");
		let index=$(this).index();
		$("#product-img dd").eq(index).addClass("show").siblings().removeClass("show")
	},function(){
		$(this).removeClass("active");
	})
	
	//向上
	$("#top").click(function(){		
		$('html,body').animate({scrollTop:0},'slow');
	})
	
	//点击滑动
	var space=0;
	var hit=0;
	$("#right").click(function(){
		hit++;
		 space=space+274;
		// let currleft=$("#slide-img").position();
		 if(space<=1096){
		 	$("#slide-img").animate({left:-1*space+"px"},1000); 	
		 }else{
		 	space=1096; 	
		 }
		if(hit>=3){
			$("#right").css({"background-position":"-37px -51px"})
			hit=3;
		}else{
			$("#right").css({"background-position":"0 -51px"});
		}
		console.log(hit)
	})
	
	$("#left").click(function(){
		hit--;
		 space=space-274
		 if(space>=0){ 	
		 	$("#slide-img").animate({left:-1*space+"px"},1000);	 	
		 }else{
		 	space=0;	
		 }
		 if(hit<=0){
			$("#left").css({"background-position":"-37px 0"})
			hit=0;
		}else{
			$("#left").css({"background-position":"0 0"});
		}
		console.log(hit)
	})
	
	$("#slide-img li a img").mouseover(function(){
		$(this).animate({marginTop:"-12px"},500);
	})                 
	$("#slide-img li a img").mouseout(function(){
		$(this).animate({margin:"0"},500);
	});
	//轮播图
	banner.constructor({
						//一、属性
						boxId:"#banner",//轮播图所在容器的id
						imgArr:["img/banner01.jpg","img/banner02.jpg","img/banner03.jpg","img/banner04.jpg","img/banner05.jpg"],//图片数组,这里面存放着每张图片的路径
						//轮播图的宽和高
						height :600,			
						//淡入淡出过程需要的时间；
						fadeInOutTime:2000,
						
						//停顿时间；
						pauseTime:1000,	
						
						//按钮的颜色（原始颜色，高亮颜色）；
						btnColor:"#c79ea1",
						btnHighColor : "#ff8a81",
						btnWidth :12,
						btnHeight : 12,
						btnLeft : 560,
						btnTop : 550,
						//按钮的间隔
						btnSpace :20,
						//按钮上是否有序号
						btnHasOrd : false
					});
	banner.constructor({
						//一、属性
						boxId:".city-b-r",//轮播图所在容器的id
						imgArr:["img/ad_01.jpg","img/ad_02.jpg"],//图片数组,这里面存放着每张图片的路径
						//轮播图的宽和高
						height :324,			
						//淡入淡出过程需要的时间；
						fadeInOutTime:2000,
						
						//停顿时间；
						pauseTime:1000,	
						
						//按钮的颜色（原始颜色，高亮颜色）；
						btnColor:"#c79ea1",
						btnHighColor : "#ff8a81",
						btnWidth :12,
						btnHeight : 12,
						btnLeft : 194,
						btnTop : 288,
						//按钮的间隔
						btnSpace :20,
						//按钮上是否有序号
						btnHasOrd : false
					});
	banner.constructor({
						//一、属性
						boxId:".showRing",//轮播图所在容器的id
						imgArr:["img/diy_1.jpg","img/diy_2.jpg","img/diy_3.jpg"],//图片数组,这里面存放着每张图片的路径
						//轮播图的宽和高
						height :190,			
						//淡入淡出过程需要的时间；
						fadeInOutTime:2000,
						
						//停顿时间；
						pauseTime:1000,	
						
					});
})
