require(["banner"],function(banner){
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
});