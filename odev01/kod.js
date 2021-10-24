var random = Math.round(Math.random() * 999);

var files = ["photos/batman.png", "photos/joker.png"];

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
var hak = 2;

first.setAttribute("src", files[random]);

if (random % 3 === 0) {
  first.setAttribute("src", files[0]);
  second.setAttribute("src", files[1]);
  third.setAttribute("src", files[1]);
} else if (random % 3 === 1) {
  first.setAttribute("src", files[1]);
  second.setAttribute("src", files[0]);
  third.setAttribute("src", files[1]);
} else {
  first.setAttribute("src", files[1]);
  second.setAttribute("src", files[1]);
  third.setAttribute("src", files[0]);
}
var a = document.querySelector("a");
a.style.display = "none";
var h2 = document.querySelector("h2");
h2.textContent = "Please click on a card !"
var h3 = document.querySelector("h3");
h3.textContent = "Remaining Right :" + hak;

const flipCardContainer = document.querySelector(".flip-card-container");
const fc = document.querySelector(".second-card-container");
const fcc = document.querySelector(".third-card-container");

flipCardContainer.style.cursor = "pointer";
fc.style.cursor = "pointer";
fcc.style.cursor = "pointer";

/*Birinci kart*/
flipCardContainer.addEventListener("click", function() {
  if (hak > 0) {
    flipCardContainer.classList.toggle("flip");
    if (first.getAttribute("src") === files[0]) {
      flipCardContainer.style.cursor = "default";
      fc.style.cursor = "default";
      fcc.style.cursor = "default";
      hak--;
      h3.textContent = "Remaining Right : " + hak;
      hak = 0;
      h2.textContent = "Congratulations! You won the game !";
      a.style.display = "initial";
      a.addEventListener("click", function() {
        location.reload();
      })
    } else {
      hak--;
      flipCardContainer.style.pointerEvents = "none";
      if (hak <= 0) {
        fc.style.cursor = "default";
        fcc.style.cursor = "default";
        h2.textContent = "You lost! Click the button to play again !";
        a.style.display = "initial";
        a.addEventListener("click", function() {
          location.reload();
        })
      }
      h3.textContent = "Remaining Right : " + hak;
      if (hak > 0) {
        h2.textContent = "Wrong choice! Try again !";
      }
    }
  }

});
/*Ikinci kart*/
fc.addEventListener("click", function() {
  if (hak > 0) {
    fc.classList.toggle("flip");
    if (second.getAttribute("src") === files[0]) {
      flipCardContainer.style.cursor = "default";
      fc.style.cursor = "default";
      fcc.style.cursor = "default";
      hak--;
      h3.textContent = "Remaining Right : " + hak;
      hak = 0;
      h2.textContent =  "Congratulations! You won the game !";
      a.style.display = "initial";
      a.addEventListener("click", function() {
        location.reload();
      })
    } else {
      hak--;
      fc.style.pointerEvents = "none";
      if (hak <= 0) {
        flipCardContainer.style.cursor = "default";
        fcc.style.cursor = "default";
        h2.textContent = "You lost! Click the button to play again !";
        a.style.display = "initial";
        a.addEventListener("click", function() {
          location.reload();
        })
      }
      h3.textContent = "Remaining Right : " + hak;
      if (hak > 0) {
        h2.textContent = "Wrong choice! Try again !";
      }
    }

  }


});

/*Ucuncu kart*/
fcc.addEventListener("click", function() {
  if (hak > 0) {
    fcc.classList.toggle("flip");
    if (third.getAttribute("src") === files[0]) {
      flipCardContainer.style.cursor = "default";
      fc.style.cursor = "default";
      fcc.style.cursor = "default";
      hak--;
      h3.textContent = "Remaining Right :" + hak;
      hak = 0;
      h2.textContent = "Congratulations! You won the game !";
      a.style.display = "initial";
      a.addEventListener("click", function() {
        location.reload();
      })
    } else {
      hak--;
      fcc.style.pointerEvents = "none";
      if (hak <= 0) {
        flipCardContainer.style.cursor = "default";
        fc.style.cursor = "default";
        h2.textContent = "You lost! Click the button to play again !";
        a.style.display = "initial";
        a.addEventListener("click", function() {
          location.reload();
        })
      }
      h3.textContent = "Remaining Right : " + hak;
      if (hak > 0) {
        h2.textContent = "Wrong choice! Try again !";
      }

    }
  }
});
