(function() {
	/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-17 16:29:03
 * @version $Id$
 */

$(function() {
	// 首页图片轮播
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
	$("#mo-footer ul li").click(function() {
		$(this).addClass('mo-footer-color-active').
		siblings().removeClass('mo-footer-color-active');
	})

    //店面详情
    var i=0;
    $(".wjx").click(function() {
    	i++;
    	if(i%2==0){
			$(this).css('color', 'white');
		}else{
			$(this).css('color', 'red');
		}
    });

    $(".dm-shared").click(function() {
		$(".de-mask").show();
	})
	$(".telephone").click(function() {
		i++;
		if(i%2==0){
			$(".phone").hide();
		}else{
			$(".phone").show();
		}
	})

    $(".order a").click(function() {
    	window.location.href="appointment.html";
    });

	//遛遛头部
	$(".tarry-header ul li").click(function() {
		$(this).addClass('act').
		siblings().removeClass('act');
	})
	$(".tarry-nav li").click(function() {
		var num=$(".tarry-nav li").index(this);
		$(".tarry-select").hide();
		$(".tarry-select").eq(num).show().siblings(".tarry-select").hide();
	})

	$(".tarry-information-comment .comment3 .bang").click(function() {
		i++;
		if (i % 2 == 0) {
			$(this).css("color", "#a59d9d");
		} else {
			$(this).css("color", "red");
		}
	})

	$(".tarry-information-name ul li.gz").click(function() {
		i++;
		if (i % 2 == 0) {
			$(this).html("+ 关注");
			$(this).css({
				color: '#fe2d63',
				borderColor: '#fe2d63'
			});
		} else {
			$(this).html("√ 已关注");
			$(this).css({
				color: 'orange',
				borderColor: 'orange'
			});
		}
	});

	$(".tarry-information-comment .comment5").click(function() {
		i++;
		if (i % 2 == 0) {
			$(".tarry-information-comment .comment5 p").css("color", "#1156c7");
			$(".tarry-information-comment .comment5-off").hide();
		} else {
			$(".tarry-information-comment .comment5 p").css("color", "red");
			$(".tarry-information-comment .comment5-off").show();
		}
	})

	$(".tarry-information-comment .comment52").click(function() {
		i++;
		if (i % 2 == 0) {
			$(".tarry-information-comment .comment52 p").css("color", "#1156c7");
			$(".tarry-information-comment .comment52-off").hide();
		} else {
			$(".tarry-information-comment .comment52 p").css("color", "red");
			$(".tarry-information-comment .comment52-off").show();
		}
	})

	$(".tarry-share").click(function() {
		i++;
		if(i%2==0){
			$("#tarry-myshare").hide();
		}else{
			$("#tarry-myshare").show();
			$("#tarry-myshare").click(function(){
				$("#tarry-myshare").hide();
			}) 
		}
	})
	//评论
	$(".comment3 .profile").click(function() {
		$(".comment4 .commentform").show();
	})
	$(".comment4 #comment4btn").click(function() {
		$(".comment4 .commentform").hide();
	})
	
})
})();



(function(){
	$(function(){
	    $("#sc-keyword").keyup(function() {
	        var kw=$("#sc-keyword").val();
	        var url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+kw;
	        query(url);
	    });
	    function query(url) {
	        document.getElementById("sc-list").innerHTML="";
	        $.ajax({
	            type:"get",
	            async:true,
	            url:url,
	            dataType:'jsonp',
	            jsonp:'cb',
	            success:function(data) {
	                var ul='<ul>';
	                for(var i = 0;i < data.s.length; i++){
	                    ul+='<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
	                }
	                ul+="</ul>";
	                $('#sc-list').html(ul).show();
	            },
	            error:function() {
	                alert("fail")
	            }
	        }) 
	    };


	});
})();

