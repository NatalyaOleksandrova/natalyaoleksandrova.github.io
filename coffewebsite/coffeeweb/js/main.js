$(document).ready(function () {
  
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });
    function toggleMobMenu() {
  
      $('.menu-btn').click(function (e) {
          $innerMenu = $('.link');
          $ofInnerMenu = $('.submenu');
          e.preventDefault();
          $('.mob').slideToggle('200');
          $innerMenu.children('ul').slideUp('200');
          $innerMenu.removeClass('active');
          $ofInnerMenu.children('ul').slideUp('200');
          $ofInnerMenu.removeClass('active');
      });
    
    }
    
  
    $('html').css('overflow-x', 'initial');
    function openInnerMobMenu() {
      $('.link-item').click(function (e) {
          e.preventDefault();
          $childList = $(this).parent().children('.submenu');
          $childList.slideToggle('200');
          $(this).parent().toggleClass('active');
      });
    }
    
    function hideMobMenu() {
      if ($('.menu-btn').css('display') == 'none') {
        $('.link').children('ul').slideUp('200');
        $('.mob').slideUp('200');
      }
    }
    
    function screenSize() {
      $(window).on('resize', function (event) {
          hideMobMenu();
      });
  }
    
    function qPopup() {
      $('.callback__question a').click(function() {
          $('.question__popup .bg').fadeToggle(600);
          $('.popup__block').fadeToggle(600);
      });
      $('.inner-popup__close').click(function() {
          $('.question__popup .bg').fadeToggle(500);
          $('.popup__block').fadeToggle(500);
      });
    }
    
    toggleMobMenu();
    openInnerMobMenu();
    hideMobMenu();
    screenSize();
    qPopup();
   
  });
  
  //после загрузки веб-страницы
  $(function () {
    var form1 = feedbackForm();
    form1.init({
      id: '#feedbackForm',
      isHideForm: true,
      maxFiles: 3, // количество элементов input 
      maxFileSize: 524288, // maxSizeFile
    });
  
  });
    $("video").on("mouseover" , function(){
      this.play();
      $( this ).css( "background-color", "black" );
    });
    $("video").on("mouseleave",  function(){
      this.pause();
    })	
  
  
   /* Показать/скрыть контент внутри виджетов */
  const widgets = document.querySelectorAll('.widget');
  // Находим все виджеты на странице
  widgets.forEach(function (widget) {
  
    // Слушаем клик внутри виджета
    widget.addEventListener('click', function (e) {
        // Если клик по заголовку - тогда скрываем/показывае тело виджета
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body__hidden');
        }
    });
  });
  
  
  
  
  
  /* Показать еще 3 доп опции с чекбоксами в фильтре */
  const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
  const hiddenCheckBoxes = document.querySelectorAll('.checkbox-hidden');
  
  showMoreOptions.onclick = function (e) {
    e.preventDefault();
  
    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = 'block';
    });
    showMoreOptions.innerText = 'Скрыть дополнительные опции';
    showMoreOptions.dataset.options = 'visible';
  }
  // Если блоки были видны - значит скрываем
  else if (showMoreOptions.dataset.options == 'visible') {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = 'none';
    });
    showMoreOptions.innerText = 'Показать ещё';
    showMoreOptions.dataset.options = 'hidden';
  }
  
  }
  
  







