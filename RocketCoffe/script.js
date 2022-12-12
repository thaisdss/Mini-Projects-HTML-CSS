const widthScreen = window.innerWidth
    document.documentElement.clientWidth
    document.body.clientWidth;

const header = document.querySelector("header");
const menu = document.querySelector(".menu")

const changeSrc = (element, src) => document.querySelector(element).src = src

const addElementWithTextInHeader = (text) => {
    const p = document.createElement("p");

    p.innerText = text;

    const headerButton = document.querySelector("header > button")

    header.insertBefore(p, headerButton);
}

const addIconMenuInHeader = () => {
    const img = document.createElement("img");

    img.src = "assets/menu-burguer-open.svg";

    img.classList.add("menu");

    document.querySelector("header > div").appendChild(img);
}

if(widthScreen < 900){
    changeSrc("header > div > img", "assets/logo-mobile.svg");

    addElementWithTextInHeader(`O café que fará seu código decolar para o próximo nível.`)

    addIconMenuInHeader()
}

const openMenu = () => {
    document.body.classList.toggle("menu-open");

    if(document.body.classList.contains("menu-open")){
        return changeSrc(".menu", "assets/menu-burguer-close.svg")
    }

    return changeSrc(".menu", "assets/menu-burguer-open.svg")
}

document.querySelector(".menu").addEventListener("click", openMenu);
