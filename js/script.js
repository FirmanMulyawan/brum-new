$(window).on('scroll', function () {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > 140) {
    $('.navbar').addClass('affix');
  } else {
    $('.navbar').removeClass('affix');
  }
});
