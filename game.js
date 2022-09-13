var width = 0;
var height = 0;

var positionX;
var positionY;

var mosquito;
var sizeMosquito;
var sideMosquito;

function adjustsStageSizeGame() {
  height = window.innerHeight;
  width = window.innerWidth;
}

adjustsStageSizeGame();

function randomPosition() {

  // remove previous mosquito (if any)
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();
  }

  positionX = Math.floor(Math.random() * width) - 90;
  positionY = Math.floor(Math.random() * height) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  mosquito = document.createElement("img");
  mosquito.src = "assets/mosca.png";
  mosquito.className = randomSize() +' '+ randomSide();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = 'mosquito'

  document.body.appendChild(mosquito);

  randomSize();
  randomSide();
}

function randomSize() {
  sizeMosquito = Math.floor(Math.random() * 3);

  switch (sizeMosquito) {
    case 0:
      return "mosquitoSmall";
    case 1:
      return "mosquitoNormal";
    case 2:
      return "mosquitoLarge";
  }
}

function randomSide() {
  sideMosquito = Math.floor(Math.random() * 2);

  switch (sideMosquito) {
    case 0:
      return "sideLeft";
    case 1:
      return "sideRight";
  }
}
