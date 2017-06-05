require(["jquery","cookieTools"],function(){
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
	
	
	
	
	//材质
	$(".article-b-t dl").on("click","dd",function(){
		$(this).addClass("change");
		$(this).siblings("dd").removeClass("change")
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
	})
	$(".nv-list").mouseleave(function(){
		$(this).css("display","none");
	})
})
