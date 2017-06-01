require(["jquery"],function(){
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
	})
})







