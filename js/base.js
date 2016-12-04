// JavaScript Document

$(function(){
	/*为格言设置动画效果*/	
	$("header span.motto:first-child").show(3000)
		  .animate({left:'+=0',opacity:'0'},"slow")
		  .animate({left:'+=30px',opacity:'0.5'},"slow")
		  .animate({left:'+=60px',opacity:'1'},"slow");
	/*鼠标移入格言，显示格言的英文，并设置动画效果*/		
	$("header span.motto:first-child").mouseover(function(){
		$("header span.motto:last-child").slideToggle(2000)
										 .animate({opacity:'0.3'},"slow")
										 .animate({opacity:'0.7'},"slow")
										 .animate({opacity:'0.2'},"slow")
										 .animate({opacity:'0.8'},"slow")
										 .animate({opacity:'0.1'},"slow")
										 .animate({opacity:'0.9'},"slow");
		});
	/*鼠标移出格言，显示格言的英文，并设置动画效果*/	
	$("header span.motto:first-child").mouseout(function(){
		$("header span.motto:last-child").slideToggle(4000);
		});
	/*在页面上显示当前日期*/	
	var myDate=new Date();
	var weekdays=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];//建立数组，保存星期
	var y_m_d=(myDate.getYear()+1900)+"年&nbsp;"+(myDate.getMonth()+1)+"月&nbsp;"+myDate.getDate()+"日";//将年月日字符串用变量y_m_d保存
	var weekday=weekdays[myDate.getDay()];//将星期几保存到weekday中
	$(".header_middle .date").html(y_m_d+"&nbsp;&nbsp;"+weekday);
	/*设为首页*/
	$("#setHomePage").click(function(){
		this.style.behavior='url(#default#homepage)';
		this.setHomePage('http://www.runchu.com.cn');
		});
	/*加入收藏*/
	$(".header_middle a:eq(1)").attr("href","javascript:window.external.AddFavorite('http://www.runchu.com.cn','郑润初的博客')");
	/*图片轮播*/
	document.getElementsByClassName("loading")[0].style.padding="50px 0";
	myFocus.set({
		id:'boxID',//焦点图盒子ID
		pattern:'mF_fancy',//风格应用的名称
		time:3,//切换时间间隔(秒)
		trigger:'click',//触发切换模式:'click'(点击)/'mouseover'(悬停)
		width:796,//设置图片区域宽度(像素)
		height:200,//设置图片区域高度(像素)
		txtHeight:'default'//文字层高度设置(像素),'default'为默认高度，0为隐藏
});


});

	

