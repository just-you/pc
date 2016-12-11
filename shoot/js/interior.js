$(function(){
	$('#header li').on('click',function(){
		$(this).addClass('act').siblings().removeClass('act');
	});
	
	$(".nei-shou li").click(function(event) {
		$(this).addClass('nei-xnav').siblings('li').removeClass('nei-xnav');
	});
	$(".nei-jing li").click(function() {
		$(this).addClass('nei-boty').siblings('li').removeClass('nei-boty');
	});
})