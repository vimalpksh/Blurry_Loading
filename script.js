const loadingEl = document.querySelector(".loading");
const bgEl = document.querySelector(".bg");

let load = 0;

const blurBg = function () {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadingEl.innerHTML = `${load}%`;
  loadingEl.style.opacity = scale(load, 0, 100, 1, 0);
  bgEl.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

let int = setInterval(blurBg, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
