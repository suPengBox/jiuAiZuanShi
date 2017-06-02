require(["jquery"],function(){
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
	//表单验证
	
	
	//正则
	email   =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    pwd     = /^[\w]{8,32}$/,
    chn     = /^[\u0391-\uFFE5]+$/,
    idcard  = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
    mobile  = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$/,
    //登录
    $('#submitBtn').click(function(){
    	var username =  $("[type='text']").val();
    	var password = $("[type='password']").val();
    	if(!username){
		  	alert('请输入您的账号！'); 
		  	return false;
		}
    	if(!password){
		  	alert('请输入您的密码！'); 
		  	return false;
		}
    })
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
