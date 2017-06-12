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
	
	//注册
	email   =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    pwd     = /^[\w]{8,32}$/,
    pass    =/^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/
    chn     = /^[\u0391-\uFFE5]+$/,
    idcard  = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
    mobile  = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$/
    prove   =/^[a-zA-Z0-9]{4}$/
      
    var istrue=true;
    $("#tel").blur(function(){
    	var phone=$(this).val();	
		if(!mobile.test(phone)){
				istrue=false;
    			$(".tel").html("请输入正确的电话号")
    		}else if(mobile.test(phone)){
				$.get("php/register.php",{userName:phone},function(data){
				if(data=="0"){
					istrue=false;
					$(".tel").html("该号码已注册")
				}else{
					istrue=true;
					$(".tel").html("");
				}
			});	
   		 }		
    });
    
    //页面一打开，变换验证码
	var str1="";
	$(function(){	
		yanzheng();
	})	
    
    //点击创建验证码
	$(".checkcode i").click(function(){
		$(this).prev().html("");
		yanzheng();
	})
    
	function yanzheng(){
		var str="";
		var num=0;
		var i=0;
		str1="";
		while(i<4){
			var num=parseInt(Math.random()*127);
			if((num>=49 && num<=57)||(num>=65 && num<=90)||(num>=97 && num<=122)){
					str+="<img src='img/"+num+".jpg' style='width:24px;height:24px'/>";
					str1+=String.fromCharCode(num);
					i++;
			}
		}
		$(".checkcode p").append(str);	
	}
    
    $("#code").blur(function(){
    	var code=$(this).val().toLowerCase();
    	str1=str1.toLowerCase();
    	if(!prove.test(code)){
    		istrue=false;
    		$(".code").html("验证码输入不符合规范")
    	}else if(prove.test(code)){
    		if(code==str1){
    			istrue=true;
    			$(".code").html("")
    		}else{
    			istrue=false;
    			$(".code").html("验证码错误，请重新验证")
    		}
    	}
    })
    
    $("#pswMsg").blur(function(){
    	var psw=$(this).val();
    	if(!pass.test(psw)){	
    		istrue=false;
    		$(".psw").html("6-20位大小写字母，数字及'-'、'_'组合");
    	}else{
    		istrue=true;
    		$(".psw").html("")
    	}	
    })
    
    $("#repswMsg").blur(function(){
    	var psw=$("#pswMsg").val();
    	var repsw=$("#repswMsg").val();
    	if(psw!=repsw){
    		istrue=false;
    		$(".repsw").html("两次密码输入不一致，请重新输入")
    	}else{
    		istrue=true;
    		$(".repsw").html("");
    	}	
    })
	$("#submitBtn").click(function(){
		var code=$("#code").val();
		var phone=$("#tel").val();
		var psw=$("#pswMsg").val();
    	var repsw=$("#repswMsg").val();	
		if(code=="" || phone=="" || psw=="" || repsw==""){	
			$(".tel").html("请输入正确的电话号");
			$(".code").html("验证码错误，请重新验证");
			$(".psw").html("6-20位大小写字母，数字及'-'、'_'组合");		
		}else{
			if(istrue){
				$.post("php/regSave.php",{userName:$("#tel").val(),userPass:$("#pswMsg").val()},function(data){
					saveCookie("userName",phone,7);
					saveCookie("userPass",psw,7);
					location.href=("index.html")
				})
			}
		}
	})
	
	

	
	//正则
	/*email   =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    pwd     = /^[\w]{8,32}$/,
    chn     = /^[\u0391-\uFFE5]+$/,
    idcard  = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
    mobile  = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$/,
    //登录  */

  /*  $('#submitBtn').click(function(){ 	
    	var usertel =  $("[type='tel']").val();
    	var yanzcode =  $("[type='text']").val();
    	var password = $("[type='password']").val(); 
    	if(!usertel && !yanzcode && !password){
    		$(".tel").html("请输入手机号");
    		$(".code").html("请输入验证码");
    		$(".psw").html("6-20位大小写字母，数字及'-'、'_'组合") ;
    		return false
    	}else{
    		if(!usertel){
    		$(".tel").html("请输入手机号");
    		return false;
	    	}
	    	if(!yanzcode){
			  	$(".code").html("请输入验证码")
			  	return false;
			}
	    	if(!password){
			  	$(".psw").html("6-20位大小写字母，数字及'-'、'_'组合") 
			  	return false;
			}
    	}
    })*/
    
    
    
    
    
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
