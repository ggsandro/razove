var slider = window.tns({
  container: '.product__slider',
  items: 2,
  slideBy: 'page',
  autoplay: true,
  autoWidth: true,
  gutter: 10,
  controls: true,
  nav: false,
  autoplay: false,
  mouseDrag: true,
  arrowKeys: true,
  controlsContainer: '.product__toggls',
  prevButton: '.product__arrow--prev',
  nextButton: '.product__arrow--next',
  responsive: {
    900: {
      items: 4,
      gutter: 15
    }
  }
});
