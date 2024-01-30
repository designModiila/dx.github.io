document.addEventListener("DOMContentLoaded", function() {

  const header = document.getElementById('header');
  const sections = document.querySelectorAll('.section');
  
  function updateHeaderClass() {
      let currentActiveClass = '';
      sections.forEach(section => {
          const rect = section.getBoundingClientRect();
  
          // 섹션의 상단이 뷰포트의 상단에 위치하거나 그 위에 있고, 하단이 뷰포트의 상단보다 아래에 있는지 확인
          if (rect.top <= 0 && rect.bottom > 0) {
              // 두 번째 클래스 이름에 '-active'를 추가 (두 번째 클래스가 대상이라고 가정)
              currentActiveClass = section.classList[1] + '-active';
          }
      });
  
      if (currentActiveClass) {
          // 헤더의 모든 클래스를 제거하고 현재 활성화된 클래스를 추가
          header.className = '';
          header.classList.add(currentActiveClass);
      }
  }
  
  // 스크롤 이벤트 리스너 추가
  window.addEventListener('scroll', updateHeaderClass);
  
    // OverlayScrollbars 적용
  // OverlayScrollbars(document.getElementById('my-scroll-area'), { /* 옵션 */ });

});


document.querySelectorAll(".section").forEach((section, index) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top +50%",
      end: "top +=400",
      toggleActions: "play none none none"
    }
  });


  // 텍스트 박스 애니메이션
  tl.fromTo(
    section.querySelectorAll(".ani__text"),
    { opacity: 0, transform: "translateY(50%)" },
    { opacity: 1, transform: "translateY(0%)", delay: 0.3, duration: 0.7 },
    "show"
  );


  tl.fromTo(
      section.querySelectorAll(".ani__subtext"),
      { opacity: 0, transform: "translateY(200%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.5, duration: 0.7 },
      "show"
    );

    tl.fromTo(
      section.querySelectorAll(".ani__btn"),
      { opacity: 0, transform: "translateY(100%)" },
      { opacity: 1, transform: "translateY(0%)", delay: 0.7, duration: 0.7 },
      "show"
    );

});


gsap.registerPlugin(ScrollTrigger);
// 핀 박스
ScrollTrigger.create({
  trigger:'.section.about',
  start:'top top',
  pin:'.section.about .pin-box',
  end:'bottom bottom'
})


let wh2 = $(window).height()
gsap.to('.section.about .con .bg',{
  width:'100%',
  height:'100%',
  borderRadius:0,
  scrollTrigger:{
      trigger:'.section.about',
      start:'top top',
      end: `${wh2}px`,
      scrub:1,
  }
})

ScrollTrigger.create({
  trigger:'.section.about',
  start:'bottom bottom',
  pin:'.section.about .right',
  end:'top  +=40%',
  
})



// 텍스트 올라가면서 addClass
const s3_right_txt = gsap.utils.toArray('.section.about .right .txt');
s3_right_txt.forEach((item,i)=>{
  ScrollTrigger.create({
      trigger:item,
      toggleClass:'on',
      start:"top 85%"
  });
});

ScrollTrigger.create({
  trigger: '.section.about .right',
  start: 'bottom bottom',
  pin: true, // 현재 요소를 고정합니다.
  endTrigger:'.section.about',
  end:'top +=40%'
});


ScrollTrigger.create({
  trigger: '.section.service',
  start: 'top top',
  pin: '.section.service .pin-box', 
  endTrigger:'.section.service',
  end:'bottom bottom'
});

ScrollTrigger.create({
  trigger: '.section.service .account',
  start: 'bottom bottom',
  pin: true, // 현재 요소를 고정합니다.
  endTrigger:'.section.service',
  end:'top +=40%'
});

// $(".popup-open").click(function () {
//   var $href = $(this).attr("href");
//   layer_popup($href);
// });
$(".popup-open").click(function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  var $href = $(this).data("popup-target"); // Use data attribute to target the popup
  layer_popup($href);
  window.lastFocusedElement = $(this); // Optional: Remember the trigger element
});

function layer_popup(el) {
  var $el = $(el); //레이어의 id를 $el 변수에 저장
  $el.fadeIn();

  var $elWidth = ~~$el.outerWidth(),
    $elHeight = ~~$el.outerHeight(),
    docWidth = $(document).width(),
    docHeight = $(document).height();

  // $el.find(".popup-close").click(function () {
  //   $(this).parents(".dim-layer").fadeOut();
  //   return false;
  // });

  // $(".layer .dimBg").click(function () {
  //   $(".dim-layer").fadeOut();
  //   return false;
  // });
  $el.find(".popup-close").click(function(event) {
    event.preventDefault();
    $el.fadeOut();
    // Optional: Return focus to the element that opened the popup
    if (window.lastFocusedElement) {
      window.lastFocusedElement.focus();
    }
    return false;
  });

  $(".layer .dimBg").click(function(event) {
    event.preventDefault();
    $el.fadeOut();
    return false;
  });
}



