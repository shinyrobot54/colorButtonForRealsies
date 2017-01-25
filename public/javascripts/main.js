//   @todo

"use strict";

class main {
     constructor() {
          main.prepApp();
          main.handleClick();
     }

     static prepApp() {
          document.getElementById('blueButton').style.display = 'block';
          document.getElementById('redButton').style.display = 'hidden';
     }

     static handleClick() {
          document.getElementById('blueButton').addEventListener('click', () => {
               document.getElementById('blueButton').style.display = "hidden";
               document.getElementById('redButton').style.display = 'block';
          });
     }
}

window.addEventListener('load', () => {
     new main();
});