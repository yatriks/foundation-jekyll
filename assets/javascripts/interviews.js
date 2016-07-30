$(document).foundation();

function randomIntFromInterval(min, max) {
  return (Math.random() * (max - min + 1) + min);
}

function toggleArrayItem(array, value) {
    var i = array.indexOf(value);
    if (i === -1)
        array.push(value);
    else
        array.splice(i,1);
}

var findOne = function (haystack, arr) {
    if (arr.length === 0) {
      return true;
    }
    return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};

jQuery(document).ready(function($) {

  $.each($(".interview"), function(i, val) {
    if ($(window).width() > "640") {
      $(this).css("margin-top", randomIntFromInterval(-20, 0) + "px");
      $(this).parent().css("margin-left", randomIntFromInterval(-20, 20) + "px");
    } else if ($(window).width() <= "640") {
      $(this).parent().css("margin-left", randomIntFromInterval(-20, 20)+70 + "px");
      $(this).parent(":not(:first-child)").css("margin-top", randomIntFromInterval(-50, -20) + "px");
    }
  });

  // Hover for interviews
  $(".interview").hover(function() {

    $(this).parent().siblings().toggleClass("unfocused");
    if ($(window).width() > "640") {
      $(this).siblings().toggleClass("visible");
    }
  });

  // Type to filter
  $('#filter').keyup(function() {

    var filter = this.value.toLowerCase(); // no need to call jQuery here

    $('.interview-container').each(function() {

      var interview = $(this);
      var title = interview.find('a.interview > p').text().toLowerCase();

      // console.log(title, title.indexOf(filter), filter);

      if (title.indexOf(filter) < 0) {
        interview.hide();
      } else if (title.indexOf(filter) >= 0) {
        interview.show();
      }

    });
  });

  var selected = []; // selected filters

  $(".tag.filter").click (function() {
    var slug = $(this).attr("data-filter-tag");
    toggleArrayItem(selected, slug);
    $(this).toggleClass("selected");
    $('.interview-container').each(function() {
      this_tags = $(this).attr("data-filter-tags").split(",");
      var found = findOne(this_tags, selected);
      if (found === true) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

});

// Init Highlight.js
//hljs.initHighlightingOnLoad();
