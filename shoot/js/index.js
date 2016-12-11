$(function(){
	// 导航条点击
	$('#header li').on('click',function(){
		$(this).addClass('act').siblings().removeClass('act');
	})
	//内容主标题波浪
	var n=document.getElementsByClassName("txtwav");
	for(var e=0,t=n.length;e<t;e++){
		var a=n[e],r=a.textContent.trim();a.innerHTML=null;
		i(a,r)
	}
	function i(n,e){
		for(var t in e){
			var a=document.createElement("span");
			a.innerHTML=e[t]===" "?"&nbsp;":e[t];n.appendChild(a)
		}
	}
	//栏目四欧美风尚轮播
	// var timer=null;
	var off=false;
	$('.right').click(function() {
		if(off) return false;
			off=true;
			move(false);
		setTimeout(function(){
			off=false;
		},1000);
	})
	$('.left').click(function() {
		if(off) return false;
			off=true;
		move(true);
		setTimeout(function(){
			off=false;
		},1000);
	})
	function move(direction) {
		var arrw=[],arrh=[],arrl=[],arrt=[],arrz=[],arrb=[];
		//遍历获取值
		$('.fg_img_box ul li').each(function(i) {
			arrw[i]=$(this).css("width");
 			arrh[i]=$(this).css("height");
 			arrl[i]=$(this).css("left");
 			arrt[i]=$(this).css("top");
 			arrz[i]=$(this).css("z-index");
 			arrb[i]=$(this).css("border");
		})

		$(".fg_img_box ul li").each(function(i) {
 			var i;
 			if (direction) {
 				i++;
 				if (i>4) i=0;
 			}else {
 				i--;
 				if (i<0) i=4;
 			}
 			$(this).css("z-index",arrz[i]);
 			$(this).css("border",arrb[i]);
 			$(this).animate({
                width:arrw[i],
                height:arrh[i],
                left:arrl[i],
                top:arrt[i],
 			},1000);
 		})
	};
	// timer=setInterval(move,5000)
	// $(".fg_img_box ul li img").mouseenter(function(event) {
	// 	clearInterval(timer)
	// });
	// $(".fg_img_box ul li img").mouseleave(function(event) {
	// 	timer=setInterval(move,5000)
	// });

})