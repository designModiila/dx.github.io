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

// 남색 상자 커지기
let wh = $(window).height()
gsap.to('.section.about .con .bg',{
  width:'100%',
  height:'100%',
  borderRadius:0,
  scrollTrigger:{
      trigger:'.section.about',
      start:'top top',
      end: `${wh}px`,
      scrub:1,
  }
})


ScrollTrigger.create({
  trigger:'.section.about',
  start:'bottom bottom',
  pin:'.section.about .right',
  end:'bottom bottom'
})

// 텍스트 올라가면서 addClass
const s3_right_txt = gsap.utils.toArray('.section.about .right .txt');
s3_right_txt.forEach((item,i)=>{
  ScrollTrigger.create({
      trigger:item,
      toggleClass:'on',
      start:"top 60%",
  });
});







// document.querySelectorAll(".myElement").forEach(element => {
//   gsap.to(element, { duration: 1, opacity: 0 });
// });

// Gallery image hover
// $( ".category-list .list ul li" ).hover(
//   function() {
//     $(this).find(".img-overlay").animate({opacity: 1}, 600);
//   }, function() {
//     $(this).find(".img-overlay").animate({opacity: 0}, 600);
//   }
// );

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
$(".section.Portfoli").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$(".img-overlay").click(function(event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).prev().attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the overlay
  $overlay.fadeIn("slow");
});

// When the overlay is clicked
$overlay.click(function() {
  // Fade out the overlay
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('.section.Portfolio img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").next().find("img"));
  // All of the images in the gallery
  var $images = $(".section.Portfolio img");
  // If there is a next image
  if ($nextImg.length > 0) { 
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function(event) {
  // Hide the current image
  $("#overlay img").hide();
  // Overlay image location
  var $currentImgSrc = $("#overlay img").attr("src");
  // Image with matching location of the overlay image
  var $currentImg = $('.section.Portfolio img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".image").prev().find("img"));
  // Fade in the next image
  $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
  // Prevents overlay from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function() {
  // Fade out the overlay
  $("#overlay").fadeOut("slow");
});