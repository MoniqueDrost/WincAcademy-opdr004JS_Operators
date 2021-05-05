/* testblok
const age = 15;
const isFemale = false;
const driverStatus = "niet de bob";
const myName = "Bram";
const totalAmount = 65;
 */

/* testblok
const age = 23;
const isFemale = true;
const driverStatus = "bob";
const myName = "Piet";
const totalAmount = 23;
 */

const age = 36;
const isFemale = true;
const driverStatus = "bob";
const myName = "Sarah";
const totalAmount = 150;


if (age >= 18) {
    console.log("Welkom, je mag binnen komen");

} else {
    console.log("Helaas, je mag hier niet naar binnen");
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Sorry, de korting geldt niet voor jou");
}

if (isFemale) {
    console.log("Gefeliciteerd, je mag een kaartje kopen")
} else {
    console.log("Helaas, deze avond is alleen voor vrouwen")
}

if (driverStatus == "bob") {
    console.log("Jij mag naar huis rijden")
} else {
    console.log("Sorry, jij moet een taxi bellen")
}

if (myName == "Bram" || myName == "Sarah") {
    console.log("Je krijgt een biertje van het huis!")
} else {
    console.log("Sorry, jij krijg geen gratis drankje")
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Je krijgt gratis (vega)bitterballen");
} else if (totalAmount > 50 && totalAmount <= 100) {
    console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount > 100) {
    console.log("Je krijgt een gratis flesje champagne");
} else {
    console.log("Helaas geen gratis eten voor jou");
}