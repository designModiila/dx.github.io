function jl() {
    if (Oa("dark"), !1 !== document.body.classList.contains("page-template-home")) {
        "#debug" == window.location.hash && document.querySelectorAll(".home-section-project").forEach((function(t, e) {
            e > 0 && t.remove()
        }));
        var t, e = "projects",
            i = !1,
            r = document.querySelector(".wrapper"),
            n = document.querySelector("#footer"),
            o = document.querySelector(".page-home-content"),
            s = document.querySelector(".home-sections"),
            a = document.querySelector(".home-indices"),
            l = document.querySelector("#homeContact"),
            h = document.querySelector(".home-logo"),
            c = 1,
            u = 0,
            p = !1,
           d = document.querySelector(".header-main");
        Oa("light"), Ic(),
            function() {
            }(), document.querySelector(".home-sections").querySelectorAll(".home-section-project").forEach((function(t, e) {
                var i = t.querySelector(".project-desc");
                i.addEventListener("mouseenter", (function(t) {
                    i.classList.add("active");
                    var e = i.querySelector(".project-title span"),
                        r = i.querySelector(".project-title .filled"),
                        n = e.getBoundingClientRect(),
                        o = t.clientX - n.left,
                        s = t.clientY - n.top,
                        a = o / n.width * 100,
                        l = s / n.height * 100;
                    Er.killTweensOf(r), Er.fromTo(r, {
                        clipPath: "circle(0vw at ".concat(a, "% ").concat(l, "%)")
                    }, {
                        clipPath: "circle(100vw at ".concat(a, "% ").concat(l, "%)"),
                        duration: 1.25,
                        ease: oi.easeInOut
                    })
                })), i.addEventListener("mouseleave", (function(t) {
                    i.classList.remove("active");
                    var e = i.querySelector(".project-title span"),
                        r = i.querySelector(".project-title .filled"),
                        n = e.getBoundingClientRect(),
                        o = t.clientX - n.left,
                        s = t.clientY - n.top,
                        a = o / n.width * 100,
                        l = s / n.height * 100;
                    Er.killTweensOf(r), Er.to(r, {
                        clipPath: "circle(0vw at ".concat(a, "% ").concat(l, "%)"),
                        duration: .6,
                        ease: oi.easeOut
                    })
                })), t.querySelector(".__prev").addEventListener("click", (function(t) {
                    t.preventDefault(), window.dispatchEvent(new CustomEvent("HOME_PROJECT_GO_PREV"))
                })), t.querySelector(".__next").addEventListener("click", (function(t) {
                    t.preventDefault(), window.dispatchEvent(new CustomEvent("HOME_PROJECT_GO_NEXT"))
                }))
            })),
            function() {
                Dl = document.querySelector("canvas.__prev"), El = document.querySelector("canvas.__next"), Al = Dl.getContext("2d"), _l = El.getContext("2d");
                var t = window.devicePixelRatio || 1,
                    e = _l.webkitBackingStorePixelRatio || _l.mozBackingStorePixelRatio || _l.msBackingStorePixelRatio || _l.oBackingStorePixelRatio || _l.backingStorePixelRatio || 1;
                Il = t / e, Pl = Ol, (pl = document.querySelector(".wrapper")).addEventListener("mousemove", bl), pl.addEventListener("touchmove", vl), yc((function() {
                    pl.removeEventListener("mousemove", bl), pl.removeEventListener("touchmove", vl)
                })), window.addEventListener("resize", Ll), Gl(), window.addEventListener("HOME_CONTACT_FILLED", Nl), yc((function() {
                    window.removeEventListener("resize", Ll), window.removeEventListener("HOME_CONTACT_FILLED", Nl)
                })), requestAnimationFrame(Vl), Sl(), Tl(), Ml = wl[xl = 0], kl = wl[xl == Cl - 1 ? 1 : xl + 1]
            }(), nl(), (t = document.querySelector(".home-popup")) && (zl || t.classList.add("active"), t.querySelector(".__close").addEventListener("click", (function(e) {
                e.preventDefault(), t.classList.remove("active"), zl = !0
            })), t.querySelector(".__img").addEventListener("click", (function(e) {
                t.classList.remove("active"), zl = !0
            }))), console.log("startMotion_Main"), mc(Er.timeline().to(o, {
                autoAlpha: 1,
                duration: 1
            }, 0).fromTo(".home-indices .index", {
                autoAlpha: 0,
                x: "-1000%"
            }, {
                autoAlpha: 1,
                x: "0%",
                duration: .8,
                ease: ai.easeOut,
                stagger: -.1
            }, 0)), Oa("dark", !1), s.classList.add("active"), m(Ka ? 0 : 3), window.addEventListener("resize", T), window.addEventListener("HOME_PROJECT_GO_PREV", g), window.addEventListener("HOME_PROJECT_GO_NEXT", y), yc((function() {
                window.removeEventListener("resize", T), window.removeEventListener("HOME_PROJECT_GO_PREV", g), window.removeEventListener("HOME_PROJECT_GO_NEXT", y)
            }))
    }

    function f() {
        s.querySelectorAll(".home-section:not(:nth-child(".concat(c, "))")).forEach((function(t) {
            return t.classList.remove("active")
        })), a.querySelectorAll(".index:not(:nth-child(".concat(c, "))")).forEach((function(t) {
            return t.classList.remove("active")
        })), a.querySelector(".index:nth-child(".concat(c, ")")).classList.add("active");
        var t = s.querySelector(".home-section:nth-child(".concat(c, ")"));
        return t.classList.add("active"), Oa("dark"), Er.set(a, {
            autoAlpha: 1
        }), Er.set(h, {
            autoAlpha: 1
        }), t
    }

    function m() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .2;
        if (document.querySelector(".home-indices")) {
            var e = f(),
                i = e.querySelectorAll(".project-title .sentence"),
                r = e.querySelector("video"),
                n = e.getAttribute("data-index-color");
            document.querySelector(".home-indices").style.setProperty("--color", n), i.forEach((function(e) {
                e.splitTitle || (e.splitTitle = new wa(e, {
                    type: "words, chars"
                })), Er.from(e.splitTitle.chars, {
                    duration: 1.4,
                    opacity: 0,
                    y: "100%",
                    ease: oi.easeOut,
                    stagger: .034,
                    delay: t,
                    onComplete: function() {}
                })
            })), s.querySelectorAll("video").forEach((function(t) {
                t.pause()
            }));
            var o = Er.delayedCall(t - 1.5, (function() {
                r.currentTime = 0, r.play()
            }));
            mc(o)
        }
    }

    function g() {
        console.log(c), 1 == c && "projects" == e || (console.log(c, u), --c > u ? "footer" == e && (e = "contact", i = !0, Er.to(l, {
            y: 0,
            duration: 1,
            ease: oi.easeInOut
        }), Er.to(n, {
            height: 0,
            duration: 1,
            ease: oi.easeInOut,
            onComplete: function() {
                i = !1, l.classList.add("drawable")
            }
        }), d.classList.remove("hide"), b()) : (e = "projects", v("prev")))
    }

    function y() {
        console.log(c), "footer" != e && (++c > u ? "contact" == e ? (e = "footer", function() {
            i = !0, l.classList.remove("drawable");
            var t = n.querySelector(".footer-inner").clientHeight;
            Er.to(l, {
                y: -t,
                duration: 1,
                ease: oi.easeInOut
            }), Er.to(n, {
                height: t,
                duration: 1,
                ease: oi.easeInOut,
                onComplete: function() {
                    i = !1
                }
            }), d.classList.add("hide")
        }()) : (e = "contact", b()) : (e = "projects", v("next")))
    }

    function v(t) {
        !D() && document.querySelector(".home-sections") && (al(s.querySelector(".home-section:nth-child(".concat(c, ")")).getAttribute("data-color"), m, (function() {}), t), l.classList.remove("drawable"))
    }

    function b() {
        if (!D() && document.querySelector(".home-sections")) {
            var t = l.getAttribute("data-color");
            console.log("color", t), al(t, S, (function() {}), "next")
        }
    }

    function S() {
        s.querySelectorAll(".home-section").forEach((function(t) {
            return t.classList.remove("active")
        })), l.classList.add("active"), l.classList.add("drawable"), Oa("light"), s.querySelectorAll("video").forEach((function(t) {
            t.pause()
        })), Er.set(a, {
            autoAlpha: 0
        }), Er.set(h, {
            autoAlpha: 0
        })
    }

    function T() {
        requestAnimationFrame((function() {
            var t = "footer" == e ? n.querySelector(".footer-inner").clientHeight : 0;
            Er.killTweensOf(l), Er.killTweensOf(n), Er.set(l, {
                y: -t,
                duration: 1,
                ease: oi.easeInOut
            }), Er.set(n, {
                height: t,
                duration: 1,
                ease: oi.easeInOut
            })
        }))
    }

    function D() {
        return $a || i
    }
}