//JavaScript for Tool box

$(document).ready(function(){

	$(".gear-check").click(function(){
		$(".color-option").fadeToggle();
	});
	
	
	//style for opition li
	
	var colorLi = $(".color-option ul li");

	colorLi
		.eq(0).css("backgroundColor","#3F51B5").end()
		.eq(1).css("backgroundColor","#009688").end()
		.eq(2).css("backgroundColor","#E91E63").end()
		.eq(3).css("backgroundColor","#9C27B0").end()
		.eq(4).css("backgroundColor","#FF9800");
		
		//Change the Theme color on click
		
		colorLi.click(function()
		{
			$("link[href*='theme']").attr("href",$(this).attr("data-value"));
		});
});

