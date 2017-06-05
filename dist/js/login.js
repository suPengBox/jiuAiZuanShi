require(["jquery","cookieTools"],function(){
	//下拉框
	$(".nav").css("display","none");
	$(".nav").parent().hover(function(){
		$(this).find(".nav").css("display","block");
	},function(){
		$(this).find(".nav").css("display","none");
	})
	
	//向上
	$("#top").click(function(){		
		$('html,body').animate({scrollTop:0},'slow');
	})
	//cookie函数
	//1.存cookie
	/*function saveCookie(key,value,dayCount){
	var d = new Date();
		d.setDate(d.getDate()+dayCount);
		document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
	}
	//2.得到cookie
	function getCookie(key){
	//1、获取cookie的内容；//color=red; userName=jzm; password=123; auserName=ppp
	var str = decodeURIComponent(document.cookie);
	//2、转换成数组
	var arr = str.split("; ");
	//3、循环数组找key
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	//4、返回
	return "";
	}
	//删除cookie
	function removeCookie(key){
	//借用就是保存。
	saveCookie(key,"007",-5);	
	}*/
	
	//正则
	email   =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    pwd     = /^[\w]{8,32}$/,
    chn     = /^[\u0391-\uFFE5]+$/,
    idcard  = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
    mobile  = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$/,
    //登录
  	
    $('#submitBtn').click(function(){
    	var userName =  $("[type='text']").val();
    	var passWord = $("[type='password']").val();
    	if(!userName){
		  	$(".yanz").html("请输入你的用户名")
		}else if(!passWord){
		  	$(".yanz").html("请输入你的密码")
		}else{
			$.post("php/login.php",{userName:userName,passWord:passWord},function(data){
				if(data=="true"){
					//登录成功
					//存cookie
					saveCookie("userName",userName,7);
					saveCookie("userPass",passWord,7);
					alert("记住了你的密码登录。")
					location.href=("index.html") 
				}else{
					$(".yanz").html("亲，你的账号或密码输入有误，请重新输入")
				}
			})	
		}
    })
    //获取cookie
    $(function(){
    	var userNameValue=getCookie("userName");
    	var userPassValue=getCookie("userPass");
		$("[type='text']").val(userNameValue);
		$("[type='password']").val(userPassValue);
    });
    
    //注册
//	$('.step_next').on('click', function(){
//	  var sirname = $("input[name='extend_field3']").val();
//	  var id = $("input[name='extend_field4']").val();
//	  var wifename = $("input[name='wifename']").val();
//	  if(!sirname){
//	  	layer.msg('请输入真实姓名！'); 
//	  	return false;
//	  }
//	  if(!chn.test(sirname)){
//	  	layer.msg('请输入中文真实姓名！'); 
//	  	return false;
//	  }
//	  if(!idcard.test(id)){
//	  	layer.msg('请输入正确的身份证号！'); 
//	  	return false;
//	  }
//	  if(!wifename){
//	  	layer.msg('请输入爱人姓名！'); 
//	  	return false;
//	  }
//	  if(!chn.test(wifename)){
//	  	layer.msg('请输入中文爱人姓名！'); 
//	  	return false;
//	  }
//	  if(sirname && idcard && wifename){
//	  	$('.form_step').stop().animate({left:'-600px'},300)
//	  }else{
//	  	layer.msg('请输入真爱信息！'); 
//	  	return false;
//	  }
//	  
//	});
	/*
	$('#sub').on('click',function(){
		var phone = $("input[name='tel']").val();
		var mail = $("input[name='email']").val();
		var pass = $("input[name='password']").val();
		var cpass = $("input[name='cpassword']").val();
		if(!mobile.test(phone)){
		  	alert('请输入正确的手机号码！'); 
		  	return false;
		 }
		  if(!email.test(mail)){
		  	alert('请输入正确的邮箱地址！'); 
		  	return false;
		  } 
		  if(!pass){
		  	alert('请输入密码，请输入8位以上密码！'); 
		  	return false;
		  }
		  if(!pwd.test(pass)){
		  	alert('密码太简单了！请输入8位以上密码！'); 
		  	return false;
		  }
		  if(cpass != pass){
		  	alert('两次密码输入不一致！'); 
		  	return false;
		  }
	});
	*/
})
