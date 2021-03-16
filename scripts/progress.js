
// progress circles 
// Get sections
var about = document.querySelector('.about');
var clients = document.querySelector('.clients')
var statement = document.querySelector('.statement')
var contact = document.querySelector('.contact')
//COLOR
let backgroundColor = "#ffb35a";


// Get position in the viewport
//Helper function
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0
  );
};

//main function 
var changeCircles = function() {
  if(isInViewport(about)){
    document.querySelectorAll(".circle").forEach(el => {
        el.style.backgroundColor = "rgba(255, 255, 255,0)";
    });
    document.querySelector(".circle:nth-child(1)").style.backgroundColor= backgroundColor;
  }
  else if(isInViewport(clients)){
    document.querySelectorAll(".circle").forEach(el => {
        el.style.backgroundColor = "rgba(255, 255, 255,0)";
    });
    document.querySelector(".circle:nth-child(2)").style.backgroundColor= backgroundColor;
  }
  else if(isInViewport(statement)){
    document.querySelectorAll(".circle").forEach(el => {
        el.style.backgroundColor = "rgba(255, 255, 255,0)";
    });
    document.querySelector(".circle:nth-child(3)").style.backgroundColor= backgroundColor;
  }
  else if(isInViewport(contact)){
    document.querySelectorAll(".circle").forEach(el => {
        el.style.backgroundColor = "rgba(255, 255, 255,0)";
    });
    document.querySelector(".circle:nth-child(4)").style.backgroundColor= backgroundColor
  }
}

changeCircles();
document.querySelector('.content').addEventListener('scroll', changeCircles);

