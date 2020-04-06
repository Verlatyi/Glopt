$(document).ready(function(){
    $('.slider').slick({
        arrows:true, // показать стрелки
        slidesToShow:3, // показывать по 3 слайда
        autoplay:true, // автоматическое проигрывание слайдов
        adaptiveHeight: true,
        pauseOnHover: true,
        swipe:true,
        touchThreshold: 10,
        /* waitForAnimate:false, // отключение задержки переключения слайдов по наєатию стрелок*/
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    });

  
});


function windowSize(){
  if ($(window).width() > '1200'){
      $('.pageup').fadeIn();
  } else {
      $('.pageup').fadeOut();
  }
}  //адптивность под мобильную версию (кнопочка вверх)

$(window).scroll(function() {
  if($(this).scrollTop() > 1600) {
      windowSize();
  }  else {
      $('.pageup').fadeOut();
  } 
});

$("a[href^='#up']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
}); 




window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });
  });
});