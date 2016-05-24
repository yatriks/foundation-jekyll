//
// Foundation-Jekyll - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

// jQuery!

// Hover for interviews
jQuery(document).ready(function($) {
  $(".interview").hover(function() {
    $(this).siblings().children("p").toggleClass("visible");
    $(this).parent().siblings().toggleClass("unfocused");
  });
});

// Init Highlight.js
//hljs.initHighlightingOnLoad();