// // Gallery image hover
// $( ".list ul li" ).hover(
//   function() {
//     $(this).find(".img-overlay").animate({opacity: 1}, 600);
//   }, function() {
//     $(this).find(".img-overlay").animate({opacity: 0}, 600);
//   }
// );


// // Lightbox
// var $overlay = $('<div id="overlay"></div>');
// var $image = $("<img>");
// var $prevButton = $('<div id="prevButton">이전</div>');
// var $nextButton = $('<div id="nextButton">다음</div>');
// var $exitButton = $('<div id="exitButton"></div>');
// var imageLocation = $('.img-responsive').attr("src");

// // Add overlay
// $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
// $(".portfolio").append($overlay);


// $overlay.hide();


// $(".img-overlay").click(function(event) {
 
//   event.preventDefault();
//   var imageLocation = $('.category-list img').attr("src");

//   $image.attr("src", imageLocation);
//   $overlay.fadeIn("slow");
// });

// $overlay.click(function() {
//   $(this).fadeOut("slow");
// });

// $nextButton.click(function(event) {
//   $("#overlay img").hide();
//   var $currentImgSrc = $("#overlay img").attr("src");
//     var $currentImg = $('.category-list img[src="' + $currentImgSrc + '"]');
//    var $nextImg = $($currentImg.closest(".image").next().find("img"));
//     var $images = $(".category-list img");
//    if ($nextImg.length > 0) { 
//        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
//   } else {
//       $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
//   }
//   event.stopPropagation();
// });

// $prevButton.click(function(event) {
//   $("#overlay img").hide();
//   var $currentImgSrc = $("#overlay img").attr("src");
//     var $currentImg = $('.category-list img[src="' + $currentImgSrc + '"]');
//     var $nextImg = $($currentImg.closest(".image").prev().find("img"));
//     $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
//     event.stopPropagation();
// });

// $exitButton.click(function() {
//   $("#overlay").fadeOut("slow");
// });



// function wrapEachCharacter(textContainer) {
//   const characters = textContainer.textContent.split('');
//   const wrappedHtml = characters.map(char => {
//       return char.trim() === '' ? ' ' : 
//           `<div style="position: relative; display: inline-block; opacity: 0;">${char}</div>`;
//   }).join('');

//   textContainer.innerHTML = `<div style="position: relative; display: inline-block;">${wrappedHtml}</div>`;
// }


// function animateCharacters(sentenceElement) {
//   gsap.fromTo(sentenceElement.querySelectorAll('div'), {
//       opacity: 0,
//       transform: "translateY(50%)"
//   }, {
//       opacity: 1,
//       transform: "translateY(0%)",
//       delay: gsap.utils.mapRange(0, sentenceElement.textContent.length, 0, 0.3),
//       duration: 0.7,
//       stagger: 0.05,
//       ease: 'power2.out'
//   });
// }




function addAnimationToProjectDesc(projectDesc) {
  projectDesc.addEventListener('mouseenter', (event) => {
      applyAnimation(projectDesc, event, true);
  });

  projectDesc.addEventListener('mouseleave', (event) => {
      applyAnimation(projectDesc, event, false);
  });
}

function applyAnimation(projectDesc, event, isEntering) {
  projectDesc.classList.toggle('active', isEntering);
  const titleSpan = projectDesc.querySelector('.project-title span');
  const filled = projectDesc.querySelector('.project-title .filled');
  const rect = titleSpan.getBoundingClientRect();
  const xPercent = (event.clientX - rect.left) / rect.width * 100;
  const yPercent = (event.clientY - rect.top) / rect.height * 100;

  gsap.killTweensOf(filled);
  gsap.to(filled, {
      clipPath: `circle(${isEntering ? '100vw' : '0vw'} at ${xPercent}% ${yPercent}%)`,
      duration: isEntering ? 1.25 : 0.6,
      ease: isEntering ? "power2.inOut" : "power2.out"
  });
}

// 글자가 순차적으로 나타나는 애니메이션 적용
document.querySelectorAll('.sentence.filled, .sentence.line').forEach(sentenceElement => {
  wrapEachCharacter(sentenceElement);
  animateCharacters(sentenceElement);
});

// .project-desc에 대한 이벤트 리스너 추가
document.querySelectorAll('.project-desc').forEach(addAnimationToProjectDesc);
$(".counterUp_02").counterUp({
  delay: 2,
  time: 800
});
$(".counterUp").counterUp({
  delay: 2,
  time: 500
});

// $(document).ready(function () {
//   $('.counterUp').counterUp({
//       time: 500
//   });

//   $('.counterUp_02').counterUp({
//       delay: 10,
//       time: 2000
//   });
// });


(function ($) {
  "use strict";

  //Switch dark/light


  $(document).ready(function () {
    "use strict";

    //Scroll back to top

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);




