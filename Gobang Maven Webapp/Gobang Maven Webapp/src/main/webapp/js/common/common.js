/**
 * pop: 页面弹出层 
 * date: 2018-5-17
 * author: weiyanhui
**/

/**
 * 弹出层（游戏难易度选择）
 * @param isRrdz 是否人呢人对战
 */
function pop(isRrdz){
	if(isRrdz){
		$('.operation').hide();
		$('#giveUpLi').hide();
		return;
	}
    $('.bgPop,.pop').show();
//  	$('.pop-close').click(function () {
//	    $('.bgPop,.pop').hide();
//	});
//	$('.click_pop').click(function () {
//	    $('.bgPop,.pop').show();
//	});
	$('.bgPop').click(function () {
	    $('.bgPop,.pop').hide();
	    $("#nyd").val("commonly");
	});
	/**
	 * 鼠标移入移出效果
	 */
	$('.selectGameDiv').hover(function () {
	    $(this).attr("class","selectedGameDiv");
	},function () {
	    $(this).attr("class","selectGameDiv");
	});
	/**
	 * 点击选择
	 */
	$('.selectGameDiv').click(function () {
	    $('.bgPop,.pop').hide();
	    var clickedGameDivId = $(this).attr("id");
	    $(".commonly").hide();
	    if(clickedGameDivId=="simple"){
	    	$("#nyd").val("simple");
	    	$(".simple").show();
	    }else if(clickedGameDivId=="difficulty"){
	    	$("#nyd").val("difficulty");
	    	$(".difficulty").show();
	    }else{
	    	$("#nyd").val("commonly");
	    	$(".commonly").show();
	    }
	});
}
/**
 * 退出游戏
 */
function closewin(){
	var ieVersion = IEVersion();
	if(ieVersion != '-1'){
		window.opener = null;
		window.open("", "_self");
	   	window.close();
	}else{
		window.location.href="about:blank";
	}
}
/**
 * 右侧操作栏
 */
$(function(){
	$('.slide').mouseenter(function(){
		$('.slide .info').addClass('hover');
	});
	$('.slide').mouseleave(function(){
		$('.slide .info').removeClass('hover');
	});	
});
/**
 * 关闭特效
 */
function closeShowResult(){
  	$('#showResult').click(function () {
  		$('#showResult').hide();
	});
}
/**
 * 黑棋获胜
 */
function winBlack(){
	closeShowResult();
	$('#showResult').show();
	$('#winBlack').show();
	$('#winWhite').hide();
	$('#congratulations').show();
}
/**
 * 白棋获胜
 */
function winWhite(){
	$('#showResult').show();
	closeShowResult();
	$('#winWhite').show();
	$('#winBlack').hide();
	$('#congratulations').show();
}
/**
 * AI获胜
 */
function winAI(){
	$('#congratulations').hide();
}