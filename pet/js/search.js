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