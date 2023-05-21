var counter = 0;
var x = 0;
var modalContent = document.getElementById("modal-content");
var navbarCollapsed = document.getElementById("navbar-collapsed");
var passengerCount = parseInt(document.getElementById("passenger-count").innerText);

function modalExpander() {
   if (counter == 0) {
    counter = 1;
    modalContent.classList.remove("hidden");
    modalContent.classList.add("flex");
    console.log(counter);
   } else {
    counter = 0;
    modalContent.classList.add("hidden");
    modalContent.classList.remove("flex");
    console.log(counter);
   }
} 

function addPassenger() {
    if (passengerCount < 5) {
        document.getElementById("passenger-count").style.color = "var(--bg-color-dark)";
        document.getElementById("passenger-count").innerText = passengerCount += 1;
        console.log(passengerCount);
        document.getElementById("viaggiatori-input").innerText = passengerCount;
        document.getElementById("viaggiatori-input").style.color = "var(--bg-color-dark)";
    }

    if (passengerCount == 5) {
        document.getElementById("add-passenger-icon").style.opacity = 0.5;
        document.getElementById("add-passenger-icon").style.cursor = "default";
    }

    if (passengerCount > 0) {
        document.getElementById("remove-passenger-icon").style.opacity = 1;
        document.getElementById("remove-passenger-icon").style.cursor = "pointer";
    }
}

function removePassenger() {
    if (passengerCount > 0) {
        document.getElementById("passenger-count").style.color = "var(--bg-color-dark)";
        document.getElementById("passenger-count").innerText = passengerCount -= 1;
        console.log(passengerCount);
        document.getElementById("viaggiatori-input").innerText = passengerCount;
        document.getElementById("viaggiatori-input").style.color = "var(--bg-color-dark)";
    } else {
        void(0);
    }

    if (passengerCount == 0) {
        document.getElementById("passenger-count").style.color = "var(--placeholder-color)";
        document.getElementById("viaggiatori-input").innerText = "Viaggiatori";
        document.getElementById("viaggiatori-input").style.color = "var(--placeholder-color)";
        document.getElementById("remove-passenger-icon").style.opacity = 0.5;
        document.getElementById("remove-passenger-icon").style.cursor = "default";
    }

    if (passengerCount < 5) {
        document.getElementById("add-passenger-icon").style.opacity = 1;
        document.getElementById("add-passenger-icon").style.cursor = "pointer";
    }
}

function expandNavbar() {
    if (x == 0) {
        x = 1;
        document.getElementById("navbar-collapsed").classList.add("navbar-expanded");
    } else {
        x = 0;
        document.getElementById("navbar-collapsed").classList.remove("navbar-expanded");
    }
}

function validateAr() {
    if (document.getElementById("checkbox-ar").checked) {
        document.getElementById("ritorno").classList.remove("hidden");
    } else {
        document.getElementById("ritorno").classList.add("hidden");
    }
}

function fillBergamo() {
    document.getElementById("destinazione").value = "Orio Al Serio (BGY)"
}

function fillMalpensa() {
    document.getElementById("destinazione").value = "Milano Malpensa (MXP)"
}

function fillLinate() {
    document.getElementById("destinazione").value = "Milano Linate (LIN)"
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});