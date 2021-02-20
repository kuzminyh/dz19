//for select
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
   searchEnabled: false,
    itemSelectText: ''
});
// document.querySelector('.choices__item').addEventListener('click', function (e) {
//   console.log(5)
//   document.querySelector('.select-list').classList.toggle('open')
// })

// swiper
var mySwiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    // direction: 'horizontal',
    // loop: true,

    // If we need pagination
    pagination: {
       el: '.swiper-pagination-custom',
       type: 'fraction',
    },

    // Navigation arrows
    navigation: {
       nextEl: '.swiper-button-next-custom',
       prevEl: '.swiper-button-prev-custom',
    },

 })
 var mySwiper2 = new Swiper('.swiper2', {
   // Optional parameters
   slidesPerView: 3,
   spaceBetween: 50,
   slidesPerGroup: 3,
   // direction: 'horizontal',
   // loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper2-pagination-custom',
      type: 'fraction',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper2-button-next-custom',
      prevEl: '.swiper2-button-prev-custom',
   },

})
var mySwiper3 = new Swiper('.swiper3', {
   // Optional parameters
   slidesPerView: 3,
   spaceBetween: 50,
   // direction: 'horizontal',
   // loop: true,

   // If we need pagination
   pagination: {
      // el: '.swiper2-pagination-custom',
      // type: 'fraction',
   },

   // Navigation arrows
   navigation: {
       nextEl: '.swiper3-button-next-custom',
       prevEl: '.swiper3-button-prev-custom',
   },

})

// Тултипы
tippy('.projects__tooltip1', {
    content: ' <p style="  font-size: 12px; font-style: normal; text-align: center; "> Пример современных тенденций - современная методология разработки </p> ',
    maxWidth: 264,
    allowHTML: true,
    theme: 'tomato',
 });
 tippy('.projects__tooltip2', {
   content: ' <p style="  font-size: 12px; font-style: normal; text-align: center;"> Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции   </p> ',
   maxWidth: 264,
   allowHTML: true,
   theme: 'tomato',
});
tippy('.projects__tooltip3', {
   content: ' <p style="  font-size: 12px; font-style: normal; text-align: center;"> В стремлении повысить качество    </p> ',
   maxWidth: 232,
   allowHTML: true,
   theme: 'tomato',
});
 
//  tippy('.projects__tooltip1', {
//    theme: 'tomato',
//  });
 
// font-family: Open Sans;
// font-size: 12px;
// font-style: normal;
// font-weight: 600;
// line-height: 16px;
// letter-spacing: 0em;
// text-align: center;

 
