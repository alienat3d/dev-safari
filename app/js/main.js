$(function () {
  // === SLICK SLIDER PLUGIN ===
  $('.gallery__slider').slick({
    prevArrow:
      '<button class="slick-btn slick-prev" type="button"><img class="gallery__left-btn-icon" src="images/icons/angle-left.svg" alt="иконка кнопка влево"></button>',
    nextArrow:
      '<button class="slick-btn slick-next" type="button"><img class="gallery__right-btn-icon" src="images/icons/angle-right.svg" alt="иконка кнопка вправо"></button>',
  });
  // === / SLICK SLIDER PLUGIN ===

  // === MAGNIFIC POPUP PLUGIN [VIDEO-PREVIEW] ===
  $('.video-preview__popup-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  // === / MAGNIFIC POPUP PLUGIN [VIDEO-PREVIEW] ===
  // === MAGNIFIC POPUP PLUGIN [GALLERY] ===
  $('.gallery__item-inner').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return (
          item.el.attr('title') +
          '<small>by ' +
          item.el.attr('author') +
          '</small>'
        );
      },
    },
  });
  // === / MAGNIFIC POPUP PLUGIN [GALLERY] ===
});
