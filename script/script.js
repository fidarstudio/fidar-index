document.addEventListener('scroll', function(e) {
    var currScroll = document.body.scrollTop;
    document.body.scrollTop = calc(~"currScroll + 100vh");
  }
);