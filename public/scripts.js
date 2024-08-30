(function ($) {
    $(document).ready(function(){

        $(".mobilebutton").click(function() {
			$(".navigation ul").slideToggle("");
			$(this).attr("aria-expanded",$(this).attr("aria-expanded")==="true"?"false":"true");
		});
		$(document).on("keydown", ".mobilebutton",function(e){
			if(e.which==32)
				$(this).click();
			if(e.which==32)
				e.preventDefault();
		});
		$(window).resize(function(){
			$(".navigation ul").removeAttr("style");
			$(".mobilebutton").attr("aria-expanded","false");
		});

    });
})(jQuery);