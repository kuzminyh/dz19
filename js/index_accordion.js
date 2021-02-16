// accordion
$(function () {
    $("#accordion").accordion({
        icons: false,
        collapsible: true,
        classes: {
            "ui-accordion": "highlight"
        },
        active: false,
        heightStyle: "content",
    });
});

window.addEventListener('DOMContentLoaded', function () {
    //Вывод выпадающего меню в headere
    document.querySelectorAll('.menu__item').forEach(function(e){
      e.addEventListener('click',function(event){
        // alert(event.target)
        console.log(event)
        document.querySelector('.painters').classList.toggle('is-show')

      })
    })

    //клик на кнопку все события
    document.querySelector('.events__btn').addEventListener('click',function(event){
         
           document.querySelectorAll('.no-show').forEach(function(e){
                 e.classList.toggle('no-show')
           })
             event.target.classList.toggle('no-visibility')
             console.log(event.target.classList)
    })

    document.querySelectorAll('.accord-close').forEach(function (e) {
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
    

    // анимация на все ссылки
    document.querySelectorAll('a').forEach(function (e) {
        e.classList.add('anim-a')
        e.classList.add('anim-a-click')
    })

    document.querySelectorAll('.anim-a').forEach(function (e) {
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
              console.log(phone)
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