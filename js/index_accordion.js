// accordion
$(function () {
  $("#accordion").accordion({
    icons: false,
    collapsible: true,
    active: 0,
    heightStyle: "content",
  });
});

window.addEventListener('DOMContentLoaded', function () {
  //клик на бюргер
  document.querySelector('.burger-btn').addEventListener('click',function(event){
        // console.log(event.target)
        document.querySelector('.header__burger-menu').classList.toggle('burger__visual')

  })
  //стилизация скролбара в хэдере
  document.querySelectorAll('.painters__link').forEach(function(e){
     e.addEventListener('mouseout',function(){
         document.querySelectorAll('.simplebar-scrollbar ').forEach(function(e){
         e.classList.remove('simplebar-scrollbar--hover')
       })
     })
     e.addEventListener('mouseover',function(){
         document.querySelectorAll('.simplebar-scrollbar ').forEach(function(e){
         e.classList.add('simplebar-scrollbar--hover')
       })
     })
  })
  //Вывод выпадающего меню в headere
  document.querySelectorAll('.menu__btn').forEach(function (e) {
    e.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      if (document.querySelector(`[data-target="${path}"]`).classList.contains('is-show')) {
        document.querySelector(`[data-target="${path}"]`).classList.toggle('is-show')
        event.currentTarget.classList.toggle('menu__btn--clicked')
        console.log(1)
      }
      else {
        document.querySelectorAll('.is-show').forEach(function (el) {
          el.classList.remove('is-show')
        })
        document.querySelectorAll('.menu__btn').forEach(function (e) {
          e.classList.remove('menu__btn--clicked')
          console.log("delet", e)
        })
        document.querySelector(`[data-target="${path}"]`).classList.toggle('is-show')
        event.currentTarget.classList.toggle('menu__btn--clicked')
        console.log("toggle", event.currentTarget)
      }
    })
  })

  //Клик на флаги
  document.querySelector('.catalog-description').classList.add('is-visual')
  document.querySelectorAll('.flag__link').forEach(function (e) {

    e.addEventListener('click', function (event) {
      document.querySelectorAll('.flag-active').forEach(function (e) {
        e.classList.remove('flag-active')
      })
      event.target.parentElement.classList.add('flag-active')
      document.querySelectorAll('.catalog-description').forEach(function (e) {
        e.classList.remove('is-visual')
      })
      const flag = event.currentTarget.dataset.flag
      document.querySelectorAll('.catalog-description').forEach(function (e) {
        e.classList.remove('is-visual')
      })
      document.querySelector(`[data-descr="${flag}"]`).classList.add('is-visual')
      document.querySelector('.catalog-right').classList.add('no-visual')
      document.querySelector('.catalog-left').classList.add('no-visual')
      setTimeout(function () {
        document.querySelector('.catalog-right').classList.remove('no-visual')
      }, 1000)
      setTimeout(function () {
        document.querySelector('.catalog-left').classList.remove('no-visual')
      }, 1000)
    })
  })

  //Клик на флаги
  document.querySelectorAll('.flag__all').forEach(function (e) {
    e.addEventListener('click', function (event) {
      document.querySelectorAll('.flag__item-active').forEach(function (e) {
        console.log(e)
        e.classList.remove('flag__item-active')
      })
      event.target.parentElement.classList.add('flag__item-active')
      document.querySelectorAll('.catalog-description').forEach(function (e) {
        e.classList.remove('is-visual')
      })
      const flag = event.currentTarget.dataset.flag
      document.querySelectorAll('.catalog-description').forEach(function (e) {
        e.classList.remove('is-visual')
      })
      document.querySelector(`[data-descr="${flag}"]`).classList.add('is-visual')
      document.querySelector('.catalog-right').classList.add('no-visual')
      document.querySelector('.catalog-left').classList.add('no-visual')
      setTimeout(function () {
        document.querySelector('.catalog-right').classList.remove('no-visual')
      }, 1000)
      setTimeout(function () {
        document.querySelector('.catalog-left').classList.remove('no-visual')
      }, 1000)
    })
  })

  //Клик на художника в акордеоне
  document.querySelectorAll('.painter__item').forEach(function (e) {

    e.addEventListener('click', function (event) {
      document.querySelectorAll('.painter__btn').forEach(function (e) {
        e.classList.remove('activ')
      })
      event.target.classList.add('activ')
      event.preventDefault()
      const author = event.currentTarget.dataset.author
      document.querySelectorAll('.catalog-left__painter-info').forEach(function (e) {
        e.classList.remove('is-visual')
      })
      document.querySelector(`[data-authordescr = "${author}"]`).classList.add('is-visual')

    })

  })

  //клик на кнопку все события
  document.querySelector('.events__btn').addEventListener('click', function (event) {

    document.querySelectorAll('.no-show').forEach(function (e) {
      e.classList.toggle('no-show')
    })
    event.target.classList.toggle('no-visibility')
    console.log(event.target.classList)
  })
  //Клик на периоды в каталоге
  document.querySelectorAll('.catalog-right__period').forEach(function (e) {
    e.addEventListener('click', function (event) {
      if (event.target.children[1].classList.contains('accord-open')) {
        event.target.children[1].classList.remove('accord-open')
        event.target.children[1].classList.add('accord-close')
      }
      else {
        document.querySelectorAll('.accord-open').forEach(function (el) {
          el.classList.remove('accord-open')
          el.classList.add('accord-close')
        })
        event.target.children[1].classList.add('accord-open')
        event.target.children[1].classList.remove('accord-close')
      }
      console.log('event.target=', event.target.children[1])
    })
  })
  //Клик на периоды в каталоге
  document.querySelectorAll('.accord-close, .accord-open').forEach(function (e) {
    e.addEventListener('click', function (event) {
      if (event.target.classList.contains('accord-open')) {
        event.target.classList.remove('accord-open')
        event.target.classList.add('accord-close')
      }
      else {
        document.querySelectorAll('.accord-open').forEach(function (el) {
          el.classList.remove('accord-open')
          el.classList.add('accord-close')
        })
        event.target.classList.add('accord-open')
        event.target.classList.remove('accord-close')
      }
    })
  })
  //смена цвет checkbox


  // анимация на все ссылки и кнопки
  document.querySelectorAll('a').forEach(function (e) {
    e.classList.add('anim')
    e.classList.add('anim-click')
  })
  // document.querySelectorAll('button').forEach(function (e) {
  //   e.classList.add('anim')
  //   e.classList.add('anim-click')
  // })

  document.querySelectorAll('.anim').forEach(function (e) {
    e.addEventListener('click', function (el) {
      el.target.classList.add('clicked')
      setTimeout(function () {
        el.target.classList.remove('clicked');
      }, 600);
    })
  })
  //валидация полей формы
  var selector = document.querySelector("input[type='tel']")
  var im = new Inputmask("+7 (999)-999-99-99")
  im.mask(selector)

  new JustValidate('.form', {
    tooltip: {
      fadeOutTime: 3000,
    },
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },
      tel: {
        required: true,
        function(name, value) {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      email: {
        required: true,
        email: true
      }
    }
  })

  //   maps
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {

      center: [55.757896, 37.600792],

      zoom: 15

    });
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.757896, 37.600792] // координаты точки
      }
    });
    var myPlacemark = new ymaps.Placemark([55.757896, 37.600792], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/maps_pointer.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]

    });
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
    //  myMap.controls.remove('zoomControl') //ymaps-2-1-78-controls__control
    myMap.controls.remove('searchControl')
    myMap.controls.remove('typeSelector')
    myMap.controls.remove('trafficControl')
    myMap.controls.remove('routePanelControl')
    myMap.controls.remove('routeButtonControl')
  }


})