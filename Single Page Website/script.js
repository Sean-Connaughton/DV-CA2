"use strict";

console.log("Script Loaded");

// constants
// modify discrete page elements
const pageElements = [          "body",         "body",         "navbar",           "navbar",                   "mainContainer",        "articleContainer",     "contactModalContent",      "contactModalContent",      "changeColourModeButton"];
const lightConfigurations = [   "text-dark",    "bg-body",      "navbar-light",     "bg-secondary-subtle",      "bg-body",              "bg-body",              "bg-body-tertiary",         "text-dark",                "btn-dark"];
const darkConfigurations = [    "text-white",   "bg-dark",      "navbar-dark",      "bg-black",                 "bg-dark",              "bg-dark",              "bg-dark",                  "text-white",               "btn-light"];

// corresponding light and dark colours, swaps between them, modify every element with the class
const lightColours = [   "text-dark",    "bg-body",      "navbar-light",     "bg-secondary-subtle",    "bg-body-tertiary",        "my-list-group-item-light",     "text-dark",      "bg-light",     "border-dark",      "btn-dark"];
const darkColours = [    "text-white",   "bg-dark",      "navbar-dark",      "bg-black",               "bg-dark",                 "my-list-group-item-dark",      "text-white",     "bg-dark",      "border-light",     "btn-light"];

// button config
const lightButtonIcon = "Dark Mode <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-moon\" viewBox=\"0 0 16 16\"><path d=\"M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286\"/></svg>"
const darkButtonIcon = "Light Mode <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-brightness-high\" viewBox=\"0 0 16 16\"><path d=\"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708\"/></svg>"

// colour schemes
const colourSchemes = {light:"colourScheme=Light", dark:"colourScheme=Dark"}



// main
let colourConfigsID;
let colourConfigsClass;
let buttonIcon;

window.addEventListener('DOMContentLoaded', () => {
    //colourConfigsID = initialiseColourConfigsByID();
    colourConfigsClass = initialiseColourConfigsByClass();
    buttonIcon = initialiseButtonIconConfig();

    changeElementColours(colourConfigsClass);
    changeButtonIcon(buttonIcon);
    document.getElementById("changeColourModeButton").addEventListener("click", () => { swapConfigsClass(); changeElementColours(colourConfigsClass); changeButtonIcon(buttonIcon);});
})



// functions
// init (when page loads)
function initialiseColourConfigsByID() {
    if (getCookie("colourScheme") == "Light") {
        // set to light
        return {toRemove:darkConfigurations, toAdd:lightConfigurations};
    }
    else if (getCookie("colorScheme") == "Dark" || getCookie("colorScheme") == "") {
        // set to dark
        return {toRemove:lightConfigurations, toAdd:darkConfigurations};
    }
}

function initialiseColourConfigsByClass() {
    if (getCookie("colourScheme") == "Light") {
        // set to light
        return {toRemove:darkColours, toAdd:lightColours};
    }
    else if (getCookie("colorScheme") == "Dark" || getCookie("colorScheme") == "") {
        // set to dark
        return {toRemove:lightColours, toAdd:darkColours};
    }
}

function initialiseButtonIconConfig() {
    if (getCookie("colourScheme") == "Light")  {
        return lightButtonIcon;
    }
    else if (getCookie("colorScheme") == "Dark" || getCookie("colorScheme") == "") {
        return darkButtonIcon;
    }
}

// swap (when colour change button is clicked)
function swapConfigsID() {
    if (getCookie("colourScheme") == "Light") {
        // swap to dark
        colourConfigsID.toRemove = lightConfigurations;
        colourConfigsID.toAdd = darkConfigurations;
        buttonIcon = darkButtonIcon;
        document.cookie = colourSchemes.dark;
    }
    else if (getCookie("colourScheme") == "Dark" || getCookie("colourScheme" == "")) {
        // swap to light
        colourConfigsID.toRemove = darkConfigurations;
        colourConfigsID.toAdd = lightConfigurations;
        buttonIcon = lightButtonIcon;
        document.cookie = colourSchemes.light;
    }
}

function swapConfigsClass() {
    if (getCookie("colourScheme") == "Light") {
        // swap to dark
        colourConfigsClass.toRemove = lightColours;
        colourConfigsClass.toAdd = darkColours;
        buttonIcon = darkButtonIcon;
        document.cookie = colourSchemes.dark;
    }
    else if (getCookie("colourScheme") == "Dark" || getCookie("colourScheme" == "")) {
        // swap to light
        colourConfigsClass.toRemove = darkColours;
        colourConfigsClass.toAdd = lightColours;
        buttonIcon = lightButtonIcon;
        document.cookie = colourSchemes.light;
    }
}

// element modification functions (modifies the DOM elements)
function changeElementColours(colourConfigsID) {
    for (let i = 0; i < pageElements.length; i++) {
        document.getElementById(pageElements[i]).classList.remove(colourConfigsID.toRemove[i]);
        document.getElementById(pageElements[i]).classList.add(colourConfigsID.toAdd[i]);
    }
}

function changeElementColours(colourConfigsClass) {
    let toRemove = colourConfigsClass.toRemove;
    let toAdd = colourConfigsClass.toAdd;

    for (let i = 0; i < toRemove.length; i++) {
        let elements = Array.from(document.getElementsByClassName(toRemove[i]));
        for (let element of elements) {
            element.classList.remove(toRemove[i]);
            element.classList.add(toAdd[i]);
        }
    }
}

function changeButtonIcon(buttonIcon) {
    document.getElementById("colourModeButtonIcon").innerHTML = buttonIcon;
}

// getCookie() function courtesy of
// https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}