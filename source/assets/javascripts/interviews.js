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

  $.each($('.interview-text > p'), function(i, val) {
    $(this).attr("data-para-index",i);
    if(!$(this).has("img").length) {
      $(this).addClass("end");
    } else {
      var para = $(this);
      var image = $(this).children("img").attr("src");
      var leftOffset = para.offset().left + para.width() + 30;
      para.after("<div class='medium-2 large-4' style='position: absolute; left: "+ leftOffset +"px ;top:"+para.offset().top+"px;'><img src='"+image+"' /></div>");
      // console.log("hi");
      // $(this).after('<div class="hide-for-small medium-2 large-5 columns" style="border:1px solid red;">hi</div>');
    }
  });

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
