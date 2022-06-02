import { filterId } from "./tools/filter.js";
import { printHotels } from "./tools/printer.js";
// import { hotelDescription } from "./tools/hover.js";

filterId("country");
filterId("checkin");
filterId("checkout");
filterId("prices");
filterId("sizes");

const clearBtn = document
    .getElementById("clear")
    .addEventListener("click", () => {
        printHotels();
    });
printHotels();

//! zona de pruebas---------------descomentar para continuar--------------------------
import { todayValue } from "./tools/dateInput.js";
import { checkinSelector } from "./tools/filter.js";

const test = document
    .getElementById("checkin")
    .addEventListener("change", () => {
        if (todayValue <= checkinSelector.value) {
            console.log("holi");
        }
    });

//! zona de pruebas-----------------------------------------

// hotelDescription();
