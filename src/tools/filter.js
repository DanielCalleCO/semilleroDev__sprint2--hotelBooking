import { hotelsInfo } from "./acquisitor.js";
import { printHotels } from "./printer.js";
import { checkinDateStart } from "./dateInput.js";
import { checkoutDateStart } from "./dateInput.js";
// import { todayValue } from "./dateInput.js";

const countriesSelector = document.getElementById("country");
export const checkinSelector = document.getElementById("checkin");
export const checkoutSelector = document.getElementById("checkout");
const pricesSelector = document.getElementById("prices");
const sizesSelector = document.getElementById("sizes");

checkinSelector.setAttribute("min", checkinDateStart());
checkinSelector.setAttribute("value", checkinDateStart());
checkoutSelector.setAttribute("min", checkoutDateStart());
checkoutSelector.setAttribute("value", checkoutDateStart());

export function filterId(filtro) {
    return document.getElementById(filtro).addEventListener("change", () => {
        printHotels();
    });
}

export const hotelsFilter = async (element) => {
    const hotelsData = await hotelsInfo();
    return hotelsData
        .filter((element) => {
            if (countriesSelector.value != "None") {
                return element.country === countriesSelector.value;
            } else {
                return element.country;
            }
        })
        .filter((element) => {
            if (pricesSelector.value != "None") {
                return element.price == pricesSelector.value;
            } else {
                return element.price;
            }
        })
        .filter((element) => {
            if (sizesSelector.value != "None") {
                switch (sizesSelector.value) {
                    case "Small":
                        return parseInt(element.rooms) <= 10;
                        break;
                    case "Medium":
                        return (
                            parseInt(element.rooms) > 10 &&
                            parseInt(element.rooms) <= 28
                        );
                        break;
                    case "Large":
                        return parseInt(element.rooms) > 28;
                        break;
                }
            } else {
                return element.rooms;
            }
        });
    // .filter((element) => {
    //     if (todayValue <= checkinSelector.value) {
    //         return element.availabilityFrom;
    //         console.log("holi");
    //     }
    // });
};
