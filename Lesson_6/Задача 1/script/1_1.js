

"use strict";

let slider = document.querySelector(".slider");

let loadIcon = document.createElement("i");
loadIcon.classList.add("fas", "fa-spinner", "fa-spin");
slider.insertAdjacentElement('afterbegin', loadIcon);

let leftArrow = document.createElement("i");
leftArrow.classList.add("fas", "fa-caret-square-left",  "slider-leftArrow");
slider.insertAdjacentElement("beforeend", leftArrow);

let rightArrow = document.createElement("i");
rightArrow.classList.add("fas", "fa-caret-square-right", "slider-rightArrow");
slider.insertAdjacentElement("beforeend", rightArrow);



window.addEventListener("load", function () {

    leftArrow.addEventListener("click", function () {
        images.setNexLeftImage();
    });

    rightArrow.addEventListener("click", function () {
        images.setNexRightImage();
    });

    images.init();
    loadIcon.style.display = "none";
});

function setSlizes(slider){
    let width = slider.getAttribute("data-width");
    let height = slider.getAttribute("data-height");
    if (width != null && width != ""){
        slider.style.width = width;
    }
    if (height != null && height != ""){
        slider.style.height = height;
    }
}
setSlizes(slider);

let images = {
    // Номер текущего изображения
    currentIdx: 0,
    // Масив элементы слайдов дивы
    slides: [],

    init() {
        this.slides = document.querySelectorAll(".slider-item");
        this.showImageWithCurrentIdx();
    },

    showImageWithCurrentIdx(){
        this.slides[this.currentIdx].classList.remove("hidden-slid");
    },

    // Слайду добавляем невидимость
    hideVisibleImage(){
    //    this.slides.forEach(function (slide) {
    //        if(!slide.classList.contains("hidden-slid")){
    //            slide.classList.add("hidden-slid");
    //        }
    //    });
        document.querySelector('.slider-item:not(.hidden-slid)')
            .classList.add("hidden-slid");
    },

    // Переключение изображений
    setNexLeftImage(){
        this.hideVisibleImage();
        if(this.currentIdx == 0){
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.toggle("scale-in-hor-right");
        setTimeout(() => {
            currentSlide.classList.toggle("scale-in-hor-right");
        }, 500)
        this.showImageWithCurrentIdx();
    },
    setNexRightImage(){
        this.hideVisibleImage();
        if(this.currentIdx == this.slides.length - 1){
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        const currentSlide = this.slides[this.currentIdx];
        currentSlide.classList.toggle("scale-in-hor-left");
        setTimeout(() => {
            currentSlide.classList.toggle("scale-in-hor-left");
        }, 500)
        this.showImageWithCurrentIdx();
    },

}

