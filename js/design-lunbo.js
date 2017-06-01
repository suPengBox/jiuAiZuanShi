require(["banner"],function(banner){
	console.log(2)
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
});