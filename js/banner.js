//包含或者调用模块
define(["jquery"],function($){
	
	function Banner(obj){
		//一、属性
		this.boxId = obj.boxId;//轮播图所在容器的id
		this.imgArr = obj.imgArr;//图片数组,这里面存放着每张图片的路径
		////当前透明度（1-0）
		this.currOpacity=1;
		//当前图片序号（淡入）
		this.currInOrd = 1;
		//当前图片序号（淡出）
		this.currOutOrd=1;
		//轮播图的宽和高
		this.width = obj.width;
		this.height = obj.height;
		
		//淡入淡出过程需要的时间；
		this.fadeInOutTime = obj.fadeInOutTime;
		
		//停顿时间；
		this.pauseTime = obj.pauseTime;	
		
		//按钮的颜色（原始颜色，高亮颜色）；
		this.btnColor = obj.btnColor;
		this.btnHighColor = obj.btnHighColor;
		this.btnWidth = obj.btnWidth;
		this.btnHeight = obj.btnHeight;
		this.btnLeft = obj.btnLeft;
		this.btnTop = obj.btnTop;
		//按钮的间隔
		this.btnSpace = obj.btnSpace;
		//按钮上是否有序号
		this.btnHasOrd = obj.btnHasOrd;
	
		//轮播的定时器;
		this.bannerTimer=null;
		this.initUI();
		this.addEvent();
		//开始轮播
		this.startBanner();
	}
	
	//二、方法
	//一、自动播放图片的代码
	//顺序走一步
	Banner.prototype.goStep=function(){
		//1、改变淡入的图片序号和淡出图片序号
		this.changeInOutOrdSeq();	
		//2、改变图片（淡入淡出效果）
		this.fadeInOutAll();
		//3、改变按钮背景颜色；
		this.changeBtnBgColor(this.currInOrd);	
	}
		
	//改变淡入淡出的图片序号（顺序）
	Banner.prototype.changeInOutOrdSeq = function(){
		//1.1 改变淡入的图片序号
		this.currInOrd++;
		if(this.currInOrd>this.imgArr.length){
			this.currInOrd = 1;
		}
		//1.2 求出淡出的图片序号
		this.currOutOrd = this.currInOrd-1;
		if(this.currOutOrd<=0){
			this.currOutOrd=this.imgArr.length;
		}		
	}
		
	Banner.prototype.fadeInOutAll=function(){
		//2.1淡入淡出前的初始化
		this.fadeInOutInit();//淡入淡出的初始化
		$(this.boxId+">img:eq("+(this.currInOrd-1)+")").fadeIn(this.fadeInOutTime);
		$(this.boxId+">img:eq("+(this.currOutOrd-1)+")").fadeOut(this.fadeInOutTime);
	}
				
	Banner.prototype.fadeInOutInit=function(){
		//1、恢复透明度的初始值
		//this.currOpacity = 1;	
		//2、让淡入图片定位到盒子里，其它图片放在盒子外。	
		$(this.boxId+">img").css("left","-10000px");
		$(this.boxId+">img:eq("+(this.currInOrd-1)+")").css("left","0px");
		$(this.boxId+">img:eq("+(this.currOutOrd-1)+")").css("left","0px");
	}
	
	
	Banner.prototype.changeBtnBgColor=function(ord){	
		$(this.boxId+">ul>li:eq("+(ord-1)+")").css("backgroundColor",this.btnHighColor).siblings().css("backgroundColor",this.btnColor);
	}
	
	//跳转到指定的图片；
	Banner.prototype.goImg=function(ord){
		//1、确定淡入的图片序号，和淡出的图片序号修改淡入的图片序号
		//1.1修改淡出图片的序号
		this.currOutOrd = this.currInOrd;//把淡入的图片序号赋给淡出的序号。	
		//1.2 修改淡入的图片序号
		this.currInOrd=ord;
		if(this.currInOrd>this.imgArr.length){
			this.currInOrd = 1;
		}	
		//2、改变图片（淡入淡出效果）
		this.fadeInOutAll();	
		//3、改变按钮背景颜色；
		this.changeBtnBgColor(this.currInOrd);
	}
		
	//初始化界面
	Banner.prototype.initUI = function(){
		let imgStr="";
		for(let i=0;i<this.imgArr.length;i++){
			imgStr += "<img src='"+this.imgArr[i]+"' style='position:absolute;left:-10000px;top:0px;width:100%;height:"+this.height+"px;display:none'/>";
		}
		$(this.boxId).append(imgStr);
		$(this.boxId+">img:first").css("display","block");
		
		//2、把前两张图片放在容器的可视区域，第一张图片的透明度为1.
		$(this.boxId+">img:lt(2)").css("left","0px");
		//3、动态创建按钮
		let btnStr = "<ul style='position:absolute;left:"+this.btnLeft+"px;top:"+this.btnTop+"px;'>";
		for(let i=0;i<this.imgArr.length;i++){
			 btnStr += "<li style='list-style:none;float:left;margin-left:"+this.btnSpace+"px;width:"+this.btnWidth+"px;height:"+this.btnHeight+"px;background-color:"+this.btnColor+";border-radius:50%;text-align:center;'>";
			if(this.btnHasOrd){
				btnStr += i+1;
			}
			btnStr+="</li>";
		}
		btnStr +="</ul>"; 
		$(this.boxId).append(btnStr);
		$(this.boxId+">ul>li:first").css("backgroundColor",this.btnHighColor);
	}
		
	Banner.prototype.addEvent = function(){
	/*
		$(this.boxId).onmouseover = function(){
			window.clearInterval(this.bannerTimer);
		}
		*/	
		var that = this;
		
		$(this.boxId).mouseover(function(){
			window.clearInterval(that.bannerTimer);
		});
		
		//给轮播图的容器添加onmouseout事件（事件监听器写法，防止覆盖调用者本来的onmouseout事件）；
		$(this.boxId).mouseout(function(){
			that.bannerTimer = setInterval(function(){
								that.goStep();
							},that.fadeInOutTime+that.pauseTime);
		});
	
		
		$(this.boxId+">ul>li").mousedown(function(){
			let index = $(that.boxId+">ul>li").index(this);
			that.goImg(index+1);
		});
		
	}
		
	Banner.prototype.startBanner = function(){
		var that = this;
		this.bannerTimer = setInterval(function(){
			that.goStep();
		},this.fadeInOutTime+this.pauseTime);
	}
	return {
		constructor:function(obj){
			new Banner(obj);
		}
	}
})
