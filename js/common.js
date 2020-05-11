jQuery(document).ready(function($) {
	
	"use strict";
	
	
	// menu scroll fixed
   $(window).scroll(function() {
				
      // main
      if ($(document).scrollTop() > 300) {
         $('.header-wrap').addClass('fixed scroll');
							 // $('.basicTopSearch').addClass('displaynone');
      } else {
         $('.header-wrap').removeClass('fixed scroll');
						  // $('.basicTopSearch').removeClass('displaynone');
      }

   });

	
									
// tab icon on/off								
$(function() { 
    $(".off").hover(function(){ 
       $(this).children("img").attr("src", $(this).children("img").attr("src").replace("off.png", "on.png")); 
    }, function(){ 
       $(this).children("img").attr("src", $(this).children("img").attr("src").replace("on.png", "off.png")); 
    }); 
	
});
	
	
	
	
	
	
	
});
																							