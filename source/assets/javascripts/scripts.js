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
  // Animate Circles
  // var max = $('.interview-container').length;
  // var durationMin = 0.200;
  // var durationMax = 0.600;
  // $(".interview-container").each(function() {
  //     var duration = randomIntFromInterval(durationMin, durationMax);
  //     $(this)
  //       .addClass("visible")
  //       .css("transition-duration", duration)
  //       .removeAttr("style");
  //   });

  // // Height for circles
  // $( window ).resize(function() {
  //   var interviewWidth = $(".interview").css("width");
  //   $(".interview").css("height", interviewWidth);
  // });

  $.each($(".interview"), function (i, val) {
    $(this).css("margin-top",randomIntFromInterval(-20, 20));
    $(this).parent().css("margin-left",randomIntFromInterval(-20, 20));
  });

  // Hover for interviews
  $(".interview").hover(function() {
    if ($( window ).width() > "640") {
        $(this).siblings().toggleClass("visible");
        $(this).parent().siblings().toggleClass("unfocused");
      }
  });
});

// Init Highlight.js
//hljs.initHighlightingOnLoad();
