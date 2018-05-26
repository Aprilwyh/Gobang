/**
 * GyUtils 共用
 * 
 * prompt box 提示框 BEGIN
 * 依赖jQuery GyUtils.css
 * 调用方式：
 * <button onClick="$.myAlert('这里是提示框内的内容');">点击弹出提示框</button>
 * <button onClick="$.myAlert({title:'Title',message:'message',callback:function(){alert(1)}});">点击弹出提示框(带有callback)</button>
 * <button onClick="$.myConfirm({title:'确认框提示标题',message:'确认框提示内容',callback:function(){alert('callback')}})">点击弹出确认框</button>
 * <button onClick="$.myToast('提示内容 这玩意还挺好用的啊')">点击弹出自动消失的提示</button><br/><br/> */ 
(function() {
	$.extend({
		myAlert: function(options) {//参数格式{title:'Title',message:'message',callback:function(){alert('callback')}}
			var option={title:"提示",message:"提示内容 默认",callback:function(){}}
			if(typeof(options)=="string"){
				option.message=options
			}else{
				option=$.extend(option,options);
			}
			var top=$(window).height()*0.3;
			$('body').append('<div class="myModa"><div class="myAlertBox"  style="margin-top:'+top+'px"><h6>'+option.title+'</h6><p>'+option.message+'</p><div class="btn sure">确定</div></div></div>');
			$('.btn.sure').click(function(){
				$('.myModa').remove();
				option.callback();
			})
		},
		myConfirm: function(options) {//参数格式{title:'Title',message:'message',callback:function(){alert('callback')}}
			var option={title:"提示",message:"提示内容 默认",callback:function(){}}
			if(typeof(options)=="string"){
				option.message=options
			}else{
				option=$.extend(option,options);
			}
			var top=$(window).height()*0.3;
			$('body').append('<div class="myModa"><div class="myAlertBox" style="margin-top:'+top+'px"><h6>'+option.title+'</h6><p>'+option.message+'</p><div class="col2"><div class="col" style="margin-right: 20px;"><div class="btn exit">取消</div></div><div class="col"><div class="btn sure">确定</div></div></div></div></div>');
			$('.btn.exit').click(function(){
				$('.myModa').remove();
			})
			$('.btn.sure').click(function(){
				$('.myModa').remove();
				option.callback();
			})
		},
		myToast:function(message){
			var top=$(window).height()*0.3;
			$('body').append('<div class="myToast">'+message+'</div>');
			console.log($('.myToast').outerWidth())
			var top=($(window).height()-$('.myToast').height())/2;
			var left=($('body').width()-$('.myToast').width())/2;
			$('.myToast').css({'top':top+'px','left':left+'px'});
			setTimeout(function(){
				$('.myToast').fadeOut(300);
				setTimeout(function(){
					$('.myToast').remove();
				},300)
			},1000)
		}
	});
})(jQuery)
/* prompt 提示框 END */ 
