//
// Foundation-Jekyll - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

function randomIntFromInterval(min,max)
{
    return (Math.random()*(max-min+1)+min);
}

jQuery(document).ready(function($) {

  // $.each($(".interview"), function (i, val) {
  //   if ($( window ).width() > "640") {
  //     $(this).css("margin-top",randomIntFromInterval(-20, 0)+"px");
  //     $(this).parent().css("margin-left",randomIntFromInterval(-20, 20)+"px");
  //   } else if ($( window ).width() <= "640") {
  //     $(this).parent().css("margin-left",randomIntFromInterval(-20, 20)+"px");
  //     $(this).parent(":not(:first-child)").css("margin-top",randomIntFromInterval(-50, -20)+"px");
  //   }
  // });

  // Hover for interviews
  $(".interview").hover(function() {
    $(this).parent().siblings().toggleClass("unfocused");
    if ($( window ).width() > "640") {
        $(this).siblings().toggleClass("visible");
      }
  });
});

// Init Highlight.js
//hljs.initHighlightingOnLoad();
