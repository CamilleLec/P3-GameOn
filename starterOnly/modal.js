// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const error = document.querySelector(".error");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const closeM = document.querySelector(".close");
const form = document.getElementById("reserve");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const mdlConfirmation = document.querySelector(".mdlConfirmation");
const btnCloseMdlConfirmation = document.getElementById("closeValidation");
const checkboxinput = document.querySelector("input[class=checkbox-input]");
const checkbox2 = document.querySelector("input[id=checkbox1]");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// menu burger
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Fermeture de la Modale
closeM.addEventListener("click", () => {
    modalbg.style.display = "none";
});

// Fermeture modale de confirmation
btnCloseMdlConfirmation.addEventListener("click", () => {
    mdlConfirmation.style.display = "none";
});

// Validation formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ok = true;

    if (first.value.trim().length < 2) {
        const errorMessage = "Minimum 2 caractères";

        first.parentElement.setAttribute("data-error-visible", "true");
        first.parentElement.setAttribute("data-error", errorMessage);
        //   afficher le message d'erreur
        ok = false;
    } else {
        first.parentElement.setAttribute("data-error-visible", "false");
        //    cacher le message d'erreur
    }

    if (last.value.trim().length < 2) {
        const errorMessage = "Minimum 2 caractères";

        last.parentElement.setAttribute("data-error-visible", "true");
        last.parentElement.setAttribute("data-error", errorMessage);
        ok = false;
    } else {
        last.parentElement.setAttribute("data-error-visible", "false");
    }

    if (email.value.trim() == "" || !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        const errorEmail = "Entrez une adresse email valide";
        email.parentElement.setAttribute("data-error-visible", "true");
        email.parentElement.setAttribute("data-error", errorEmail);
        ok = false;
    } else {
        email.parentElement.setAttribute("data-error-visible", "false");
    }

    if (birthdate.value == "") {
        const errorBirthdate = "Une date de naissance est requise";

        birthdate.parentElement.setAttribute("data-error-visible", "true");
        birthdate.parentElement.setAttribute("data-error", errorBirthdate);
        ok = false;
    } else {
        birthdate.parentElement.setAttribute("data-error-visible", "false");
    }

    if (quantity.value == "") {
        const errorQuantity = "Une valeur est requise";

        quantity.parentElement.setAttribute("data-error-visible", "true");
        quantity.parentElement.setAttribute("data-error", errorQuantity);
        ok = false;
    } else {
        quantity.parentElement.setAttribute("data-error-visible", "false");
    }

    const selectedCityfield = document.querySelector('input[name="location"]:checked');

    if (selectedCityfield === null) {
        const errorcheckboxinput = "Selectionnez une ville";
        checkboxinput.parentElement.setAttribute("data-error-visible", "true");
        checkboxinput.parentElement.setAttribute("data-error", errorcheckboxinput);
        ok = false;
    } else {
        selectedCityfield.parentElement.setAttribute("data-error-visible", "false");
    }

    const checkbox1 = document.querySelector('input[name="checkbox1"]:checked');

    if (checkbox1 === null) {
        const termsofUseUnchecked = "veuillez accepter les conditions d'utilisation";
        checkbox2.parentElement.setAttribute("data-error-visible", "true");
        checkbox2.parentElement.setAttribute("data-error", termsofUseUnchecked);
        ok = false;
    } else {
        checkbox2.parentElement.setAttribute("data-error-visible", "false");
    }

    if (ok) {
        modalbg.style.display = "none"; // Fermer la modale
        mdlConfirmation.style.display = "block"; // Affiche message confirmation
    }
});
