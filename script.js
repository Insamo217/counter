// Напишите функцию countDown(n), которая получает число {n} в качестве аргумента
// и печатает в консоль обратный отсчет, начиная с этого числа.
// Например, countDown(3) напечатает: 3 2 1.

window.onload = function () {
  const push = document.querySelector(".btn");
  const counter = document.querySelector(".count");
  const input = document.querySelector(".input");
  const flex = document.querySelector(".flex");
  const text = document.querySelector(".text");

  push.addEventListener("click", countDown);

  function countDown(n) {
    n = input.value;
    flex.style.display = "none";
    text.style.display = "none";
    const textCount = document.createElement("p");
    counter.appendChild(textCount);
    const boom = () => {
      textCount.textContent = "БУМ";
    };
    const count = setInterval(() => {
      while (n >= 0) {
        textCount.textContent = n;
        n--;
        if (n === 0) {
          clearInterval(count);
          setTimeout(boom, 2000);
        }
        break;
      }
    }, 1000);
  }
};
