(function($){
	var slide=function(ele,options){
		this.$ele=$(ele);
		var defaults={
			speed:1000,
		};
		var off=false;
		this.options=$.extend(defaults,options);
		this.statesDown=[
			{'Index':4,left:10,width:360,height:290,top:27,$opacity:0.5},
			{'Index':5,left:335,width:430,height:345,top:0,$opacity:1},
			{'Index':1,left:730,width:360,height:290,top:27,$opacity:0.5}
		]
		this.lis=this.$ele.find('li');
		this.li1=this.$ele.find('li[index=1]');
		this.li2=this.$ele.find('li[index=2]');
		this.$ele.find('div:first').on('click',function(){
			if(off) return false;
			off=true;
			this.moveup();
			this.prev();
			setTimeout(function(){
				off=false;
			},this.options.speed);            // 只有 1s（=动画的时间） 后再点击按钮才能生效
		}.bind(this))
		this.$ele.find('div:last').on('click',function(){
			if(off) return false;
			off=true;
			this.movedown();
			this.next();
			setTimeout(function(){
				off=false;
			},this.options.speed);
		}.bind(this));
		this.move();
	};
	slide.prototype={
		move:function(){
			this.lis.each(function(i,ele){
				$(ele).attr('Index',this.statesDown[i]['Index'])
					.css('z-index',this.statesDown[i]['Index'])
					.animate(this.statesDown[i],this.options.speed)
					.find('img').css('opacity',this.statesDown.$opacity);
			}.bind(this))
		},

		/*为了使点击向上的按钮时图片不出现混乱，将z-index=1和z-index=4的调换一下大小*/
		moveup:function(){
			$.each(this.statesDown,function(i,ele){
				if(ele['Index']==1){
					ele['Index']=3
				}
				else if(ele['Index']==4){
					ele['Index']=2
				}
			})
		},
		/*为了使点击向下的按钮时图片不出现混乱，将z-index=2和z-index=3的调换一下大小*/
		movedown:function(){
			$.each(this.statesDown,function(i,ele){
				// console.log(ele)
				if(ele['Index']==3){
					ele['Index']=1
				}
				else if(ele['Index']==2){
					ele['Index']=4
				}
			})
		},
		next:function(){
			this.statesDown.unshift(this.statesDown.pop());
			this.move();
		},
		prev:function(){
			
			this.statesDown.push(this.statesDown.shift());
			this.move();
		},
	};
	$.fn.slide=function(options){
		return new slide(this,options)
	}
})(jQuery);