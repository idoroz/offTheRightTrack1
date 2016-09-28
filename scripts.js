$(document).ready(function() {


    setTimeout(function() {
     $('.menuWrapper').css('display', 'flex'); 
     $('.bioTextWrapper').css('display', 'block');
 }, 400);

    $('#pic6').on('click', function() {
        document.location = '#bio';
        return false;
    })

    $('#backToTop').on('click', function() {

        $.fn.fullpage.moveTo('homePage');
        setTimeout(function() { window.location.reload(false); }, 700);
    })

    // $('.card1').hover(function(){
    //     $('.card1Cover').show();
    //     console.log('in');
    // }, function() {
    //     $('.card1Cover').hide();
    //     console.log('out');
    // });

    // $('button#card1Btn').on('click', function() {
    //     console.log('clicked');
    //   });

    var scrollOverflow;

    if ($(window).width() > 991)
        scrollOverflow = true;
    else scrollOverflow = false;

    $('#fullpage').fullpage({
        touchSensitivity: (5), //mobile-swipe// 
        scrollBar: false,
        scrollOverflow: scrollOverflow,

        verticalCentered: false,
        bigSectionsDestination: 'bottom',

        anchors: ['homePage',
            'bio',
            'sketchPage1',
            'aboutMe',
            'galleryPage'
        ],

    });
    // $.fn.fullpage.setMouseWheelScrolling(false);
    //    $.fn.fullpage.setAllowScrolling(false);

    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

    console.log(scrollOverflow);


    $('.DJ_Name').on('click', function() {

        document.location = '#bio';
        stopBGSlide(); //stops the slideshow **still need to restart it when u come back to homepage**
        return false;
    })


    $('.bioTitle').on('click', function() {
        document.location = '#homePage';
        return false;
    })

       $('.homePageBtn').on('click', function() {
        document.location = '#homePage';
        return false;
    })



    // init Masonry
    // $('.grid').isotope({
    //   layoutMode: 'fitRows',
    //   // set itemSelector so .grid-sizer is not used in layout
    //   itemSelector: '.grid-item',
    //   // use element for option
    //   columnWidth: '.grid-item',
    //   originTop: true,
    //   percentPosition: true
    // })
    $('.grid').isotope({
        layoutMode: 'fitRows',
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-sizer',
            hybrid: true,
            fitToSection: false

        }
    });


    //lightbox options
    lightbox.option({
        'resizeDuration': 500,

        'albumLabel': ""
    })

    var $lg = $('#lightgallery');

    $("#lightgallery").lightGallery({
        mode: 'lg-fade',
        download: false,
        selector: 'div.custom-selector',
        zoom: true,
        scale: 2,
        counter: false,
        closable: false,
        hideBarsDelay: 1200,
        resize: false,
        actualSize: true,
        thumbnail: true,
        height: '100%',
        width: '100%',


    });

    $lg.on('onCloseAfter.lg', function(event) {
        document.location = '#homePage';

        setTimeout(function() { window.location.reload(false); }, 700);
        return false;
    });

    ///run the sketchbook card gallery
    runTheCards();



    $('button.toGallery').on('click', function() {
        console.log('elleo');
        goToGallery();
        // return false;
    })

    function goToGallery() {

        document.location = '#galleryPage';
        $("#firstImgGallery").click();
        return false;

    }

});





////Autoplay on background slideshows

var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function() {
    var itemToShow = Math.abs(counter % numItems); // uses remainder (aka modulo) operator to get the actual index of the element to show  

    $items.removeClass('show'); // remove .show from whichever element currently has it
    $items.eq(itemToShow).addClass('show');
};



////Autoplay on background slideshow

var BGSlide = window.setInterval(function() {

    function changeBG() {
        console.log("Boom!");
        counter++;
        showCurrent();
    }
    if (counter >= 5) {
        counter = 0;
    }

    changeBG();
}, 5000);

////Autoplay on background slideshow


// stop slide function
function stopBGSlide() {
    clearInterval(BGSlide);
}



/// wheel down from homepage stops slide show
// $(window).bind('mousewheel', function(e){
//     if(e.originalEvent.wheelDelta > 0)
//     {
//         console.log("up");
//     }
//     else
//     {
//         console.log("down");
//         stopBGSlide();
//         console.log(document.location);
//     }


//     // if(document.location.hash == "#sketchPage1") {
//     // $.fn.fullpage.destroy();
//     // }

//     if(document.location.hash == "#galleryPage" ) {
//        $( "#firstImgGallery" ).click();
//     }


// });

/// wheel down from homepage stops slide show



function checkSize() {
    if ($(".container-fluid").css("padding-left") == "0px") {
        // your code here
        console.log('ur in mobile version');
        $("#pic1").attr("src", "img/mobile/1.jpg");
        $("#pic2").attr("src", "img/mobile/2.jpg");
        $("#pic3").attr("src", "img/mobile/3.jpg");
        $("#pic4").attr("src", "img/mobile/4.jpg");
        $("#pic5").attr("src", "img/mobile/5.jpg");
        $("#pic6").attr("src", "img/mobile/6.jpg");
    }
}




//Bio Menu Hover Smoorgasbord

// $(".galleryBtn").hover(
//     function() {
//         $(".galleryTitle").removeClass("AnimateOut");
//         $("img.galleryImg").removeClass("AnimateOut");
//         $(".galleryTitle").addClass("Animate");
//         $("img.galleryImg").addClass("Animate");

//     },
//     function() {
//         $(".galleryTitle").addClass("AnimateOut");
//         $("img.galleryImg").addClass("AnimateOut");
//         $(".galleryTitle").removeClass("Animate");
//         $("img.galleryImg").removeClass("Animate");
//     });

// $(".sketchBtn").hover(
//     function() {
//         $(".sketchTitle").removeClass("AnimateOut");
//         $("img.sketchImg").removeClass("AnimateOut");
//         $(".sketchTitle").addClass("Animate");
//         $("img.sketchImg").addClass("Animate");

//     },
//     function() {
//         $(".sketchTitle").addClass("AnimateOut");
//         $("img.sketchImg").addClass("AnimateOut");
//         $(".sketchTitle").removeClass("Animate");
//         $("img.sketchImg").removeClass("Animate");
//     });

// $(".websiteBtn").hover(
//     function() {
//         $(".websiteTitle").removeClass("AnimateOut");
//         $("img.websiteImg").removeClass("AnimateOut");
//         $(".websiteTitle").addClass("Animate");
//         $("img.websiteImg").addClass("Animate");

//     },
//     function() {
//         $(".websiteTitle").addClass("AnimateOut");
//         $("img.websiteImg").addClass("AnimateOut");
//         $(".websiteTitle").removeClass("Animate");
//         $("img.websiteImg").removeClass("Animate");
//     });






//Menu Buttons

$('.galleryBtn').on('click', function() {
    document.location = '#galleryPage';
    $("#firstImgGallery").click();
    return false;
})

$('.sketchBtn').on('click', function() {
    document.location = '#sketchPage1';
    return false;


})




$('.websiteBtn').on('click', function() {
    // window.open('http://www.daniellejacobson.com/', '_blank'); 
    document.location = '#aboutMe';
    return false;

})



