/**
 * @file
 * Implement toggled panel for "show more content"
 */

var Drupal = Drupal || {};

(function ($) {
  "use strict";

  $(".control").click(function() {
    $(this).parent().find(".toggle").toggleClass("sr-only");
    $(this).toggleClass("sr-only");
  })

})(window.jQuery);
