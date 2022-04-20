const linkBrigida = document.querySelector('#brigidaBocini');
const linkDavid = document.querySelector('#davidSentkar');
const linkAlpina = document.querySelector('#alpinaHuus');
const screenAlpina = document.querySelector('#screenAlpina')
const screenBrigida = document.querySelector('#screenBrigida')
const screenDavid = document.querySelector('#screenDavid')
const linkTags = document.querySelectorAll('a');
const Cursor = document.querySelector('.cursor');
const CursorDelayed = document.querySelector('.cursorExtend');

//Effect on linkTags
for (let i = 0; i < linkTags.length; i++) {
    linkTags[i].addEventListener('mouseover', function(){
        cursor.style.transform = "scale(7)";
    });
}


for (let i = 0; i < linkTags.length; i++) {
    linkTags[i].addEventListener('mouseleave', function(){
        cursor.style.transform = "scale(1)";
    });
}

//Image pop-up

linkBrigida.addEventListener('mouseenter', function(){
    let linkCoord = linkBrigida.getBoundingClientRect();
    let imageCoord = screenBrigida.getBoundingClientRect();
    let linkLeft = linkCoord.left; 
    let linkTop = linkCoord.top; 
    let linkWidth = linkCoord.width; 
    let widthHalf = linkWidth / 2;
    let imageHeight = imageCoord.bottom;
    let imageWidth = imageCoord.width;
    let imageLeft = linkLeft + widthHalf - (imageWidth/2);
    let imageTop = linkTop - imageHeight - 10; 
    screenBrigida.style.opacity="100%";
    screenBrigida.style.left = imageLeft + 'px';
    screenBrigida.style.top = imageTop + 'px';
});

linkBrigida.addEventListener('mouseleave', function(){
    setTimeout(function (){
        screenBrigida.style.opacity="0%";
    }, 500);
});

function popBrigida(e){
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    
    console.log( mouseX, " + ", mouseY);
};

linkBrigida.addEventListener('mouseover', popBrigida)

linkDavid.addEventListener('mouseenter', function(){
    let linkCoord = linkDavid.getBoundingClientRect();
    let imageCoord = screenDavid.getBoundingClientRect();
    let linkLeft = linkCoord.left; 
    let linkTop = linkCoord.top; 
    let linkWidth = linkCoord.width; 
    let widthHalf = linkWidth / 2;
    let imageHeight = imageCoord.bottom;
    let imageWidth = imageCoord.width;
    let imageLeft = linkLeft + widthHalf - (imageWidth/2);
    let imageTop = linkTop - imageHeight - 10; 
    screenDavid.style.opacity="100%";
    screenDavid.style.left = imageLeft + 'px';
    screenDavid.style.top = imageTop + 'px';
});

linkDavid.addEventListener('mouseleave', function(){
    setTimeout(function (){
        screenDavid.style.opacity="0%";
    }, 500);
});

function popDavid(e){
    let mouseX = e.pageX;
    let mouseY = e.pageY;
};

linkDavid.addEventListener('mouseover', popBrigida)

linkAlpina.addEventListener('mouseenter', function(){
    let linkCoord = linkAlpina.getBoundingClientRect();
    let imageCoord = screenAlpina.getBoundingClientRect();
    let linkLeft = linkCoord.left; 
    let linkTop = linkCoord.top; 
    let linkWidth = linkCoord.width; 
    let widthHalf = linkWidth / 2;
    let imageHeight = imageCoord.bottom;
    let imageWidth = imageCoord.width;
    let imageLeft = linkLeft + widthHalf - (imageWidth/2);
    let imageTop = linkTop - imageHeight - 10; 
    screenAlpina.style.opacity="100%";
    screenAlpina.style.left = imageLeft + 'px';
    screenAlpina.style.top = imageTop + 'px';
});

linkAlpina.addEventListener('mouseleave', function(){
    setTimeout(function (){
        screenAlpina.style.opacity="0%";
    }, 500);
});

function popAlpina(e){
    let mouseX = e.pageX;
    let mouseY = e.pageY;
};

linkAlpina.addEventListener('mouseover', popBrigida)