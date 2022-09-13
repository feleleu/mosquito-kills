var width = 0;
var height = 0;

var positionX;
var positionY;

var mosquito;
var sizeMosquito;

function adjustsStageSizeGame() {
  height = window.innerHeight;
  width = window.innerWidth;
}

adjustsStageSizeGame();

function randomPosition() {
  positionX = Math.floor(Math.random() * width) - 90;
  positionY = Math.floor(Math.random() * height) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  mosquito = document.createElement("img");
  mosquito.src = "assets/mosca.png";
  mosquito.className = randomSize();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  document.body.appendChild(mosquito);

  randomSize();
}

function randomSize() {
  sizeMosquito = Math.floor(Math.random() * 3);

  switch (sizeMosquito) {
    case 0:
      return 'mosquitoSmall'
    case 1:
      return 'mosquitoNormal'
    case 2:
      return 'mosquitoLarge'
  }
}
