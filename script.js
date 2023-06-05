var counter = 0;
var x = 0;
var num = 1;
var modalContent = document.getElementById("modal-content");
var navbarCollapsed = document.getElementById("navbar-collapsed");
var passengerCount = parseInt(document.getElementById("passenger-count").innerText);
var isMobileModeOn = window.matchMedia("(max-width: 1450px)");
var aeroportoPartenza = document.getElementById("provenienza").value;
var aeroportoArrivo = document.getElementById("destinazione").value;

function modalExpander() {
   if (counter == 0) {
    counter = 1;
    modalContent.classList.remove("hidden");
    modalContent.classList.add("flex");
   } else {
    counter = 0;
    modalContent.classList.add("hidden");
    modalContent.classList.remove("flex");
   }
} 

function modalClose() {
    counter = 0;
    modalContent.classList.add("hidden");
    modalContent.classList.remove("flex");
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
        document.querySelector(".ritorno").classList.remove("hidden");
    } else {
        document.querySelector(".ritorno").classList.add("hidden");
    }
}

function fillBergamo() {
    document.getElementById("destinazione").value = "Orio Al Serio BGY"
    setTimeout(() => {
        $("#provenienza").focus();
    }, 400);
}

function fillMalpensa() {
    document.getElementById("destinazione").value = "Milano Malpensa MXP"
    setTimeout(() => {
        $("#provenienza").focus();
    }, 400);
}

function fillLinate() {
    document.getElementById("destinazione").value = "Milano Linate LIN"
    setTimeout(() => {
        $("#provenienza").focus();
    }, 400);
}

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

function breakpointListener(isMobileModeOn) {
    if (isMobileModeOn.matches) {
        navbarCollapsed.style.display = "";
    } else {
        navbarCollapsed.style.display = "none";
        navbarCollapsed.classList.remove("navbar-expanded");
    }
}

breakpointListener(isMobileModeOn)
isMobileModeOn.addListener(breakpointListener)

