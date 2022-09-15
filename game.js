var width = 0;
var height = 0;

var positionX;
var positionY;

var mosquito;
var sizeMosquito;
var sideMosquito;
var SetMosquitoTime = 1500;

var lives = 3;
var time = 10;

var level = window.location.search;
level = level.replace("?", "");

switch (level) {
  case "NORMAL":
    SetMosquitoTime = 1500;
    break;
  case "HARD":
    SetMosquitoTime = 1000;
    break;
  case "VERY_HARD":
    SetMosquitoTime = 500;
    break;
}

function adjustsStageSizeGame() {
  height = window.innerHeight;
  width = window.innerWidth;
}

adjustsStageSizeGame();

var countdown = setInterval(function () {
  time -= 1;

  if (time < 0) {
    clearInterval(countdown);
    clearInterval(createMosquito);
    window.location.href = "./victory.html";
  } else {
    document.getElementById("countdown").innerHTML = time;
  }
}, 1000);

function randomPosition() {
  // remove previous mosquito (if any)
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (lives === 0) {
      window.location.href = "./end-of-the-game.html";
    } else {
      document.getElementById("life" + lives).src =
        "../assets/coracao_vazio.png";
      lives--;
    }
  }

  positionX = Math.floor(Math.random() * width) - 90;
  positionY = Math.floor(Math.random() * height) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  // creating element
  mosquito = document.createElement("img");
  mosquito.src = "../assets/mosquito.png";
  mosquito.className = randomSize() + " " + randomSide();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

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
