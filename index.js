const CurrentSizeButton = 2;
var CurrentSizeButtonStyle = "var(--background-color1)";
var CurrentColor = "blue";
var backgroundChangerAnimationParameter = "1s linear background-changer-transition";

function setProductShoe(number) {
    let Allshoes = document.querySelectorAll(".card__product__shoe");
    let nextShow = document.querySelector(`#C__D__shoe${number + 1}`);
    for (let i = 0; i < Allshoes.length; i++) {
        Allshoes[i].style.display = "none";
    }
    nextShow.style.display = "block";
}

function getBackgroundByButtonColor(buttonElement) {
    let colorButton = document.querySelectorAll(".color__buttons");
    let ProductBackground = [
        "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(1,55,174,1) 0%, rgba(34,170,249,1) 100%)",
        "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(184,50,35,1) 0%, rgba(212,85,82,1) 100%)",
        "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(49,133,123,1) 0%, rgba(98,206,94,1) 100%)",
        "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(219,64,31,1) 0%, rgba(220,162,44,1) 100%)",
        "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(15,15,15,1) 0%, rgba(89,89,89,1) 100%)",
    ];
    let color = window.getComputedStyle(buttonElement)["backgroundColor"];
    for (let i = 0; colorButton.length >= i; i++) {
        if (color == window.getComputedStyle(colorButton[i])["backgroundColor"]) {
            setProductShoe(i);
            return ProductBackground[i];
        }
    }
}
function setProductTagBuy(backgroundButtonColor) {
    document.querySelector("#card__tag").style.background = backgroundButtonColor;
    document.querySelector("#card__info__buy__button").style.backgroundColor = backgroundButtonColor;
}

function setProductBackground(colorButtonClicked) {
    let backgroundProductCardNextStyle = getBackgroundByButtonColor(colorButtonClicked);
    let backgroundProductCardNext = document.querySelector("#card__product__background__next");
    backgroundProductCardNext.style.background = backgroundProductCardNextStyle;
    backgroundProductCardNext.style.animationName = "none";
    backgroundProductCardNext.focus(); //reset reflow
    backgroundProductCardNext.style.animation = backgroundChangerAnimationParameter;
    setTimeout(function () {
        let backgroundProductCard = document.querySelector("#card__product__background__original");
        backgroundProductCard.style.background = backgroundProductCardNextStyle;
    }, 810);
}
function setProduct(colorButtonClicked) {
    let sizeButtons = document.querySelectorAll(".size__buttons");
    let backgroundButtonColor = window.getComputedStyle(colorButtonClicked)["backgroundColor"];
    CurrentSizeButtonStyle = window.getComputedStyle(colorButtonClicked)["backgroundColor"];
    for (let i = 0; i < sizeButtons.length; i++) {
        if (
            window.getComputedStyle(sizeButtons[i])["backgroundColor"] !=
            "rgba(0, 0, 0, 0)"
        ) {
            sizeButtons[i].style.backgroundColor = backgroundButtonColor;
        }
    }
    setProductBackground(colorButtonClicked);
    setProductTagBuy(backgroundButtonColor);
}

function setColorButtonOff(button) {
    button.style.boxShadow = "";
    button.style.border = "";
}

document.addEventListener('DOMContentLoaded', function() {
    let colorButtonInitial = document.querySelector("#color__button1");
    colorButtonInitial.style.border = "5px solid var(--background2)";
    colorButtonInitial.style.boxShadow = "0px 0px 5px 2px var(--shadow1)";
 }, false);

var allowdToClick = true;
function setColorButtonOn(colorButtonClicked) {

    if (colorButtonClicked.style.border === "") {
        setColorButtonOff(colorButtonClicked);
        setTimeout(function () {
            allowdToClick = true;
        }, 800);
    }else{
        allowdToClick = false;
    }

    if (allowdToClick == true) {
        allowdToClick = false;
        
        setProduct(colorButtonClicked);

        let colorButtons = document.querySelectorAll(".color__buttons");
        colorButtons.forEach(setColorButtonOff);
        colorButtonClicked.style.border = "5px solid var(--background2)";
        colorButtonClicked.style.boxShadow = "0px 0px 5px 2px var(--shadow1)";


    }
}

function setSizeButtonOff(button) {
    button.style.backgroundColor = "unset";
}
function setSizeButtonOn(sizeButtonClicked) {
    let sizeButtons = document.querySelectorAll(".size__buttons");
    sizeButtons.forEach(setSizeButtonOff);
    sizeButtonClicked.style.backgroundColor = CurrentSizeButtonStyle;
}