

$('a[href^="#"]').on('click', function(e) {
	e.preventDefault();
  
	var target = $(this).attr('href'); // 현재 앵커의 href 속성 값 가져오기
	if (target !== "#") { // href가 "#"만 있는 경우는 제외
	  $('html, body').animate({
		scrollTop: $(target).offset().top
	  }, 1000); // 부드러운 스크롤 효과 적용, 1000ms 동안 실행
	}
  });
  
$(document).ready(function() {

	 // Toggle Menu
	 $('.toggle_menu').click(function() {
        $('nav').toggleClass('active');
        var ariaExpanded = $('nav').hasClass('active');
        $(this).attr('aria-expanded', ariaExpanded);

        if (ariaExpanded) {
            $('body').addClass('no-scroll');
        } else {
            $('body').removeClass('no-scroll');
        }
    });
	 // Navigation Link Clicks
	 $('header nav ul li a').click(function(e) {
        if ($('nav').hasClass('active')) {
            e.preventDefault();
            $('nav').removeClass('active');
            $('body').removeClass('no-scroll');

            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
            $('.toggle_menu').attr('aria-expanded', 'false');
        }
    });


	const $header = $('#header');
	const $cursor = $('.cursor');
	const $sections = $('.section');

	function updateHeaderClass() {
		let currentActiveClass = '';
		$sections.each(function() {
			const rect = this.getBoundingClientRect();
			
			// Check if the top of the section is within the viewport
			if (rect.top <= 0 && rect.bottom >= 0) {
				// Assuming the second class name is the target for '-active'
				const classList = $(this).attr('class').split(/\s+/); // Using jQuery to split class names
				const targetClass = classList.length > 1 ? classList[1] : '';
				if (targetClass) {
					currentActiveClass = targetClass + '-active';
				}
			}
		});

		if (currentActiveClass) {
			$header.attr('class', currentActiveClass);
			$cursor.attr('class', currentActiveClass); // Directly setting class attribute for simplicity
		} else {
			$header.removeClass();
			$cursor.removeClass(); // Remove all classes if no active section
		}
	}

	// Throttling scroll events
	let scrollTimeout;
	$(window).scroll(function() {
		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(updateHeaderClass, 100); // Adjust the timeout as needed
	});


	gsap.registerPlugin(ScrollTrigger);
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
		  { opacity: 0, transform: "translateY(100%)" },
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
			
		},
		onComplete: function() {
			document.querySelector('.pin-box').classList.add('finish');
		  },
		  onReverseComplete: function() {
			document.querySelector('.pin-box').classList.remove('finish');
		  }
	  })
	  
	  ScrollTrigger.create({
		trigger:'.section.about',
		start:'bottom bottom',
		pin:'.section.about .right',
		end:'top  +=40%'
	  })
	  
	  
	  
	  // 텍스트 올라가면서 addClass
	  const about_right_txt = gsap.utils.toArray('.section.about .right .txt');
	  about_right_txt.forEach((item,i)=>{
		ScrollTrigger.create({
			trigger:item,
			toggleClass:'on',
			start:"top 85%",
			end:'top +=40%'
		});
	  });
	  
	  ScrollTrigger.create({
		trigger: '.section.about .right',
		start: 'bottom bottom',
		pin: true, // 현재 요소를 고정합니다.
		endTrigger:'.section.about',
		end:'top +=80%'
	  });
	  


	 
	  const image_wrap = gsap.utils.toArray(".image_wrap");
	  let triggerElement = document.querySelector('.pin_grid ');
	  
	  // Initialize the GSAP animation only when the screen size is greater than or equal to 1024px.
	  if (window.innerWidth >= 1024) {
		let tl = gsap.timeline({
		  scrollTrigger: {
			trigger: triggerElement,
			pin: false, // Changed from pin: false; to pin: false,
			start: "top top",
			end: "bottom bottom",
			scrub: 1,
			onEnter: function() { console.log("onEnter") },
			onUpdate: self => {
			  // Add any onUpdate logic here if needed
			}
		  }
		});
		
		image_wrap.forEach((image_w, i) => {
		  if(i == 0){
			// Add any specific logic for the first image_wrap element if needed
		  }
		  if(i > 0){
			tl.from(image_w, {autoAlpha: 0});
		  }
		  if((i+1) == 2){
			// Add any specific logic for the second image_wrap element if needed
		  }
		});
	  }
	

	   // Tab functionality
	$('.tablinks').click(function(e) {
        e.preventDefault();
        $('.tabcontent').hide();
        $('.tablinks').removeClass('active');
        var tabName = $(this).data('tab');
        $('#' + tabName).show();
        $(this).addClass('active');
    });
    $('.tablinks:first').click();



	function wrapEachCharacter(textContainer) {
		var characters = $(textContainer).text().split('');
		var wrappedHtml = $.map(characters, function(char) {
		  return char.trim() === '' ? ' ' : 
			`<div style="position: relative; display: inline-block; opacity: 0;">${char}</div>`;
		}).join('');
	  
		$(textContainer).html(`<div style="position: relative; display: inline-block;">${wrappedHtml}</div>`);
	  }
	  
	  // Apply animation to div elements within all .pin-boxes
	  gsap.utils.toArray(".pin-box > div").forEach(function(section) {
		var nextSection = $(section).next()[0]; // Use jQuery's .next() to get the next sibling
		if (!nextSection) return; // Don't apply animation if this is the last section
	  
		gsap.timeline({
		  scrollTrigger: {
			trigger: section,
			start: "top top",
			end: () => `+=${nextSection.offsetHeight}`,
			scrub: true,
			pin: true,
			anticipatePin: 1,
		  }
		})
		.fromTo(section, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -50, ease: "none" }, 0)
		.fromTo(nextSection, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: "none" }, 0);
	  });
	  
	  function animateCharacters(sentenceElement) {
		gsap.fromTo($(sentenceElement).find('div'), {
		  opacity: 0,
		  transform: "translateY(50%)"
		}, {
		  opacity: 1,
		  transform: "translateY(0%)",
		  delay: gsap.utils.mapRange(0, sentenceElement.textContent.length, 0, 0.3),
		  duration: 0.7,
		  stagger: 0.05,
		  ease: 'power2.out'
		});
	  }
	  
	  function addAnimationToProjectDesc(projectDesc) {
		$(projectDesc).hover(function(event) {
		  applyAnimation(projectDesc, event, true);
		}, function(event) {
		  applyAnimation(projectDesc, event, false);
		});
	  }
	  
	  function applyAnimation(projectDesc, event, isEntering) {
		$(projectDesc).toggleClass('active', isEntering);
		var titleSpan = $(projectDesc).find('.sentence-text span');
		var filled = $(projectDesc).find('.sentence-text .filled');
		var rect = titleSpan[0].getBoundingClientRect();
		var xPercent = (event.clientX - rect.left) / rect.width * 100;
		var yPercent = (event.clientY - rect.top) / rect.height * 100;
	  
		gsap.killTweensOf(filled);
		gsap.to(filled, {
		  clipPath: `circle(${isEntering ? '100vw' : '0vw'} at ${xPercent}% ${yPercent}%)`,
		  duration: isEntering ? 1.25 : 0.6,
		  ease: isEntering ? "power2.inOut" : "power2.out"
		});
	  }
	  
	  // Apply animation where letters appear sequentially
	  $('.sentence.filled, .sentence.line').each(function() {
		wrapEachCharacter(this);
		animateCharacters(this);
	  });
	  
	  // Add event listener 
	  $('.sentence-wrap').each(function() {
		addAnimationToProjectDesc(this);
	  });
	  

	$(".counterUp_02").counterUp({
		delay: 2,
		time: 800
	  });
	  $(".counterUp").counterUp({
		delay: 2,
		time: 500
	  });


	  $(".popup-open").click(function(event) {
		event.preventDefault(); // Prevent default anchor behavior
		var $href = $(this).data("popup-target"); // Use data attribute to target the popup
		layer_popup($href);
		window.lastFocusedElement = $(this); // Optional: Remember the trigger element
		$('body').addClass('no-scroll'); // body 스크롤 방지
	  });
	  
	  function layer_popup(el) {
		var $el = $(el); //레이어의 id를 $el 변수에 저장
		$el.fadeIn();
	  
		// var $elWidth = ~~$el.outerWidth(),
		//   $elHeight = ~~$el.outerHeight(),
		//   docWidth = $(document).width(),
		//   docHeight = $(document).height();
	  
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
		  $('body').removeClass('no-scroll'); // 스크롤 방지 해제
		  // Optional: Return focus to the element that opened the popup
		  if (window.lastFocusedElement) {
			window.lastFocusedElement.focus();
		  }
		  return false;
		});
	  
		$(".layer .dimBg").click(function(event) {
		  event.preventDefault();
		  $el.fadeOut();
		  $('body').removeClass('no-scroll'); // 스크롤 방지 해제
		  return false;
		});
	  }

});
  



