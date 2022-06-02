//! Icono bandera
export function bandera(country) {
    if (country == "Argentina") {
        return `./resources/flags/argentina.svg`;
    }
    if (country == "Brasil") {
        return `./resources/flags/brasil.svg`;
    }
    if (country == "Chile") {
        return `./resources/flags/chile.svg`;
    }
    if (country == "Uruguay") {
        return `./resources/flags/uruguay.svg`;
    }
}

//! DarkMode
const darkModeBtn = document.getElementById("darkModeBtn");
const filtros = document.getElementById("filterzone");
const body = document.getElementById("body");
darkModeBtn.onclick = function () {
    filtros.classList.toggle("darkMode");
    body.classList.toggle("darkMode");
    body.classList.toggle("darkModeBG");
};

//! Hide Button
const hideBtn = document.getElementById("hideBtn");
const filters = document.getElementById("formfilters");
hideBtn.addEventListener("click", () => {
    filters.classList.toggle("hidder");
    filtros.classList.toggle("hidder");
});

//! Filtro de fechas
