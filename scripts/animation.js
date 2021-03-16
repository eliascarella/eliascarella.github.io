var tl = gsap.timeline({repeat: 0});
var duration = 0.9; 
tl.delay(1);
var easing = "power1.out";
let content = document.querySelector('.content')

// Intro animation
//First scroll to the top of the page
  content.scrollTo(0, 0);
  tl.to("#hey", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}) 
    .to("#ciao", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}, ">-0.6") 
    .to("#salut", { duration, ease: easing, clipPath:"inset(0px 0px 0% 1px)"}, ">-0.6") 
    .to('.introSection', {duration: 1, filter:'blur(40px)'})
    .to(".introSection", {duration: 1, autoAlpha: 0})
    .to(".intro", {duration: 0, display: "none"})
    .to('.progressBar', {duration: 0.3, opacity: "100%"})
    .to(".aboutText", {duration: 1.5, autoAlpha: 1})
    .to(".cursors", {duration: 1, opacity: "1"})