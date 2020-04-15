

"use strict";

const butOn = document.querySelector(".button_on");
const butOff = document.querySelector(".button_off");
const block_mod = document.querySelector(".block_mod");

butOn.addEventListener("click", function () {
    openReset();
});

butOff.addEventListener("click", function () {
    darkFon();
    modal();
    setTimeout(function () {
        openBlock();
    }, 500)
});

const openReset = function () {
    darkFon();
    modal();
    openBlock();
};

const darkFon = function () {
    document.querySelector("body").classList.toggle("dark_fon");
};

const modal = function () {
    block_mod.classList.toggle("scale-in-center");
    block_mod.classList.toggle("scale-out-center");
};

const openBlock = function () {
    block_mod.classList.toggle("block_mod-open");
}