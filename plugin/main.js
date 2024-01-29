// let vh = window.innerHeight * 0.01;

// document.documentElement.style.setProperty("--vh", vh + "px");

// let vh_setime;

// window.addEventListener("resize", function () {
// 	clearTimeout(vh_setime);

// 	vh_setime = setTimeout(function(){
// 		let vh = window.innerHeight * 0.01;
// 		document.documentElement.style.setProperty("--vh", vh + "px");
// 	},200)
// });


$(document).ready(function () {


    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, DrawSVGPlugin);
    // ScrollTrigger.config({ ignoreMobileResize: true });
    // ScrollTrigger.config({autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});

    function mob() {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i) ||
            navigator.maxTouchPoints == 5
        ) {
            return true;
        } else {
            return false;
        }
    }

    if (!mob()) {
        ScrollSmoother.create({
            smooth: 1,
            effects:true,
        });

        let pc_set;
        $(window).resize(function(){
            clearTimeout(pc_set);
            pc_set = setTimeout(function(){
                ScrollTrigger.refresh();
                ScrollTrigger.update();
            },500)
        })

    }else {
        // 모바일 일떄 하단 바 때문에 높이를 맞춰야함
        $(".visual").css({ height: window.innerHeight });
    }

    // 영상 팝업
    $('.gray_bg').click(function () {
        $('.promotion_video').fadeOut(200);
        $(this).fadeOut(200);
    })

    $('.promotion_video .cancel').click(function () {
        $('.promotion_video').fadeOut(200);
        $('.gray_bg').fadeOut(200);
    })

    $('.visual .promotion_video_btn').click(function () {
        $('.promotion_video').fadeIn(200);
        $('.gray_bg').fadeIn(200);
		// 클릭하면 영상 처음부터 재생		
		var promotion_video = new Vimeo.Player($('.promotion_video_iframe'));		
		promotion_video.setCurrentTime(0);
		
    })

    // 슬라이드 ---------------------------------------------------------------------------------------------------
    // let s6_swiper = new Swiper(".s6-swiper", {
    //     slidesPerView: 1,
    //     centeredSlides: true,
    //     speed: "500",
    //     touchRatio: 0,
    //     breakpoints: {
    //         1025: {
    //             //브라우저가 768보다 클 때
    //             slidesPerView: 1.7,
    //         }
    //     },
    // });

    let sns_swiper = new Swiper(".sns-swiper", {
        // autoplay: {
        // delay: 5000, // 시작시간 설정
        // },
        slidesPerView: "auto",
        loop: true,
        loopAdditionalSlides: true,
		// freeMode: true,
        spaceBetween: 12,
		speed : 2000,
		autoplay: {
			delay: 5000,			
			disableOnInteraction: false,
		},
		effect: 'slide',
        breakpoints: {
            820: {
                //브라우저가 768보다 클 때
                spaceBetween: 30,
            }
        },
    });

	//섹션1 ----------------------------------------------------------------------------------

	// svg
	let s1_svg_box = $('.s1 .svg-box');
	let s1_svg = $(s1_svg_box).find('svg');
	let s1_paths = $(s1_svg).find('path, line, polygon, polyline, circle, ellipse, rect, text, image, use, defs, pattern, mask, clipPath, foreignObject');
	gsap.set($(s1_paths),{ drawSVG: '0%'});

	let s1_tl01 = gsap.timeline({
        scrollTrigger:{
            trigger:'.s1 .con.n2 .txt-box',
            start:'top center+=30%',
            end: 'center center',
			scrub:2,
        }
    })

    // 텍스트 색상 채워짐
	s1_tl01
	.fromTo(
		'.s1 .con.n2 .txt-box',
		{background: 'linear-gradient(90deg, rgba(0,204,255,1) 0%, rgba(255,255,255,1) 0%)'},
        {background: 'linear-gradient(90deg, rgba(0,204,255,1) 100%, rgba(255,255,255,1) 100%)',duration:1}
	)
    .fromTo($(s1_paths),{ drawSVG: '0%'},{ drawSVG: '100%', ease: "power1.inOut"},'-=100%')


	// 어워드
	let s1_tl02 = gsap.timeline({
        scrollTrigger:{
            trigger:'.s1 .con.n2 .bottom',
            start:'top center+=30%',
            end: 'center center',
			scrub:2,
        }
    })

	s1_tl02
    .from('.s1 .con.n2 .bottom strong',{y:50,opacity:0,delay:0.2},'-=200%')
	.from('.s1 .con.n2 .bottom .award-box .box:nth-of-type(1)',{y:100,opacity:0},'-=90%')
	.from('.s1 .con.n2 .bottom .award-box .box:nth-of-type(2)',{y:100,opacity:0},'-=90%')
	.from('.s1 .con.n2 .bottom .award-box .box:nth-of-type(3)',{y:100,opacity:0},'-=90%')
	.from('.s1 .con.n2 .bottom .award-box .box:nth-of-type(4)',{y:100,opacity:0},'-=90%')
	.from('.s1 .con.n2 .bottom .award-box .box:nth-of-type(5)',{y:100,opacity:0},'-=90%');

	// 배경 핀
	ScrollTrigger.create({
		trigger: '.s1',
		start: 'top top',
		end: 'bottom bottom',
		pin: '.s1 .pin-box',
        // markers: true
	});


	// 텍스트 투명도
	ScrollTrigger.create({
		trigger:'.s1 .con.n1',
		start:'top center+=25%',
		onEnter:()=>{
			$('.s1 .con.n1').addClass('opacity')
		},
		onLeaveBack:()=>{
			$('.s1 .con.n1').removeClass('opacity')
		}
	})

	ScrollTrigger.create({
		trigger:'.s1 .con.n2',
		start:'top center+=25%',
		onEnter:()=>{
			$('.s1 .con.n2').addClass('opacity')
		},
		onLeaveBack:()=>{
			$('.s1 .con.n2').removeClass('opacity')
		}
	})


    //섹션2 ----------------------------------------------------------------------------------

	let s2_tl01 = gsap.timeline({
        scrollTrigger:{
            trigger: ".s2 .top-txt .s2_txt-fill",
            start: "top bottom-=10%",
            endTrigger:'.s2',
			end:'bottom bottom',
            scrub:2,
            // markers:true,
        }
    });

    // 텍스트 색상 채우기
    s2_tl01
	.add(function(){
		$('.s2 .top-txt .s2_txt-fill .line').toggleClass('on');
	})
    .fromTo(
        '.s2 .s2_txt-fill .n1 span',
        {background: 'linear-gradient(90deg, rgba(0,204,255,1) 0%, rgba(255,255,255,1) 0%)',},
        {background: 'linear-gradient(90deg, rgba(0,204,255,1) 100%, rgba(255,255,255,1) 100%)',},'-=100%'
    )
    .fromTo(
        '.s2 .s2_txt-fill .n2 span',
        {background: 'linear-gradient(90deg, rgba(0,204,255,1) 0%, rgba(255,255,255,1) 0%)',},
        {background: 'linear-gradient(90deg, rgba(0,204,255,1) 100%, rgba(255,255,255,1) 100%)',}
    )
    .to({},{delay:0.2});

    // 배경 파도 핀
    gsap.to('.s2 .img-box img',
        {
            width:'100%',
            height:'100%',
            scrollTrigger: {
                trigger: '.s2',
                start: 'top top',
                end: 'bottom bottom',
                scrub:2,
            }
        }
    )

    ScrollTrigger.create({
        trigger:'.s2',
        start:'top top',
        end:'bottom bottom',
        pin:'.s2 .img-box',
        scrub:2,
    })

    // 아래 요소 등장
    let s2_tl03 = gsap.timeline({
		scrollTrigger:{
			trigger: ".s2 .top-txt small",
			start: "bottom bottom",
			end:'center center',
			toggleActions:'play none none reverse'
		}
	})

    s2_tl03
    .from('.s2 .top-txt small span',{y:100})
    .from('.s2 .bottom small',{opacity:0},'-=80%')
    .from('.s2 .bottom .box-area .box.n1',{y:-100,opacity:0},'-=70%')
    .from('.s2 .bottom .box-area .box.n2',{y:-100,opacity:0},'-=70%')
    .from('.s2 .bottom .box-area .box.n3',{y:-100,opacity:0},'-=70%')
    .from('.s2 .bottom .box-area .box.n4',{y:-100,opacity:0},'-=70%')
	.to({},{delay:0.1})

    //섹션3 ----------------------------------------------------------------------------------

    // // 핀박스
    // ScrollTrigger.create({
    //     trigger:'.s3 .pin-box',
    //     start:'top top',
    //     pin:true,
    //     endTrigger:'.s3',
    //     end:'bottom bottom',
    // })

    // // 배경 남색 상자 커짐
    // let s3_blue_box_tl = gsap.timeline()
    // s3_blue_box_tl
    // .to('.s3 .blue-box div',{
    //     width:'100%',
    //     height:'100%',
    //     borderRadius:'0',
    // })
    // .to({},{delay:1})

    // // 배경 남색 상자 핀
    // ScrollTrigger.create({
    //     trigger:'.s3 .blue-box',
    //     start:'top top',
    //     pin:true,
    //     endTrigger:'.s3',
    //     end:'bottom bottom',
    //     animation:s3_blue_box_tl,
    //     scrub:2,
    // })


    // // li .on
    // const s3_li = gsap.utils.toArray('.s3 ul li');
    // s3_li.forEach((item,i)=>{
    //     ScrollTrigger.create({
    //         trigger:item,
    //         toggleClass:'on',
    //         start:"top 60%",
    //     });
    // });

    //  // 오른쪽 마지막 텍스트 색상 채우기
    // let s3_timming = 0;
    // let s3_last_txt_tl = gsap.timeline();
    // s3_last_txt_tl
    // .fromTo(
    //     '.s3 .last > span.n1',
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
    //     '-=80%'
    // )
    // .fromTo(
    //     '.s3 .last > span.n2',
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
    //     '-=80%'
    // )
    // .fromTo(
    //     '.s3 .last > span.n3',
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
    //     '-=80%'
    // )
    // .fromTo(
    //     '.s3 .last > span.n4',
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
    //     '-=80%'
    // )
    // .fromTo(
    //     '.s3 .last > span.n5',
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
    //     { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
    //     '-=80%'
    // )

    // // 오른쪽 박스 핀
    // ScrollTrigger.create({
    //     trigger:'.s3 .right',
    //     start:'bottom bottom',
    //     pin:true,
    //     endTrigger:'.s3',
    //     end:'bottom bottom',
    //     animation:s3_last_txt_tl,
    //     scrub:2,
    // })

    ScrollTrigger.matchMedia({
        '(min-width:1025px)': () => {
            // 핀 박스
            ScrollTrigger.create({
                trigger:'.s3',
                start:'top top',
                pin:'.s3 .pin-box',
                end:'bottom bottom'
            })

            // 남색 상자 커지기
            let wh = $(window).height()
            gsap.to('.s3 .con .box',{
                width:'100%',
                height:'100%',
                borderRadius:0,
                scrollTrigger:{
                    trigger:'.s3',
                    start:'top top',
                    end: `${wh}px`,
                    scrub:1,
                }
            })

            // 텍스트 올라가면서 addClass
            const s3_right_txt = gsap.utils.toArray('.s3 .right .txt');
            s3_right_txt.forEach((item,i)=>{
                ScrollTrigger.create({
                    trigger:item,
                    toggleClass:'on',
                    start:"top 60%",
                });
            });

            // 오른쪽 마지막 텍스트 색상 채우기 + 오른쪽 텍스트 핀
            let s3_timming = 0;
            let s3_last_txt_tl = gsap.timeline({
                scrollTrigger:{
                    trigger:'.s3 .right .last',
                    start:'center center',
                    pin:'.s3 .right',
                    endTrigger:'.s3',
                    end:'bottom bottom',
                    scrub:2,
                    // markers:true,
                }
            });
            s3_last_txt_tl
            .fromTo(
                '.s3 .last .gray.n1',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
                '-=80%'
            )
            .fromTo(
                '.s3 .last .gray.n2',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
                '-=80%'
            )
            .fromTo(
                '.s3 .last .gray.n3',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
                '-=80%'
            )
            .fromTo(
                '.s3 .last .gray.n4',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
                '-=80%'
            )
            .fromTo(
                '.s3 .last .gray.n5',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(87,89,104,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(87,89,104,1) 100%)',},
                '-=80%'
            )
            .to({},{delay:0.2})
        },
        '(max-width:1024px)': () => {
            // 텍스트
            let s3_mo_tl01 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.s3',
                    start:'top center',
                    end:'500px',
                    toggleActions:'play none none reverse'
                }
            })
            s3_mo_tl01
            .from('.s3 .pin-box .title .txt-box h3',{y:'80',opacity:0})
            .from('.s3 .pin-box .title .txt-box small',{y:'80',opacity:0},'-=50%')
            .from('.s3 .pin-box .title .txt-box p',{y:'80',opacity:0},'-=50%')

            let s3_mo_tl02 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.s3 .pin-box .con',
                    start:'top bottom',
                    scrub:2,
                }
            });

            s3_mo_tl02
            .to('.s3 .pin-box .con .box',{width:'200vw',height:'200vw',})
            .to('.s3',{backgroundColor:'#000000'},'-=90%')

            let s3_mo_tl03 = gsap.timeline({
                scrollTrigger:{
                    trigger:'.s3 .txt-mob',
                    start:'top center+=25%',
                    end:'center+=25% center',
                    // markers:true,
                    scrub:2,
                }
            })

            s3_mo_tl03
            .fromTo(
                '.s3 .txt-mob .gray.n1',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',}
            )
            .fromTo(
                '.s3 .txt-mob .gray.n2',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
            .fromTo(
                '.s3 .txt-mob .gray.n3',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
            .fromTo(
                '.s3 .txt-mob .gray.n4',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
            .fromTo(
                '.s3 .txt-mob .gray.n5',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
            .fromTo(
                '.s3 .txt-mob .gray.n6',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
            .fromTo(
                '.s3 .txt-mob .gray.n7',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
            .fromTo(
                '.s3 .txt-mob .gray.n8',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
            .fromTo(
                '.s3 .txt-mob .gray.n9',
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(102,102,102,1) 0%)',},
                { background: 'linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(102,102,102,1) 100%)',},'-=90%'
            )
        },
    })



    // 섹션4 ---------------------------------------------------------------------------------


	// let s4_svg_box = $('.s4 .svg-box');
	// let s4_svg = $(s4_svg_box).find('svg');
	// let s4_paths = $(s4_svg).find('path, line, polygon, polyline, circle, ellipse, rect, text, image, use, defs, pattern, mask, clipPath, foreignObject');
	// gsap.set($(s4_paths),{ drawSVG: '0%'});

    // let s4_tl01 = gsap.timeline({
	// 	scrollTrigger:{
	// 		trigger:'.s4',
	// 		start:'top top',
	// 		end:'bottom+=400% bottom',
	// 		scrub:2
	// 	}
	// })
    // s4_tl01
    // .from('.s4 .box.n1 .move',{y:'100%'})
    // .to($(s4_paths),{ drawSVG: '100%'},'-=30%')
	// .to({},{delay:0.1})
    // .to($(s4_paths),{opacity:0,duration:0.1})
    // .to('.s4 .box.n1 .move',{y:'-100%'})
    // .from('.s4 .box.n2 .move',{y:'100%'})
	// .to({},{delay:0.1})
    // .to('.s4 .box.n2 .move',{y:'-100%'})
    // .from('.s4 .box.n3 .move.n1',{y:'100%'})
    // .from('.s4 .box.n3 .move.n2',{y:'-100%'},'-=100%')
	// .to({},{delay:0.3})

	// let s4_tl02 = gsap.timeline({
	// 	scrollTrigger:{
	// 		trigger:'.s4',
	// 		start:'top top',
	// 		end:'bottom+=400% bottom',
	// 		scrub:1,
	// 	}
	// })
	// s4_tl02
	// .to('.s4 .navigation span:nth-of-type(1)',{width:'25px'})
	// .to('.s4 .navigation span:nth-of-type(2)',{width:'43px'})
	// .to('.s4 .navigation span:nth-of-type(2)',{width:'25px'})
	// .to('.s4 .navigation span:nth-of-type(3)',{width:'43px'})
	// .to({},{delay:0.3})

    // ScrollTrigger.create({
    //     trigger:'.s4',
    //     pin:true,
    //     start:'top top',
    //     end:'bottom+=400% bottom',
    //     scrub:2
    // })



    // // 섹션5 ---------------------------------------------------------------------------------
    // let s5_tl = gsap.timeline();
    // s5_tl
    //     .from(".s5 .img-box", { x: -100, opacity: 0 })
    //     .from(
    //         ".s5 .marquee.top",
    //         { opacity: 0, top:'0' },
    //         "-=50%"
    //     )
    //     .from(
    //         ".s5 .marquee.bottom",
    //         { opacity: 0, bottom:'0' },
    //         "-=50%"
    //     )
    //     .from(".s5 .video-box",1,{ opacity: 0})
	// 	.from('.s5 .video-area .txt',{opacity:0})
    //     .fromTo('.s5 .img-box img', { filter: 'brightness(1)' },{ filter: 'brightness(0.7)',duration:0.8 },'-=100%')

    // s5_tl.pause();

    // ScrollTrigger.matchMedia({

    //     '(min-width:1025px)': () => {
    //         ScrollTrigger.create({
    //             trigger: ".s5",
    //             start: "top top",
    //             pin: true,
    //             pinSpacing: true,
    //             end: "bottom+=200% bottom",
    //             scrub: 2,
    //             onEnter: () => {
    //                 s5_tl.play();
    //             },
    //             onLeaveBack: () => {
    //                 s5_tl.reverse();
    //             },
    //         });
    //     },
    //     '(max-width:1024px)': () => {
    //         ScrollTrigger.create({
    //             trigger: '.s5',
    //             start: `top center`,
    //             onEnter: () => {
    //                 s5_tl.play();
    //             }
    //         })
    //     },
    // })





    // // svg 효과
    // let s5_svg_box = $('.s5 .svg-box');
    // let s5_svg = $(s5_svg_box).find('svg');
    // let s5_paths = $(s5_svg).find('path, line, polygon, polyline, circle, ellipse, rect, text, image, use, defs, pattern, mask, clipPath, foreignObject');
    // gsap.fromTo($(s5_paths), { drawSVG: false }, { drawSVG: true, yoyo: true, ease : "power1.inOut", repeat: -1, repeatDelay: 1, duration: 6, });
    // // gsap.to($(paths), {display: 'none'});


    // 섹션6 ---------------------------------------------------------------------------------
    // let s6_tl = gsap.timeline();
    // let s6_tl02 = gsap.timeline();
	// let s6_tl03 = gsap.timeline();

    // s6_tl
    //     .add(() => {
    //         s6_swiper.slideTo(0);
    //     }, "+=1")
    //     .add(() => {
    //         s6_swiper.slideTo(1);
    //     }, "+=2")
    //     .add(() => {
    //         s6_swiper.slideTo(2);
    //     }, "+=2")
    //     .add(() => {
    //         $(".s6 .s6-swiper .swiper-slide").addClass("wow");
    //     }, "+=2");

    // s6_tl02.from(".s6-swiper", { y: -100, opacity: 0, duration: 0.5 });

	// s6_tl03.to(".s6 .img-box", { scale:0.7 });

    // s6_tl.pause();
    // s6_tl02.pause();
	// s6_tl03.pause();

    // ScrollTrigger.create({
    //     trigger: ".s6",
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: true,
    //     end: "bottom+=300% bottom",
    //     animation: s6_tl,
    //     scrub: 2,
    // });

	// ScrollTrigger.create({
    //     trigger: ".s6",
    //     start: "top top",
	// 	end: "bottom+=300% bottom",
	// 	animation:s6_tl03,
	// 	scrub:2,
    //     onEnter: () => {
    //         s6_tl02.play()
    //     },
    //     onLeaveBack: () => {
    //         s6_tl02.reverse()
    //     },
    // });


    // 타이핑 효과 ------------------------------------------------------------------------------
    const $text = document.querySelector(".s7 .search .bar .txt");

    // 글자 모음
    const letters = ["소프웨이브", "Sofwave"];

    // 글자 입력 속도
    const speed = 200;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);
            $text.innerHTML += letter.shift();
        }

        // 잠시 대기
        await wait(800);

        // 지우는 효과
        remove();
    };

    // 글자 지우는 효과
    const remove = async () => {
        const letter = letters[i].split("");

        while (letter.length) {
            await wait(speed);

            letter.pop();
            $text.innerHTML = letter.join("");
        }

        // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
        i = !letters[i + 1] ? 0 : i + 1;
        typing();
    };

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
        return new Promise((res) => setTimeout(res, ms));
    }

    // 초기 실행
    setTimeout(typing, 1500);


    // // 섹션1 이미지 조금 움직임
    // const hover_ani = document.querySelector(".hover-ani");
    // let ww =
    //     window.innerWidth ||
    //     document.documentElement.clientWidth ||
    //     document.body.clientWidth;
    // ww = ww / 2;

    // // Listeners
    // document
    //     .querySelector(".hover-ani")
    //     .addEventListener("mousemove", onMouseMove);
    // const xSTo = gsap.quickTo(hover_ani, "x", { duration: 0.1 });
    // const ySTo = gsap.quickTo(hover_ani, "y", { duration: 0.1 });

    // // Move the cursor
    // function onMouseMove(e) {
    //     xSTo((e.clientX - ww) / 12);
    //     ySTo((e.clientY - ww) / 12);
    // }



    // 마퀴 텍스트 -----------------------------------------------------------------------------
    function marquee() {
        let marquee_box = document.querySelectorAll(".marquee");
        marquee_box.forEach((item, idx, arr) => {
            let item_p = item.querySelector(".txt");
            let marqueeClone01 = item_p.cloneNode(true);
            let marqueeClone02 = item_p.cloneNode(true);
            let marqueeClone03 = item_p.cloneNode(true);
            item_p.after(marqueeClone01);
            item_p.after(marqueeClone02);
            item_p.after(marqueeClone03);
        });
    }
    marquee();


});

