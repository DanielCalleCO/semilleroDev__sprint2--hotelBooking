export const hotelsInfo = async () => {
    const respuesta = await fetch(
        "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
    );
    const data = await respuesta.json();
    return data;
};
hotelsInfo();
