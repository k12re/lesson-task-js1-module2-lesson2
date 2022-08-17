const button = document.querySelector("button");

button.onclick = function () {
  button.disabled = true;
  let counter = document.querySelector("span.count");

  setInterval(function () {
    for (let i = 1; i <= 7; i++) {
      counter.innerHTML = i;
    }
  }, 2000);

  if ((i = 7)) {
    button.disabled = false;
  }
};
