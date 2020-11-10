let body = document.querySelector("body");
let container = document.querySelector("#container");
let wiz = document.querySelector("#wiz");
let hat = document.querySelector("#moving_part_Hat");
let dress = document.querySelector("#dress");
let resetTxt = document.querySelector("#resetTxt");
let txt = document.querySelector("#anim_txt");


resetTxt.addEventListener('click', () =>{
  txt.style.animation = "txtAppear 5s ease forwards";
})

body.addEventListener("click", goOnClick);

function goOnClick(e) {
  let parentPosition = getPosition(container),
    mouseX = e.pageX - parentPosition.x - wiz.getAttribute("width") / 2,
    mouseY = e.pageY - parentPosition.y - wiz.getAttribute("height") / 2,
    translate3dValue = "translate3d(" + mouseX + "px," + mouseY + "px, 0)";

  function getPosition(element) {
    let xPosition = 0;
    let yPosition = 0;

    while(element) {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }

    return {
      x: xPosition,
      y: yPosition
    };
  }

  toogleStyle();
  wiz.style.transform = translate3dValue;
  setTimeout(toogleStyle, 1300);
}

function toogleStyle() {
  hat.classList.toggle("hatMovement");
  dress.classList.toggle("dressMovement");
}

// function giveStyles()
// {
//   hat.style.animation = "hat .5s alternate infinite";
//   hat.style.transformOrigin = "center";

//   dress.style.animation = "dress .5s alternate infinite";
//   dress.style.transformOrigin = "center";
//   dress.style.transformBox = "fill-box";

// }

// function clearStyles()
// {
//   hat.style.animation = "";
//   hat.style.transformOrigin = "";

//   dress.style.animation = "";
//   dress.style.transformOrigin = "";
//   dress.style.transformBox = "";

// }

