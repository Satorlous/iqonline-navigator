$(() => {
   const mountTabs = (buttons, tabs) => {
      let buyTabsButtons = buttons.children()
      let activeTab;

      buyTabsButtons.each((index, element) => {

         $(element).on('click', (event) => {

            buyTabsButtons.each((index, element) => {
               if($(element).hasClass('active'))
                  activeTab = $(element)
            })

            let currentTab = $(event.target)
            let tabId = currentTab.data('tabId')
            activeTab.removeClass('active')
            currentTab.addClass('active')

            let contentTabs = tabs.children()

            contentTabs.each((index, element) => {

               $(element).removeClass('active')
               if($(element).data('tabId') === tabId) {
                  $(element).addClass('active')
               }
            })

         })
      })
   }

   mountTabs($('.tab-slider--buy'), $('.buy-tabs__content'))
   mountTabs($('.tab-slider--news'), $('.news-tabs__content'))

   const getActiveIndex = function (slides) {
      let active = 0;
      [...slides.children()].forEach((el, index) => {
         if (el.classList.contains('glide__slide--active'))
            active = index
      })
      return active
   }

   const disableOutterItems = (slider, slides) => {

      let activeIndex = getActiveIndex(slides)
      let currentPerView = slider.settings.perView
      let length = slides.children().length;
      [...slides.children()].forEach((el, index) => {
         el.classList.remove('glide__slide--disabled')
      })

      for (let i = activeIndex + currentPerView; i < length; i++)
         slides.children()[i].classList.add('glide__slide--disabled')
      for (let i = activeIndex; i > 0; i--)
         slides.children()[i-1].classList.add('glide__slide--disabled')
   }

   //#region HeaderSlider
   const headerSlider = new Glide('.glide-header', {

      breakpoints: {
         1279: {
            perView: 3
         },
         990: {
            perView: 2
         },
         575: {
            perView: 1
         },
      },
      type: 'slider',
      perView: 4,
      rewind: false,
      bound: true,
   });

   let headSlides = $(".glide-header .glide__slides")

   headerSlider.on('mount.after', () => {
      disableOutterItems(headerSlider, headSlides)
   })

   headerSlider.on('run.after', () => {
      disableOutterItems(headerSlider, headSlides)
   });

   headerSlider.on('resize', () => {
      disableOutterItems(headerSlider, headSlides)
   });

   headerSlider.mount();
   //#endregion HeaderSlider

   //#region CardSlider

   const cardSlider = new Glide('.glide-cards', {

      breakpoints: {
         990: {
            perView: 2
         },
         575: {
            perView: 1,
         },
      },
      type: 'slider',
      gap: 17,
      perView: 3,
      rewind: false,
      bound: true,
   });

   let cardSlides = $(".glide-cards .glide__slides")

   cardSlider.on('mount.after', () => {
      disableOutterItems(cardSlider, cardSlides)
   })

   cardSlider.on('run.after', () => {
      disableOutterItems(cardSlider, cardSlides);
   });

   cardSlider.on('resize', () => {
      disableOutterItems(cardSlider, cardSlides)
   });

   cardSlider.mount()

   //#endregion CardSlider

   //#region GridSliderImages
   const gridSliderImages = new Glide('.glide-grid-images', {
      type: 'carousel',
      perView: 1,
      gap: 0,
      bound: true,
   });

   gridSliderImages.mount()
   //#endregion GridSliderImages

   //#region GridSliderCards
   const gridSliderCards = new Glide('.glide-grid-cards-mobile', {
      breakpoints: {
         1279: {
            perView: 3
         },
         990: {
            perView: 2
         },
         575: {
            perView: 1
         },
      },
      type: 'slider',
      perView: 3,
      bound: true,
      rewind: false,
   });

   gridSliderCards.mount()
   //#endregion GridSliderCards

   //#region LargeGridItemSlider
   const largeGridItemSlider = new Glide('.glide-large-card', {
      type: 'slider',
      perView: 1,
      bound: true,
      rewind: false,
   });

   largeGridItemSlider.mount()
   //#endregion LargeGridItemSlider

   //#region SmallGridItemSlider
   const smallGridItemSlider = new Glide('.glide-small-cards', {
      breakpoints: {
         990: {
            perView: 2
         },
         575: {
            perView: 1
         }
      },
      type: 'slider',
      perView: 3,
      gap: 15,
      bound: true,
      rewind: false,
   });

   smallGridItemSlider.mount()
   //#endregion LargeGridItemSlider

   //#region NewsSlider

   const newsCardSlider = new Glide('.news-glide', {

      breakpoints: {
         990: {
            perView: 2
         },
         575: {
            perView: 1,
         },
      },
      type: 'slider',
      gap: 17,
      perView: 3,
      rewind: false,
      bound: true,
   });

   let newsCardSlides = $(".news-glide .glide__slides")

   newsCardSlider.on('mount.after', () => {
      disableOutterItems(newsCardSlider, newsCardSlides)
   })

   newsCardSlider.on('run.after', () => {
      disableOutterItems(newsCardSlider, newsCardSlides);
   });

   newsCardSlider.on('resize', () => {
      disableOutterItems(newsCardSlider, newsCardSlides)
   });

   newsCardSlider.mount()

   const storiesCardSlider = new Glide('.stories-glide', {

      breakpoints: {
         990: {
            perView: 2
         },
         575: {
            perView: 1,
         },
      },
      type: 'slider',
      gap: 17,
      perView: 3,
      rewind: false,
      bound: true,
   });

   let storiesCardSlides = $(".stories-glide .glide__slides")

   storiesCardSlider.on('mount.after', () => {
      disableOutterItems(storiesCardSlider, storiesCardSlides)
   })

   storiesCardSlider.on('run.after', () => {
      disableOutterItems(storiesCardSlider, storiesCardSlides);
   });

   storiesCardSlider.on('resize', () => {
      disableOutterItems(storiesCardSlider, storiesCardSlides)
   });

   storiesCardSlider.mount()

   const usefulCardSlider = new Glide('.useful-glide', {

      breakpoints: {
         990: {
            perView: 2
         },
         575: {
            perView: 1,
         },
      },
      type: 'slider',
      gap: 17,
      perView: 3,
      rewind: false,
      bound: true,
   });

   let usefulCardSlides = $(".useful-glide .glide__slides")

   usefulCardSlider.on('mount.after', () => {
      disableOutterItems(usefulCardSlider, usefulCardSlides)
   })

   usefulCardSlider.on('run.after', () => {
      disableOutterItems(usefulCardSlider, usefulCardSlides);
   });

   usefulCardSlider.on('resize', () => {
      disableOutterItems(usefulCardSlider, usefulCardSlides)
   });

   usefulCardSlider.mount()

   //#endregion NewsSlider

   //#region HeaderHam

   $('.header__ham').on('click', () => {

      let toggleList = [
         '.header__navigation-mobile',
         '.header__ham',
         '.background-overlay'
      ];

      toggleList.forEach((el) => {
         $(el).toggleClass('active')
      })

      $('body').toggleClass('h-100');
   });

   $('div.nav-mobile-item__text').each((index, element) => {

      $(element).on('click', (event) => {

         $(event.target)
            .closest('.nav-mobile__item')
            .children('.nav-mobile__dropdown')
            .toggle(300);
      });
   });

   //#endregion HeaderHam

   //#region HomesteadInputSliders

   let priceSlider = $('.price-slider').get(0);
   noUiSlider.create(priceSlider , {
      start: [380249, 1907101],
      connect: true,
      range: {
         'min': 380249,
         'max': 3500000
      }
   })


   let lowerPriceSpan = $(".price-form .range__start-value span")
   let upperPriceSpan = $(".price-form .range__end-value span")
   priceSlider.noUiSlider.on('update', (values) => {
      let lowerValue = Math.round(values[0]).toString().split(/(?=(?:...)*$)/).join(' ');
      let upperValue = Math.round(values[1]).toString().split(/(?=(?:...)*$)/).join(' ');
      lowerPriceSpan.html(lowerValue)
      upperPriceSpan.html(upperValue)
   })

   let sizeSlider = $('.size-slider').get(0);
   noUiSlider.create(sizeSlider , {
      start: [5, 15],
      connect: true,
      range: {
         'min': 5,
         'max': 25
      },
      step: 1
   })

   let lowerSizeSpan = $(".size-form .range__start-value span")
   let upperSizeSpan = $(".size-form .range__end-value span")
   sizeSlider.noUiSlider.on('update', (values) => {
      lowerSizeSpan.html(Math.round(values[0]).toString())
      upperSizeSpan.html(Math.round(values[1]).toString())
   })

   //#endregion HomesteadInputSliders

});