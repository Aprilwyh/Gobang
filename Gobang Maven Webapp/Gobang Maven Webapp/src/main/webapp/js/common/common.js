function pop(){
    $('.bgPop,.pop').show();
  	$('.pop-close').click(function () {
	    $('.bgPop,.pop').hide();
	});
	$('.click_pop').click(function () {
	    $('.bgPop,.pop').show();
	});
	$('.bgPop').click(function () {
	    $('.bgPop,.pop').hide();
	});
	
	$('.selectGameDiv').hover(function () {
	    $(this).attr("class","selectedGameDiv");
	},function () {
	    $(this).attr("class","selectGameDiv");
	});
	$('.selectGameDiv').click(function () {
	    $('.bgPop,.pop').hide();
	    var hh = $(this).attr("id");
	    alert(hh);
	});
}