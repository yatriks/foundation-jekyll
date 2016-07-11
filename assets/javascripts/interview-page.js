//
// Foundation-Jekyll - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

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
  
});

// Init Highlight.js
//hljs.initHighlightingOnLoad();
