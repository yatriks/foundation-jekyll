//
// wade-in-the-water - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

jQuery(document).ready(function($) {

  // Hover for interviews
  $(".interview").hover(function() {
    $(this).parent().siblings().toggleClass("unfocused");
  });
  // Hover for issues
  $(".issue").hover(function() {
    $(this).parent().siblings().children().toggleClass("unfocused");
  });
});

// Init Highlight.js
//hljs.initHighlightingOnLoad();
