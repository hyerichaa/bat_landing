
// 메인

const mainPin = gsap.timeline();
mainPin.from(".main__kv02",{autoAlpha: 0, duration: 1, y:50}, "+=0.5")

ScrollTrigger.create({
    animation: mainPin,
    trigger: ".main",
    start: "top top",
    end: "+=2000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
})



//슬라이드

$(document).ready(function() {
    slider();
})
function slider() {
    var titArray = [];
    $('.slider .slider__ttl > li').each(function(index, item){
        var txt = $(this).text();
        titArray.push(txt);
    }).promise().done(function() {
        var swiper = new Swiper('.slider', {
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 5000, //CSS animation과 시간 동일하게
                disableOnInteraction: false
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.slider .btn_next',
                prevEl: '.slider .btn_prev',
            },
            //pagination 텍스트 & progress bar 형태로 변경
            pagination: {
                el: '.slider .slider__ttl',
                clickable: 'true',
                type: 'bullets',
                renderBullet: (index, className) => {
                    return `<li class=${className}><span class="bar"></span><span class="txt">${titArray[index]}</span></li>`;
                },
            },
        })
    })
}

var swiper = new Swiper(".cont_01", {
    loop: true,
    navigation: {
        nextEl: '.cont_01 .btn_next',
        prevEl: '.cont_01 .btn_prev',
    },
  });
  var swiper = new Swiper(".cont_02", {
    loop: true,
    navigation: {
        nextEl: '.cont_02 .btn_next',
        prevEl: '.cont_02 .btn_prev',
    },
  });
  var swiper = new Swiper(".cont_03", {
    loop: true,
    navigation: {
        nextEl: '.cont_03 .btn_next',
        prevEl: '.cont_03 .btn_prev',
    },
  });


//나타나기
const hide = (item) => {
    gsap.set(item, {autoAlpha: 0});
}

gsap.utils.toArray(".reveal").forEach((item) => {
    ScrollTrigger.create({
        trigger: item,
        //start: "top 80%",
        overwrite:"auto",
        scrub: false,
        onEnter: () => {animate(item)},
    });

    item.style.opacity = "0";
});

const animate = (item) => {
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if(item.classList.contains("reveal_LTR")){
        x = -100;
        y = 0;
    }else if(item.classList.contains("reveal_BTT")){
        x = 0;
        y = 100;
    }else if(item.classList.contains("reveal_TTB")){
        x = 0;
        y = -100;
    }else{
        x = 100;
        y  = 0;
    }



    gsap.fromTo(item,
        {autoAlpha: 0, x: x, y: y},
        {autoAlpha: 1, x:0, y:0, duration:2, overwrite:"auto", ease:"expo"}
    );
}

//이벤트 텍스트 롤링

$(document).ready(function(){
    var board = '.rolling';
    var listHeight = $(board).find('li').height();
  
    setInterval(function(){
      $(board).find('ul').animate({
        top: '-=' + listHeight
  
      },'slow',function(){
  
        $(this).find('li').first().appendTo($(this));
        $(this).css('top',0);
        $(board).find('li a').attr('tabindex','-1');
        $(board).find('li:first a').attr('tabindex','0');
      });
    },800);
  });



//유의사항
$('.notice .top').on('click', () => {
    $('.ico_arrow').toggleClass('active');
    $('.bottom').slideToggle();
})