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
    	
    	var goodsType=getCookie("goodsType");
    	var boyInc=getCookie("boyInc");
    	var nvInc=getCookie("nvInc");
    	
    	$.get("php/getShoppingCart.php",{"vipName":userNameValue},function(data){
    		
    		
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
	
	//保存 商品名称，单价，数量
	//1.加法运算
	var count=0;
	$('[class="add1"]').on("click",function(){
		$(this).prev().html(count++);
		var per=$(this).parent().prev().text();
		var calmoney=parseInt(per)*count;
		$(this).parent().next().text(calmoney);
		
	})
	$('[class="add1"]').prev().prev().click(function(){
			$(this).next().html(count--);
			var per=$(this).parent().prev().text();
			var calmoney=parseInt(per)*count;
			$(this).parent().next().text(calmoney);
			
	})
	
	
	
	var tab=1;
	$('[class="add2"]').on("click",function(){
		var per=$(this).parent().prev().text();
		$(this).prev().text(tab);
		var calmoney=parseInt(per)*tab;
		$(this).parent().next().text(calmoney);
		tab++;
		//calmoney=per*count;
	})
	
	
	
})
