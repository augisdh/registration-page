"use strict";

const navItems = document.querySelectorAll(".navbar-nav .nav-item");
const termItems = document.querySelectorAll(".term-item");
const termDesrc = document.querySelector(".terms-desrc .term-txt");
const formInputs = document.querySelectorAll(".form-inputs .form-control");
const submitBtn = document.querySelector(".btn-sub");
const termBtns = document.querySelectorAll(".btn-term");
const termsCheckBox = document.querySelector(".form-check-input");

let activeTerm = "conditions";
const termText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel laoreet magna, id rutrum ex. Ut at ipsum convallis, dapibus est eget, euismod tellus. Nulla sollicitudin gravida mauris, nec semper nisl rutrum in. Nulla et velit finibus, porta ante id, finibus erat.",
    "Nunc a augue aliquam, pellentesque lectus sed, auctor mi. Quisque lobortis mollis dolor ac dignissim. In id cursus ipsum, eu sagittis lacus. Mauris interdum tempor est id sagittis. Vivamus aliquam sem vel pharetra elementum. Aliquam auctor diam quis tincidunt sagittis.",
    "Sed fermentum enim lorem, vel sollicitudin urna posuere ut. Vivamus nisi enim, elementum at lorem lacinia, hendrerit accumsan ipsum. Nullam quis fringilla sem. Donec tempus ullamcorper lacinia. Maecenas pharetra tellus quis imperdiet commodo."
]

// Navbar changing
navItems.forEach(item => {
    item.addEventListener("click", (event) => {
        removeActiveLink();
        item.classList.add("active-link");
    })
})

function removeActiveLink(){
    navItems.forEach(item => {
        item.classList.remove("active-link");
    })
}

// Term big chaning
termItems.forEach(item => {
    item.addEventListener("click", (event) => {
        activeTerm = event.target.dataset.term;
        addActiveTerm();
        changeTermText();
    })
})

function addActiveTerm(){
    termItems.forEach(item => {
        let itemData = item.dataset.term;
        (activeTerm === itemData) ? item.classList.add("active-term") : item.classList.remove("active-term");
    })
}

// Mob term chaning
termBtns.forEach(button => {
    let isExpanded = button.attributes.getNamedItem("aria-expanded").value;
    if(isExpanded === 'false'){
        button.children[0].innerHTML = "&#x2b;";
        button.style.color = "#5b5a5a";
        button.parentElement.parentElement.style.background = "transparent";
    } else {
        button.children[0].innerHTML = "&#x2212;";
        button.style.color = "#fff";
        button.parentElement.parentElement.style.background = "#5335eb";
    }

    button.addEventListener("click", () => {
        termBtns.forEach(button => {
            button.children[0].innerHTML = "&#x2b;";
            button.style.color = "#5b5a5a";
            button.parentElement.parentElement.style.background = "transparent";
        })

        let isExpanded = button.attributes.getNamedItem("aria-expanded").value;
        if(isExpanded === 'true'){
            button.children[0].innerHTML = "&#x2b;";
        } else {
            button.children[0].innerHTML = "&#x2212;";
            button.style.color = "#fff";
            button.parentElement.parentElement.style.background = "#5335eb";
        }
    })
})

function changeTermText(){
    if(activeTerm === "conditions"){
        termDesrc.innerHTML = termText[0]
    } else if (activeTerm === "rules"){
        termDesrc.innerHTML = termText[1]
    } else {
        termDesrc.innerHTML = termText[2]
    }
}

changeTermText();

formInputs.forEach(item => {
    item.addEventListener("keydown", () => {
        if(item.classList.contains("is-valid")){
            item.classList.remove("is-valid");
        } else if(item.classList.contains("is-invalid")){
            item.classList.remove("is-invalid");
        }
    })
})

// Regex script ↓
function checkInputs(){
    const checkTxt = /^[a-zA-z]+$/g;
    const checkNumber = /^\+?\-?\d+$/g;
    const checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

    formInputs.forEach(input => {
        if(input.name === "fname" || input.name === "lname" || input.name === "city"){
            let isValid = input.value.match(checkTxt);
            (isValid) ? input.classList.add("is-valid") : input.classList.add("is-invalid");
        } else if(input.name === "phone"){
            let isValid = input.value.match(checkNumber);
            (isValid) ? input.classList.add("is-valid") : input.classList.add("is-invalid");
        } else if(input.name === "addr"){
            let isValid = input.value.match(checkTxt);
            (isValid) ? input.classList.add("is-valid") : input.classList.add("is-invalid");
        } else {
            let isValid = input.value.match(checkEmail);
            (isValid) ? input.classList.add("is-valid") : input.classList.add("is-invalid");
        }
    })

    if(!termsCheckBox.checked){
        alert("Terms and coditions check box must be CHECKED!");
    }
}

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    checkInputs()
});

$('.carousel').carousel({
    interval: 2000
})