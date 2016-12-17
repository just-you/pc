
// video.js tjj
(function() {
	var lilist = document.getElementsByClassName('lil');
	for (var i = 0; i < lilist.length; i++) {
		lilist[i].index = i;
		lilist[i].onclick = function() {
			lilist[this.index].getElementsByTagName('a')[0].style.display = 'none';
		    lilist[this.index].getElementsByTagName('video')[0].style.display = 'block';
		    lilist[this.index].getElementsByTagName('video')[0].play();
		}
	}
}) ();
/**
 * wode_dingdan.js
 * @authors Your Name (zyf@example.org)
 * @date    2016-11-23 17:01:56
 * @version $Id$
 */
 (function() {
 	$(function() {
 		$('.wode_dingnvalist ul li').on('click',function(e) {
 			$(this).addClass('borderview').siblings().removeClass('borderview');
 			e.preventDefault();
 			e.stopPropagation();
 			$('.wode_dingdan').eq($(this).index()).show().siblings().hide();
 		})
 		$('#back').on('click',function() {
 			window.history.go(-1);
 		})
 	})
 }) ();

/**
 * wode_wssj.js
 * @authors Your Name (zyf@example.org)
 * @date    2016-11-17 09:42:53
 * @version $Id$
 */
 (function() {
 	var patt = /^[\u4e00-\u9fff\w]{5,16}$/;
 	var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
 	// var patt1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
 	$('#btnlogn').on('click',function() {
 		if (($('#sj-username').val() != '' && patt.test($('#sj-username').val())) && $('#sj-password').val() == '') {
 			alert('请输入密码')
 		}
 		else if ($('#sj-username').val() == '' && ($('#sj-password').val() != '' && reg.test($('#sj-password').val()))) {
 			alert('请输入用户名');
 		}
 		else if (patt.test($('#sj-username').val()) && reg.test($('#sj-password').val())) {
 			alert('登录成功，请稍后...')
 		}
 		else {
 			alert('请输入正确的用户名/密码')
 		}
 	});
 	$('#back').on('click',function() {
 			window.history.go(-1);
 	});
 }) ();
 /**
 * mall_js js
 * @authors Your Name (zyf@example.org)
 * @date    2016-11-18 14:06:38
 * @version $Id$
 */
(function() {
	if ($('#mall_nvalist').length > 0) {
	    $(function() {
	        var malarr = ["#4b93dd","#f66969","#864aab","#46add3","#bc56bd","#1cb95b","#f27519","#eeab1b"];
	        $('#mall_nvalist ul li span:nth-of-type(1)').each(function(index, el) {
	            $(el).css("background",malarr[index]);
	        });
	        $('#back').on('click',function() {
	            window.history.go(-1);
	        })
	    }) 
	    window.onload = function () {
	    var timetext = document.getElementById('ma_daotime1').children[0];
	    var timetext1 = document.getElementById('ma_daotime2').children[0];
	    var timetext2 = document.getElementById('ma_daotime3').children[0];
	        var endtime = new Date("2016/12/12 18:00:00");
	        setInterval(dtime,1000);
	        function dtime () {
	            var newtime = new Date();
	            var second = parseInt((endtime.getTime() - newtime.getTime()) / 1000);
	            var d = parseInt(second / 3600 / 24);
	            // console.log(d);
	            var h = parseInt(second / 3600 % 24);
	            // console.log(h);
	            var m = parseInt(second / 60 % 60);
	            // console.log(m);
	            var s = parseInt(second % 60);
	            // console.log(s);
	            d<10 ? d="0"+d : d;
	            h<10 ? h="0"+h : h;
	            m<10 ? m="0"+m : m;
	            s<10 ? s="0"+s : s;
	            timetext.innerHTML = '<span class="iconfont icon-naozhong1"></span>'+"距结束: "+h+"时"+m+"分"+s+"秒";
	            timetext1.innerHTML = '<span class="iconfont icon-naozhong1"></span>'+"距结束: "+h+"时"+m+"分"+s+"秒";
	            timetext2.innerHTML = '<span class="iconfont icon-naozhong1"></span>'+"距结束: "+h+"时"+m+"分"+s+"秒";
	        }
	    }
	}
}) ();

/**
 * zhuce_js js  注册页
 * @authors Your Name (zyf@example.org)
 * @date    2016-11-17 09:42:53
 * @version $Id$
 */
 (function() {
 	if($('#yzmview').length > 0){
 		 	window.onload = function () {
 		 		var patt = /^1[34578]\d{9}$/;
 		 		var getnum = document.getElementById('getnum');
 		 		var yzmview = document.getElementById('yzmview');
 		 		var tishi = document.getElementById('tishi');
 		 		var phonenum = document.getElementById('phonenum');
 		 		var yzminput = document.getElementById('yzminput');
 		 		var btnyzm = document.getElementById('btnyzm');
 		 		var yzmtime = document.getElementById('yamdjs');
 		 		var count;
 				var timer = null;
 				getnum.addEventListener("click",function() {
 					clearInterval(timer);
 					count = 60;
 					if (patt.test(phonenum.value)) {
 						yzmview.style.display = "block";
 						tishi.style.display = "none";
 						timer = setInterval(yzmdjs,1000);
 					}
 					else {
 						tishi.style.display = "block";
 						phonenum.value = '';
 					}
 				})
 				var patt2 = /^[a-zA-Z0-9]{4}$/;
 				btnyzm.onclick = function () {
 					if (yzminput.value != '' && patt2.test(yzminput.value)) {
 						yzmview.style.display = "none";
 						yzminput.value = '';
 						phonenum.value = '';
 						clearInterval(timer);
 						yzmtime.innerHTML = "";
 					}
 					else {
 						yzminput.value = '';
 						alert('输入错误');
 					}
 				}
 				yzmtime.onclick = function () {
 					clearInterval(timer);
 					count = 60;
 					if (yzmtime.innerHTML == '重新发送验证码') {
 						timer = setInterval(yzmdjs,1000);
 					};
 				}
 				function yzmdjs() {
 					if (count >= 10 && count <= 60) {
 						yzmtime.innerHTML = '验证码' + count + '秒';
 					}
 					else if (count < 10 && count >= 0) {
 						yzmtime.innerHTML = '验证码' + '0'+ count + '秒';
 					}
 					else if (count <= 0){
 						yzmtime.innerHTML = '重新发送验证码';
 						clearInterval(timer);
 					}
 					count--;
 				}
 			}
 	}
 	
 }) ();