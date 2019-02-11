/**
 * @file
 * Harvest news items from main site.
 */

var Drupal = Drupal || {};

(function ($) {
  "use strict";

  $.getJSON('https://libraries.mit.edu/news/wp-json/wp/v2/posts?tags=229')
    .done(function(data, result) {

      var container = $('#block-dynamicupdates');
      var items = [];
      var itemCount = 0;

      // Format received items
      $.each( data, function( key, val ) {
          // If we have more than 3 items, just write a "read more" link
          if ( 3 === itemCount ) {
            return;
          }
          var itemDate = new Date(val.date);
          var dateFormat = {
            year: "numeric",
            month: "long",
            day: "numeric"
          };
          items.push( "<div class='newsitem'>" + 
            "<h3 class='title'><a href='" + val.link + "'>" + val.title.rendered + "</a></h3>" +
            "<p class='dateline'>" + itemDate.toLocaleDateString("en-us", dateFormat) + "</p>" +
            "<p class=''>" + val.excerpt.rendered + "</p>" +
            "</div>"
          );
          itemCount++;
      });

      // Append formatted items
      $("<div>", {
        "class": "post-list col-sm-12",
        html: items.join("")
      }).appendTo(container);

    })
    .fail(function() {
      console.log('Failure parsing news item feed');
    });

})(window.jQuery);