$( function() {
	$( "#partenza" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );

$( function() {
	$( "#ritorno" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );

function validateDate() {
    var dataPartenzaStr = String(document.getElementById("partenza").value);
    var dataRitornoStr = String(document.getElementById("ritorno").value);
    var giornoPartenza = parseInt(dataPartenzaStr.slice(0, 2));
    var mesePartenza = parseInt(dataPartenzaStr.slice(3, 5));
    var annoPartenza = parseInt(dataPartenzaStr.slice(6, 10));
    var giornoRitorno = parseInt(dataRitornoStr.slice(0, 2));
    var meseRitorno = parseInt(dataRitornoStr.slice(3, 5));
    var annoRitorno = parseInt(dataRitornoStr.slice(6, 10));

    if (annoRitorno < annoPartenza) {
        document.getElementById("ritorno").value = "";
        document.getElementById("#ui-datepicker-div").style.display = "block";
    } else {
        if (annoRitorno == annoPartenza) {
            if (meseRitorno < mesePartenza) {
                document.getElementById("ritorno").value = "";
                document.getElementById("#ui-datepicker-div").style.display = "block";
            } else {
                if (meseRitorno == mesePartenza) {
                    if (giornoRitorno < giornoPartenza) {
                        document.getElementById("ritorno").value = "";
                        document.getElementById("#ui-datepicker-div").style.display = "block";
                    } else {
                        console.log("sucess");
                    }
                } else {
                    if (meseRitorno > mesePartenza) {
                        console.log("success");
                    }
                }
            }
        } else {
            if (annoRitorno > annoPartenza) {
                console.log("success");
            }
        }
    }
}

function ricercaBiglietti() {
    var provenienza = String(document.getElementById("provenienza").value).slice(-3);
    var destinazione = String(document.getElementById("destinazione").value).slice(-3);
    var partenza = String(document.getElementById("partenza").value);
    var ritorno = String(document.getElementById("ritorno").value);
    var viaggiatori = String(document.getElementById("viaggiatori-input").innerText);
    var giornoPartenza = parseInt(partenza.slice(0, 2));
    var mesePartenzaInt = parseInt(partenza.slice(3, 5));
    var mesePartenza = "";

    switch (mesePartenzaInt) {
        case 01:
            mesePartenza = "Gennaio";
            break;
        case 02:
            mesePartenza = "Febbraio";
            break;
        case 03:
            mesePartenza = "Marzo";
            break;
        case 04:
            mesePartenza = "Aprile";
            break;
        case 05:
            mesePartenza = "Maggio";
            break;
        case 06:
            mesePartenza = "Giugno";
            break;
        case 07:
            mesePartenza = "Luglio";
            break;
        case 08:
            mesePartenza = "Agosto";
            break;
        case 09:
            mesePartenza = "Settembre";
            break;
        case 10:
            mesePartenza = "Ottobre";
            break;
        case 11:
            mesePartenza = "Novembre";
            break;
        case 12:
            mesePartenza = "Dicembre";
            break;
        default: 
            mesePartenza = "default.date";
            break;
    }
    var minOneway = Math.ceil(1);
    var maxOneway = Math.floor(4);
    var pricetag1 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag2 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag3 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag4 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    console.log(pricetag1*5-0.01, pricetag2*5-0.01, pricetag3*5-0.01, pricetag4*5-0.01);

    if (document.getElementById("checkbox-ar").checked) {
        if (provenienza && destinazione && partenza && ritorno != "" && provenienza != destinazione && viaggiatori != "Viaggiatori") {
            document.getElementById("search-button").href = "#checkbox-ar";
            document.getElementById("lower-section").style.display = "none";
            document.getElementById("ticket-oneway-section-wrapper").classList.remove("hidden");
            for(let num = 1; num < 5; num++) {
                document.getElementById("depairport" + num).innerText = provenienza;
            }
        
            for(let num = 1; num < 5; num++) {
                document.getElementById("arrivalairport" + num).innerText = destinazione;
            }
            // document.getElementById("tickets-title").innerText = "Mostra risultati per " + partenza + " - " + ritorno + ":"; 
            document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
            document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
            document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
            document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
        } else {
            document.getElementById("search-button").href = "#navbar";
        }
    } else {
        if (provenienza && destinazione && partenza != "" && provenienza != destinazione && viaggiatori != "Viaggiatori") {
            document.getElementById("search-button").href = "#checkbox-ar";
            document.getElementById("lower-section").style.display = "none";
            document.getElementById("ticket-oneway-section-wrapper").classList.remove("hidden");
            for(let num = 1; num < 5; num++) {
                document.getElementById("depairport" + num).innerText = provenienza;
            }
        
            for(let num = 1; num < 5; num++) {
                document.getElementById("arrivalairport" + num).innerText = destinazione;
            }
            // document.getElementById("tickets-title").innerText = "Mostra risultati per " + partenza+ ":";
            document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
            document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
            document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
            document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
            document.getElementById("giorno-ricerca").innerText = giornoPartenza;
            document.getElementById("mese-ricerca").innerText = mesePartenza;
        } else {
            document.getElementById("search-button").href = "#navbar";
        }
    }

}

function priceRan() {
    document.getElementById("pricetag1") = (Math.random() * (4 - 2) + 2)*5;
}

function dateBack() {
    var partenza = String(document.getElementById("partenza").value);
    var ritorno = String(document.getElementById("ritorno").value);
    var minOneway = Math.ceil(1);
    var maxOneway = Math.floor(4);
    var pricetag1 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag2 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag3 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag4 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var giornoRicerca = parseInt(document.getElementById("giorno-ricerca").innerText);
    var mesePartenzaInt = parseInt(partenza.slice(3, 5));

    console.log(mesePartenzaInt);
    
    switch (mesePartenzaInt) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (giornoRicerca == 2) {
                document.getElementById("left-date-button").style.opacity = 0.5;
                document.getElementById("left-date-button").style.cursor = "not-allowed";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
            } else if (giornoRicerca == 1) {
                void(0);
            } else if (giornoRicerca == 31) {
                document.getElementById("right-date-button").style.opacity = 1;
                document.getElementById("right-date-button").style.cursor = "pointer";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
            } else {
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
                if (document.getElementById("checkbox-ar").checked) {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                } else {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                }
            }
            break;
        case 2:
            if (giornoRicerca == 2) {
                document.getElementById("left-date-button").style.opacity = 0.5;
                document.getElementById("left-date-button").style.cursor = "not-allowed";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
            } else if (giornoRicerca == 1) {
                void(0);
            } else if (giornoRicerca == 28) {
                document.getElementById("right-date-button").style.opacity = 1;
                document.getElementById("right-date-button").style.cursor = "pointer";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
            } else {
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
                if (document.getElementById("checkbox-ar").checked) {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                } else {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (giornoRicerca == 2) {
                document.getElementById("left-date-button").style.opacity = 0.5;
                document.getElementById("left-date-button").style.cursor = "not-allowed";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
            } else if (giornoRicerca == 1) {
                void(0);
            } else if (giornoRicerca == 30) {
                document.getElementById("right-date-button").style.opacity = 1;
                document.getElementById("right-date-button").style.cursor = "pointer";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
            } else {
                document.getElementById("giorno-ricerca").innerText = giornoRicerca - 1;
                if (document.getElementById("checkbox-ar").checked) {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                } else {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                }
            }
            break;
    }
}

function dateForward() {
    var partenza = String(document.getElementById("partenza").value);
    var ritorno = String(document.getElementById("ritorno").value);
    var minOneway = Math.ceil(1);
    var maxOneway = Math.floor(4);
    var pricetag1 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag2 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag3 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var pricetag4 = Math.floor(Math.random() * (maxOneway - minOneway + 1)) + minOneway;
    var giornoRicerca = parseInt(document.getElementById("giorno-ricerca").innerText);
    var mesePartenzaInt = parseInt(partenza.slice(3, 5));

    console.log(mesePartenzaInt);
    
    switch (mesePartenzaInt) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (giornoRicerca == 30) {
                document.getElementById("right-date-button").style.opacity = 0.5;
                document.getElementById("right-date-button").style.cursor = "not-allowed";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
            } else if (giornoRicerca == 31) {
                void(0);
            } else if (giornoRicerca == 1) {
                document.getElementById("left-date-button").style.opacity = 1;
                document.getElementById("left-date-button").style.cursor = "pointer";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
            } else {
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
                if (document.getElementById("checkbox-ar").checked) {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                } else {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                }
            }
            break;
        case 2:
            if (giornoRicerca == 27) {
                document.getElementById("right-date-button").style.opacity = 0.5;
                document.getElementById("right-date-button").style.cursor = "not-allowed";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
            } else if (giornoRicerca == 28) {
                void(0);
            } else if (giornoRicerca == 1) {
                document.getElementById("left-date-button").style.opacity = 1;
                document.getElementById("left-date-button").style.cursor = "pointer";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
            } else {
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
                if (document.getElementById("checkbox-ar").checked) {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                } else {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (giornoRicerca == 29) {
                document.getElementById("right-date-button").style.opacity = 0.5;
                document.getElementById("right-date-button").style.cursor = "not-allowed";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
            } else if (giornoRicerca == 30) {
                void(0);
            } else if (giornoRicerca == 1) {
                document.getElementById("left-date-button").style.opacity = 1;
                document.getElementById("left-date-button").style.cursor = "pointer";
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
            } else {
                document.getElementById("giorno-ricerca").innerText = giornoRicerca + 1;
                if (document.getElementById("checkbox-ar").checked) {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                } else {
                    document.getElementById("pricetag1").innerText = pricetag1*5-0.01;
                    document.getElementById("pricetag2").innerText = pricetag2*5-0.01;
                    document.getElementById("pricetag3").innerText = pricetag3*5-0.01;
                    document.getElementById("pricetag4").innerText = pricetag4*5-0.01;
                }
            }
            break;
    }
}