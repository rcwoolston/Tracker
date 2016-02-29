$(document).ready(function(){
	$('.entry').click(function(){
		if($(this).hasClass("selected")){
			$(this).removeClass("selected");
			$('.entry').not(this).slideDown(1000);
			$(this).parent().siblings().children('.column-header').slideDown();
		}else{
			$(this).addClass("selected");
			$('.entry').not(this).slideUp(1000);
			$(this).parent().siblings().children('.column-header').slideUp();
			$('#home-column').removeClass('hidden');
		}
	});
});