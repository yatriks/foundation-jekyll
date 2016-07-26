//
// Foundation-Jekyll - Javascripts
// Author: @aaronkwhite
//

// Init Foundation
$(document).foundation();

jQuery(document).ready(function($) {

  // $.each($('.interview-text > p').not('.interview-text > blockquote > p'), function(i, val) {
  //   $(this).attr("data-para-index", i);
  //   if (!$(this).has("img").length) {
  //     $(this).addClass("end");
  //   } else {
  //     var para = $(this);
  //     var image = $(this).children("img").attr("src");
  //     var leftOffset = para.offset().left + para.width() + 30;
  //     para.wrap("<span class='with-image'></span>");
  //     para.after("<div class='small-12 medium-5 large-4 columns text-center end'><img class='inline-image' id='image-" + i + "' src='" + image + "' /></div>");
  //     para.children("img").remove();
  //     // para.height($("#image-"+i).height());
  //     // console.log("hi");
  //     // $(this).after('<div class="hide-for-small medium-2 large-5 columns" style="border:1px solid red;">hi</div>');
  //   }
  // });

    $(window).on('load resize', function () {
      var windowWidth = $(window).width();
      if (windowWidth < 640 && $(".gallery > div > a > img")) {
        var images = $(".gallery > div").toArray();
        var paragraphs = $(".interview-text > p").toArray();
        var pcount = paragraphs.length; // Paragraph Count
        var icount = images.length; // Image Count
        var spacing = Math.floor((pcount-5) / icount);
        for (i = 0; i < icount+1; i++) {
          $(images[i]).detach();
          $(paragraphs[spacing*(i+1)]).after(images[i]);
        }
      }
    });

  //
  // $(window).resize(function() {
  //   var windowWidth = $(window).width();
  //   if (windowWidth > 480) {
  //     $.each($('.with-image'), function(i, val) {
  //       var para = $(this).find("p");
  //       var image = $(this).find(".inline-image");
  //       var imageHeight = image.height() + "px";
  //       var paraHeight = para.height() + "px";
  //       var chosenHeight = Math.max(imageHeight, paraHeight);
  //       para.height(chosenHeight);
  //       image.height(chosenHeight);
  //     });
  //   }
  // });

});

// Init Highlight.js
//hljs.initHighlightingOnLoad();
