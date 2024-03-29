let cursor = document.querySelector('.cursor');
let cursorExtend = document.querySelector('.cursorExtend');
let links = document.querySelectorAll('a');
const onMouseMove = (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursorExtend.style.left = e.pageX + 'px';
    cursorExtend.style.top = e.pageY + 'px';
}
const onMouseMoveDelayed = (e) =>{
    cursorExtend.style.left = e.pageX + 'px';
    cursorExtend.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', function(){
        cursor.style.transform = "scale(4)";
    });
}
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseleave', function(){
        cursor.style.transform = "scale(1)";
    });
}