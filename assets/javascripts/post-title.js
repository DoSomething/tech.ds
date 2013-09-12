$postTitle = $('#post-title');
var title = $postTitle.html();
var words = title.split(' ');
$postTitle.empty();
for (var i = 0; i <= words.length + 1; i++) {
  $postTitle.prepend('<span class="title-' + i + '">' + words.pop() + '</span><br/>');
}
