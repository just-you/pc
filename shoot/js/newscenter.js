$(function(){
	$('#header li').on('click',function(){
		$(this).addClass('act').siblings().removeClass('act');
	})




	
	$('.news-center li').on('click',function(){
		$(this).addClass('nv').siblings().removeClass('nv');
		var index=$(this).index();
		$('.action').hide();
		$('.action').eq(index).show();
	})









	// 遮罩

	$(".action>div").each(function(){
	   $(this).on('mouseenter',function(e){
		   var e=e||window.event;
		   var angle=direct(e,this);
		   mouseEvent(angle,this,'in');
	   });
	   $(this).on('mouseleave',function(e){
		   var e=e||window.event;
		   var angle=direct(e,this);
		   mouseEvent(angle,this,'off');
	   });
   })
   function direct(e,o){
	 var w=o.offsetWidth;
	 var h=o.offsetHeight;
	 var top= o.offsetTop;
	 var left= o.offsetLeft;
	 var scrollTOP=document.body.scrollTop||document.documentElement.scrollTop;
	 var scrollLeft=document.body.scrollLeft||document.documentElement.scrollLeft;
	 var offTop=top-  scrollTOP;
	 var offLeft= left- scrollLeft;
	 var ex=e.clientX;
	 var ey=e.clientY;
	 var x=(ex-offLeft-w/2)*(w>h?(h/w):1);
	 var y=(ey-offTop-h/2)*(h>w?(w/h):1);

	 var angle=(Math.round((Math.atan2(y,x)*(180/Math.PI)+180)/90)+3)%4 
	 var directName=["上","右","下","左"];
	 return directName[angle];
   }
   function mouseEvent(angle,o,d){
	   var w=o.offsetWidth;
	   var h=o.offsetHeight;
	   if(d=='in'){
		   switch(angle){
			   case '上':
				   $(o).find("div").css({left:0,top:-h+"px"}).stop(true).animate({left:0,top:0},300);
					setTimeout(function(){
						$(o).find("div a").css({left:'50%',top:-h+"px"}).stop(true).animate({left:'50%',top:'85px'},300);
					},200);
				   break;
			   case '右':
				   $(o).find("div").css({left:w+"px",top:0}).stop(true).animate({left:0,top:0},300);
				   setTimeout(function(){
					   $(o).find("div a").css({left:w+"px",top:'85px'}).stop(true).animate({left:'50%',top:'85px'},300);
				   },200);
				   break;
			   case '下':
				   $(o).find("div").css({left:0,top:h+"px"}).stop(true).animate({left:0,top:0},300);
				   setTimeout(function(){
					   $(o).find("div a").css({left:'50%',top:h+"px"}).stop(true).animate({left:'50%',top:'85px'},300);
				   },200);
				   break;
			   case '左':
				   $(o).find("div").css({left:-w+"px",top:0}).stop(true).animate({left:0,top:0},300);
				   setTimeout(function(){
					   $(o).find("div a").css({left:-w+"px",top:'85px'}).stop(true).animate({left:'50%',top:'85px'},300);
				   },200);
				   break;
		   }
	   }else if(d=='off'){
		   switch(angle){
			   case '上':
				   $(o).find("div a").stop(true).animate({left:'50%',top:-h+"px"},300);
				   setTimeout(function(){
					   $(o).find("div").stop(true).animate({left:0,top:-h+"px"},300);
				   },200);
				   break;
			   case '右':
				   $(o).find("div a").stop(true).animate({left:w+"px",top:'85px'},300);
				   setTimeout(function(){
					   $(o).find("div").stop(true).animate({left:w+"px",top:0},300);
				   },200);
				   break;
			   case '下':
				   $(o).find("div a").stop(true).animate({left:'50%',top:h+"px"},300);
				   setTimeout(function(){
					   $(o).find("div").stop(true).animate({left:0,top:h+"px"},300);
				   },200);
				   break;
			   case '左':
				   $(o).find("div a").stop(true).animate({left:-w+"px",top:'85px'},300);
				   setTimeout(function(){
					   $(o).find("div").stop(true).animate({left:-w+"px",top:0},300);
				   },200);
				   break;
		   }
	   }
   }
// 遮罩




})