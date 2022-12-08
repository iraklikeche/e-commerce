"use strict";

const bar = document.querySelector(".fa");

const nav = document.querySelector(".navbar");

const close = document.querySelector("#close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

const mainImg = document.getElementById("mainImg");
const smallImgs = document.querySelectorAll(".small-img");

smallImgs.forEach((img) => {
  img.addEventListener("click", () => {
    mainImg.src = img.src;
  });
});
