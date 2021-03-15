var tl = gsap.timeline({repeat: 0});
var duration = 0.9; 
tl.delay(1);
var easing = "power1.out";

// Intro animation
/* tl.to("#hey", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}) 
  .to("#ciao", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}, ">-0.6") 
  .to("#salut", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}, ">-0.6") 
  .to('.top', { duration: 2, opacity:"0%"})
  //.call(scrollToAbout)
  //.to(".intro", {duration: 0, display:"none"}, ">0.5") 
  .to(".aboutText", {duration: 0.5, ease: "power4.out", opacity:"100%"}) 
  .to('.container', {duration: 0, scrollSnapType: 'y mandatory'})
  .to(".progressBar", {duration: 2, ease: "power4.out", opacity: "100%"}, ">-1")  */

  tl.to("#hey", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}) 
    .to("#ciao", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}, ">-0.6") 
    .to("#salut", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}, ">-0.6") 
    .to('.introSection', {duration: 1, filter:'blur(40px)'})
    .to(".introSection", {duration: 1, autoAlpha: 0})
    .to(".intro", {duration: 0, display: "none"})
    .to(".aboutText", {duration: 1.5, autoAlpha: 1})
    .to(".cursors", {duration: 1, opacity: "1"})