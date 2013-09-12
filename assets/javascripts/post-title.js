(function($) {

  var titleGradient = function() {
    // Cache #post-title
    $postTitle = $('#post-title');

    // Get #post-title contents
    var title = $postTitle.html();

    // Split #post-title contents into an array of strings
    var words = title.split(' ');

    // Empty #post-title before adding new elements
    $postTitle.empty();

    // Wrap #post-title contents with <span> elements and prepend them to the #post-title <h1> element
    for (var i = 0; i <= words.length + 1; i++) {
      $postTitle.prepend('<span class="title-' + i + '">' + words.pop() + '</span><br/>');
    }
  }
  titleGradient();

})(jQuery);

