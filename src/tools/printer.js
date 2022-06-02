import { bandera } from "./others.js";
import { hotelsFilter } from "./filter.js";

export function printHotels() {
    hotelsFilter();
    hotelsSection.innerHTML = ``;
    const cardPrinter = async () => {
        const hotelsData = await hotelsFilter();

        hotelsData.forEach((element) => {
            function budget() {
                if (element.price == 1) {
                    return "$";
                }
                if (element.price == 2) {
                    return "$$";
                }
                if (element.price == 3) {
                    return "$$$";
                }
                if (element.price == 4) {
                    return "$$$$";
                }
            }
            const hotelCard = document.createElement("div");
            hotelsSection.appendChild(hotelCard);
            hotelCard.setAttribute("class", "main__cards--hotelCard");
            hotelCard.innerHTML = `
            <img class="cards__img" src="${element.photo}" alt="Foto de ${
                element.name
            }"/>
            <div class="cards__shadow">
            <div class="cards__info">
            <div class="cards__shadow2">
                <div class="cards__info2">

                </div>
            </div>
            <h2 class="cards__info--title">${element.name}</h2>
            <button class="cards__info--plusBtn">+</button>
            <div class="cards__info--country">
            <img class="country__icon" src=${bandera(element.country)} />  ${
                element.country
            }</div>
                            <div class="cards__info--rooms">${
                                element.rooms
                            } rooms</div>-
                            <div class="cards__info--price">${budget()}</div>
                            <button class="cards__info--bookitBtn">Book it!</button>
                            </div>
                            </div>
                            `;
        });
    };
    cardPrinter();
}