// $(window).mousemove(function (e) {
// 	$(".ring").css(
// 		"transform",
// 		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
// 	);
// });

(function ($) {
	"use strict";
  
	$(document).ready(function () {
	  // Scroll back to top
  
	  var $progressPath = $(".progress-wrap path");
	  var pathLength = $progressPath.get(0).getTotalLength();
	  $progressPath.css({
		'transition': 'stroke-dashoffset 10ms linear',
		'WebkitTransition': 'stroke-dashoffset 10ms linear',
		'strokeDasharray': pathLength + ' ' + pathLength,
		'strokeDashoffset': pathLength
	  }).get(0).getBoundingClientRect();
  
	  var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength) / height;
		$progressPath.css('strokeDashoffset', progress);
	  };
	  updateProgress();
	  $(window).scroll(updateProgress);
  
	  var offset = 50;
	  var duration = 550;
	  $(window).on("scroll", function () {
		if ($(this).scrollTop() > offset) {
		  $(".progress-wrap").addClass("active-progress");
		} else {
		  $(".progress-wrap").removeClass("active-progress");
		}
	  });
  
	  $(".progress-wrap").on("click", function (event) {
		event.preventDefault();
		$("html, body").animate({scrollTop: 0}, duration);
		return false;
	  });
	});
  })(jQuery);
  