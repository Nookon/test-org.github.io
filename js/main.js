/*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})*/




var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

////////////////////////////////dop menu/////////////////////////////////////////////////////
$(function () {
    $('.fotbolkihes').mouseover(function () {
        $('.firstflor').css('opacity','1');
        $('.firstflor').css('visibility','visible');
        $('.firstflor').css('background-color','none');
        $('.fotbolkihes').css('background-color','none');
        $('.fotbolkihes').css('color','#A9A9A9');
        $('.firstflor').css('color','#A9A9A9');
        $('.firstflorbox').css('display','block');
    });      
});

$(function () {
    $('.fotbolkihes').mouseout(function () {
        $('.firstflor').css('opacity','0');
        $('.firstflor').css('visibility','hidden');
        $('.firstflor').css('background-color','none');
        $('.firstflor').css('color','#A9A9A9')
        $('.fotbolkihes').css('background-color','none');
        $('.fotbolkihes').css('color','white');
        $('.firstflorbox').css('display','none');
    });
});

$(function () {
    $('.firstflor').mouseover(function () {
        $('.firstflor').css('opacity','1');
        $('.firstflor').css('visibility','visible');
        $('.fotbolkihes').css('background-color','none');
        $('.fotbolkihes').css('color','#A9A9A9');
        $('.firstflorbox').css('display','block');
    });
});

$(function () {
    $('.firstflor').mouseout(function () {
        $('.firstflor').css('opacity','0');
        $('.firstflor').css('visibility','hidden');
        $('.fotbolkihes').css('background-color','none');
        $('.fotbolkihes').css('color','white');
        $('.firstflorbox').css('display','none');
    });
});




////////////////////////////////////////////////////////////////////////////////
$(function () {
    $('.sliders__op').mouseover(function () {
        $('.fotooff').css('opacity','0.5');
        $('.sliders__op').css('background-color','none');
        $('.btn-light').css('opacity','1');
        $('.infobtn').css('width','550');
        $('.infobtn').css('opacity','1');
    });
});

$(function () {
    $('.sliders__op').mouseout(function () {
        $('.fotooff').css('opacity','1');
        $('.sliders__op').css('background-color','none');
        $('.sliders__op').css('opacity','1');
        $('.infobtn').css('width','0');
        $('.infobtn').css('opacity','0');
    });
});
/////////////////////////////////////////////////////////////////////////////////
$(function () {
    $('.sliders__op').mouseover(function () {
        $('.progress-bar').css('width','100%');
    });
});

$(function () {
    $('.sliders__op').mouseout(function () {
        $('.progress-bar').css('width','0%');
    });
});
////////////////////////////////////////////////////////////////////////////////
var x = 0;
var y = 0;
var clsleft = 0;
var clsright = 0;
var item = 0;
var items = 0;


$(function () {
    $('.woman').click(function () {
        x = 1; 
        clsleft = 1;
        item = 1;
        $('.leftmenu ul').css('visibility','visible');
        $('.info-w').css('visibility','visible');
        $('.leftmenu ul').css('opacity','1');
        $('.leftmenu').css('width','100%');
        $('.product-wrap').css('visibility','visible');
        $('.product-wrap').css('opacity','1');
        $('.woman').css('visibility','hidden');
        $('.womans').css('visibility','visible');
        $('.woman').css('opacity','0');
        $('.womans').css('opacity','1');
        $('.woman').css('opacity','0');
        $('.womans').css('opacity','1');
        $('.leftmenu').css('opacity','1');
        $('.item').css('height','0');
        $('.owl-carousel').css('display','none')
        $('.atsua').css('display','none')


        if (x == 1 && y == 1) {
                $('.leftmenu').css('width','50%');
                $('.rightmenu').css('width','50%');
            }
    });
});

$(function () {
    $('.womans').click(function () {
        x = 0
        clsleft = 0;
        item = 0;
        $('.leftmenu ul').css('visibility','hidden');
        $('.info-w').css('visibility','hidden');
        $('.leftmenu').css('width','0%');
        $('.leftmenu ul').css('opacity','0');
        $('.product-wrap').css('visibility','hidden');
        $('.product-wrap').css('opacity','0');
        $('.woman').css('visibility','visible');
        $('.womans').css('visibility','hidden');
        $('.woman').css('opacity','1');
        $('.womans').css('opacity','0');
        $('.leftmenu').css('opacity','0');
        
         if (x == 1 && y == 1) {

                $('.leftmenu').css('width','50%');
                $('.rightmenu').css('width','50%');
            }
            else if (clsright == 1 && clsleft == 0) {
                $('.rightmenu').css('width','99%');
            }else if (item == 0 && items == 0) {
               $('.item').css('height','350');
               $('.owl-carousel').css('display','block')
               $('.atsua').css('display','block')
            }
    });
});

// (((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))
$(function () {
    $('.man').click(function () {
        y = 1; 
        clsright = 1;
        items = 1;
        $('.rightmenu ul').css('visibility','visible');
        $('.rightmenu ul').css('opacity','1');
        $('.info-m').css('visibility','visible');
        $('.rightmenu').css('width','99%');
        $('.right-product-wrap').css('visibility','visible');
        $('.right-product-wrap').css('opacity','1');
        $('.man').css('visibility','hidden');
        $('.mans').css('visibility','visible');
        $('.man').css('opacity','0');
        $('.mans').css('opacity','1');
        $('.man').css('opacity','0');
        $('.mans').css('opacity','1');
        $('.rightmenu').css('opacity','1');
        $('.item').css('height','0');
        $('.owl-carousel').css('display','none')
        $('.atsua').css('display','none')
        if (x == 1 && y == 1) {
                $('.leftmenu').css('width','50%');
                $('.rightmenu').css('width','50%');
            }
    });
});


$(function () {
    $('.mans').click(function () {
        y = 0
        clsright = 0;
        items = 0;
        $('.rightmenu ul').css('visibility','hidden');
        $('.rightmenu').css('width','0%');
        $('.info-m').css('visibility','hidden');
        $('.rightmenu ul').css('opacity','0');
        $('.right-product-wrap').css('visibility','hidden');
        $('.right-product-wrap').css('opacity','0');
        $('.man').css('visibility','visible');
        $('.mans').css('visibility','hidden');
        $('.man').css('opacity','1');
        $('.mans').css('opacity','0');
        $('.rightmenu').css('opacity','0');
         if (x == 1 && y == 1) {

                $('.leftmenu').css('width','50%');
                $('.rightmenu').css('width','50%');
            }
            else if (clsleft == 1 && clsright == 0) {
                $('.leftmenu').css('width','100%');
            }else if (item == 0 && items == 0) {
               $('.item').css('height','350');
               $('.owl-carousel').css('display','block')
               $('.atsua').css('display','block')
            }

    });
});

let greeting = document.querySelector('.greeting');
greeting.addEventListener('click', function() {
  this.classList.toggle('selected');
});

greeting.addEventListener('transitionend', function(e) {
   $('.bye').fadeToggle();
});
