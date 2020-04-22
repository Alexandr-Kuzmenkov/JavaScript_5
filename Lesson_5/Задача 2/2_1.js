

"use strict";

const buttonAll = document.querySelectorAll("button");

buttonAll.forEach(function (button) {
    button.addEventListener("click", function (event) {
        handleClick(event);
    })
});


const handleClick = function (butClickEvent) {
    const productBox = butClickEvent.target.parentNode;
    const card = {
        wrap: productBox,
        img: productBox.querySelector("img"),
        productName: productBox.querySelector(".product__name"),
        button: productBox.querySelector("button"),
    }
    const textBut = card.button.innerText;
    if (textBut === "Подробнее") {
        openText(card);
    } else if (textBut === "Отмена") {
        closeText(card);
    }
}

/**
 * Показывает текст с описанием товара.
 * @param {object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function openText(card) {
    card.img.style.display = "none";
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nobis.";
    card.productName.insertAdjacentHTML("afterend", `<div class="desc">${text}</div>`);
    card.button.innerText = "Отмена";
}

function closeText(card) {
    card.img.style.display = "block";
    card.wrap.querySelector(".desc").remove();
    card.button.innerText = "Подробнее";
}