// import { checkinSelector } from "./filter.js";
// import { checkoutSelector } from "./filter.js";

export const todayValue = new Date();

function zeroPrinter(dateValue) {
    const text = "" + dateValue;
    if (text.length == 1) {
        return "0" + dateValue;
    } else {
        return dateValue;
    }
}

export function checkinDateStart() {
    return (
        todayValue.getFullYear() +
        "-" +
        zeroPrinter(todayValue.getMonth() + 1) +
        "-" +
        zeroPrinter(todayValue.getDate())
    );
}

export function checkoutDateStart() {
    return (
        todayValue.getFullYear() +
        "-" +
        zeroPrinter(todayValue.getMonth() + 1) +
        "-" +
        zeroPrinter(todayValue.getDate() + 1)
    );
}

// checkinSelector.setAttribute("min", checkinDateStart());
// checkinSelector.setAttribute("value", checkinDateStart());
// checkoutSelector.setAttribute("min", checkoutDateStart());
// checkoutSelector.setAttribute("value", checkoutDateStart());
