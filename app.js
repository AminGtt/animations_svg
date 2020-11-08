let body = document.querySelector('body');
let wiz = document.querySelector('svg');
let hat = document.querySelector('#moving_part_Hat');
let dress = document.querySelector('#dress');




body.addEventListener('click', goOnClick)

function goOnClick(e)
{
  
  let mouseX = e.clientX - (wiz.getAttribute("width") / 2),
      mouseY = e.clientY - (wiz.getAttribute("height") / 2),
      translate3dValue = "translate3d(" + mouseX + "px," + mouseY + "px, 0)";

  
  wiz.style.transform = translate3dValue;
  giveStyles();
  setTimeout(clearStyles, 1300);
}

function giveStyles()
{
  hat.style.animation = "hat .5s alternate infinite";
  hat.style.transformOrigin = "center";
  
  dress.style.animation = "dress .5s alternate infinite";
  dress.style.transformOrigin = "center";
  dress.style.transformBox = "fill-box";

}

function clearStyles()
{
  hat.style.animation = "";
  hat.style.transformOrigin = "";
  
  dress.style.animation = "";
  dress.style.transformOrigin = "";
  dress.style.transformBox = "";

}