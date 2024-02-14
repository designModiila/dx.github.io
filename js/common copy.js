

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

	$('.toggle_menu').click(function() {
		// nav ul의 표시 상태를 토글
		$('nav').toggleClass('active');
		var ariaExpanded = $('nav').hasClass('active');
        $(this).attr('aria-expanded', ariaExpanded);

		if (ariaExpanded) {
			$('body').addClass('no-scroll');
		} else {
			$('body').removeClass('no-scroll');
		}
	});
	$('header nav ul li a').click(function(e) {
		// nav가 active 상태일 때만 실행
		if ($('nav').hasClass('active')) {
			// 기본 이벤트 방지
			e.preventDefault();
	
			// nav에서 active 클래스 제거
			$('nav').removeClass('active');
			// body에서 no-scroll 클래스 제거하여 스크롤 다시 활성화
			$('body').removeClass('no-scroll');
	
			// 클릭된 링크의 href 속성값 (이동할 섹션의 ID) 가져오기
			var target = $(this).attr('href');
	
			// 해당 섹션으로 부드럽게 스크롤 이동
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000); // 1000ms = 1초 동안 스크롤 이동
	
			// 토글 버튼의 aria-expanded 속성을 false로 설정
			$('.toggle_menu').attr('aria-expanded', 'false');
		}
	});


	
	const $header = $('#header');
	const $sections = $('.section');
	
	function updateHeaderClass() {
		let currentActiveClass = '';
		$sections.each(function() {
		const rect = this.getBoundingClientRect();
		
		// 섹션의 상단이 뷰포트 상단 이하이고, 하단이 뷰포트 상단보다 아래인지 확인
		if (rect.top <= 0 && rect.bottom > 0) {
			// '-active'를 두 번째 클래스 이름에 추가 (두 번째 클래스가 대상이라고 가정)
			currentActiveClass = this.classList[1] + '-active';
		}
		});
		
		if (currentActiveClass) {
		// 헤더에서 모든 클래스를 제거하고 현재 활성 클래스를 추가
		$header.removeClass().addClass(currentActiveClass);
		}
	}
	
	// 스크롤 이벤트 리스너 추가
	$(window).scroll(updateHeaderClass);
	
	// OverlayScrollbars 적용 (필요한 경우)
	// OverlayScrollbars($('#my-scroll-area'), { /* 옵션 */ });


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
	gsap.registerPlugin(ScrollTrigger);
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
	  const about_right_txt = gsap.utils.toArray('.section.about .right .txt');
	  about_right_txt.forEach((item,i)=>{
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
	  

	

	  $('.tablinks').click(function(e) {
        e.preventDefault(); // 기본 이벤트 방지

        // 모든 탭 콘텐츠 숨기기
        $('.tabcontent').css('display', 'none');

        // 모든 탭 링크의 "active" 클래스 제거
        $('.tablinks').removeClass('active');

        // 클릭된 탭에 해당하는 콘텐츠 표시
        var tabName = $(this).attr('data-tab'); // 클릭된 탭의 data-tab 속성 값 사용
        $('#' + tabName).css('display', 'block');

        // 클릭된 탭 링크에 "active" 클래스 추가
        $(this).addClass('active');
    });

    // 페이지 로드 시 첫 번째 탭 클릭 이벤트 자동 실행
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
		var titleSpan = $(projectDesc).find('.project-title span');
		var filled = $(projectDesc).find('.project-title .filled');
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
	  
	  // Add event listener for .project-desc
	  $('.project-desc').each(function() {
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

});
  



$(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});

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
  