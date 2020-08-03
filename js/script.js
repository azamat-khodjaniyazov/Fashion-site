$(document).ready(function () {

  $('.slider__slide').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      480:{
        items:1
      }
    }
  });

  $('.products__slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    navText: [],
    responsive:{
        0:{
            items:1,
        },
        680:{
            items:2,
        },
        1024:{
            items:3
        }
    }
  });

  $('.featured__slider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    navText: [],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2,
        },
        680:{
            items:3
        },
        1024:{
            items:4
        }
    }
});

   $('.blogs__slider').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    navText: [],
    responsive:{
        0:{
            items:1
        },
        680:{
            items:2
        },
        1024:{
            items:2
        }
    }
});

  $(".fa-search").click(function(){
  $(".icons__search, .icons-search-input").toggleClass("active");
  $("input[type='text']").focus();
  });

});