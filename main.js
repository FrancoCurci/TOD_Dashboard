//imports 
import { menuNavigationJson, menuConfigurationJson } from "./assets/mockup/navbar.js";
import { botonesJson } from "./assets/mockup/buttons.js";
import { announmentsJson } from "./assets/mockup/announments.js";
import { proyectosJson } from "./assets/mockup/proyects.js";
import { trendingJson } from "./assets/mockup/trendings.js";
import { userjSOS } from "./assets/mockup/user.js";
//elements
const menuNavigarionContainer = document.querySelector(".navigation-web");
const menuNavigationConfContainer = document.querySelector(".navigation-configuration")
const buttonsHeaderContainer = document.querySelector(".buttons-container")
const proyectsMainContainer = document.querySelector(".container-proyectos")
const announcementContainer = document.querySelector(".announcement");
const trendingsContainer = document.querySelector(".trendings")
main()


function main() {
    printMenu();
    printButtons();
    printProyects();
    printAnnouncement();
    printTrending();
}
function printMenu() {
    for (let i = 0; i < menuNavigationJson.length; i++) {
        const gridItem = document.createElement('button');
        gridItem.classList.add('nav-bar');
        gridItem.innerHTML = menuNavigationJson[i].icon + " " + menuNavigationJson[i].option
        menuNavigarionContainer.appendChild(gridItem);
    }

    for (let i = 0; i < menuConfigurationJson.length; i++) {
        const gridItem = document.createElement('button');
        gridItem.classList.add('nav-bar');
        gridItem.innerHTML = menuConfigurationJson[i].icon + " " + menuConfigurationJson[i].option
        menuNavigationConfContainer.appendChild(gridItem);
    }

}
function printProyects() {

    for (let i = 0; i < proyectosJson.length; i++) {
        const gridItem = document.createElement('div');
        const gridTitle = document.createElement('h3');
        const gridDescription = document.createElement('p');
        gridItem.classList.add('proyects-containers');
        gridTitle.innerHTML = proyectosJson[i].title
        gridDescription.innerHTML = proyectosJson[i].description

        gridItem.appendChild(gridTitle)
        gridItem.appendChild(gridDescription)
        proyectsMainContainer.appendChild(gridItem);
    }

}
function printButtons() {
    for (let i = 0; i < botonesJson.length; i++) {
        const gridItem = document.createElement('button');
        gridItem.classList.add('buttons');
        gridItem.innerHTML = botonesJson[i].name
        buttonsHeaderContainer.appendChild(gridItem);
    }
}
function printAnnouncement() {
    for (let i = 0; i < announmentsJson.length; i++) {
        const gridItem = document.createElement('div');
        const gridTitle = document.createElement('h3');
        const gridDescription = document.createElement('p');
        gridItem.classList.add('announcement-only');
        gridTitle.innerHTML = announmentsJson[i].titulo
        gridDescription.innerHTML = announmentsJson[i].descripcion

        gridItem.appendChild(gridTitle)
        gridItem.appendChild(gridDescription)
        announcementContainer.appendChild(gridItem);
    }

}
function printTrending() {
    for (let i = 0; i < trendingJson.length; i++) {


        const gridItem = document.createElement('div');
        const gridIcono = document.createElement('div')
        const gridContainUser = document.createElement('div')
        const gridTitle = document.createElement('h3');
        const gridDescription = document.createElement('p');
        gridItem.classList.add('trending-only');
        gridTitle.innerHTML = trendingJson[i].username
        gridDescription.innerHTML = trendingJson[i].descripcion
        gridIcono.innerHTML = trendingJson[i].icono

        gridContainUser.appendChild(gridTitle)
        gridContainUser.appendChild(gridDescription)

        gridItem.appendChild(gridIcono)
        gridItem.appendChild(gridContainUser)


        trendingsContainer.appendChild(gridItem);
    }

}