(function(){
	$(function(){
   //键盘按下式触发
	    $("#eo-keyword").keyup(function() {
	        //获取输入的值
	        var kw=$("#eo-keyword").val();
	        //获取地址端口加上自己想搜索得值
	        var url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+kw;
	        //调用
	        query(url);

	    });
	    function query(url) {
	        document.getElementById("eo-list").innerHTML="";
	        $.ajax({
	            type:"get",
	            async:true,
	            url:url,
	            dataType:'jsonp',
	            jsonp:'cb',
	            success:function(data) {
	                var ul='<ul>';
	                for(var i = 0;i < data.s.length; i++){
	                    ul+='<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
	                }
	                ul+="</ul>";
	                $('#eo-list').html(ul).show();
	            },
	            error:function() {
	                alert("fail")
	            }
	        }) 
	    };
	    $('.eo-doctors').find('span').eq(0).on('touchend',function(){
	        $('.eo-doctors').find('ul').eq(0).show();
	        $('.eo-doctors').find('ul').eq(1).hide();
	        $('.eo-doctors').find('span').css('backgroundColor','#e2e2e2');
	        $('.eo-doctors').find('span').eq(0).css('backgroundColor','navy');
	    })
	    $('.eo-doctors').find('span').eq(1).on('touchend',function(){
	        $('.eo-doctors').find('ul').eq(1).show();
	        $('.eo-doctors').find('ul').eq(0).hide(); 
	        $('.eo-doctors').find('span').css('backgroundColor','#e2e2e2');
	        $('.eo-doctors').find('span').eq(1).css('backgroundColor','navy');    
	    })






	});
})();
(function(){
	$(function(){
		$('#de-share').on('touchstart',function(){
            $('.de-mask').show();
        });
        $('#de-cancel').on('touchstart',function(){
            $('.de-mask').hide();
        });
		$('.de-head i').on('touchstart',function(){
			window.history.go(-1);
		})
		$('.de-pc5 .de-p5 .iconfont').on('touchstart',function(){
			$(this).css('color','red');
		})
	});

})();

(function(){
	$(function(){
		var bl=false;
        $('.fr-read').on('click touch',function(){
            $(this).css('color','#fe2d63');
            $('.fr-use').find('span').css('color','#fe2d63');
            bl=true;
        });
        $('.fr-btn').on('click touch',function(){
            if($('.fr-in1').val()==""){
                $('.fr-in1').val('账号不能为空');
                return false;
            }
            if($('.fr-in2').val()==""){
                $('.fr-in2').val('密码不能为空');
                return false;
            }
            if($('.fr-in4').val()==""){
                $('.fr-in4').val('确认密码不能为空');
                return false;
            }
            if($('.fr-in3').val()==""){
                $('.fr-in3').val('验证码不能为空');
                return false;
            }
            if($('.fr-in2').val()!==$('.fr-in4').val()){
                $('.fr-in2').val('密码错误');
                $('.fr-in4').val('密码错误');
                return false;
            }
            if(!bl){
            	$('.fr-in1').val("请先阅读用户协议");
                $('.fr-in2').val("请先阅读用户协议");
                $('.fr-in3').val("请先阅读用户协议");
                $('.fr-in4').val("请先阅读用户协议");
                return false;
            }
            else{
                $('.fr-in1').val("注册成功");
                $('.fr-in2').val("注册成功");
                $('.fr-in3').val("注册成功");
                $('.fr-in4').val("注册成功");
            }
        })
	});
})();

(function(){
	$(function(){
	    $("#sc-keyword").keyup(function() {
	        var kw=$("#sc-keyword").val();
	        var url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+kw;
	        query(url);
	    });
	    function query(url) {
	        document.getElementById("sc-list").innerHTML="";
	        $.ajax({
	            type:"get",
	            async:true,
	            url:url,
	            dataType:'jsonp',
	            jsonp:'cb',
	            success:function(data) {
	                var ul='<ul>';
	                for(var i = 0;i < data.s.length; i++){
	                    ul+='<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
	                }
	                ul+="</ul>";
	                $('#sc-list').html(ul).show();
	            },
	            error:function() {
	                alert("fail")
	            }
	        }) 
	    };


	});
})();




