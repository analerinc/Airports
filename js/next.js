
const dest1 = {
    "name": "beograd",
    "price": 1500,
    "type": "ordinary"
};

const dest2 = {
    "name": "vienna",
    "price": 2500,
    "type": "ordinary"
};

const dest3 = {
    "name": "budapest",
    "price": 1800,
    "type": "ordinary"
};

const dest4 = {
    "name": "london",
    "price": 3500,
    "type": "silver"
};

const dest5 = {
    "name": "madrid",
    "price": 1500,
    "type": "silver"
};

const dest6 = {
    "name": "moscow",
    "price": 3500,
    "type": "gold"
};

const dest7 = {
    "name": "rome",
    "price": 3900,
    "type": "gold"
};

const dest8 = {
    "name": "Tokyo",
    "price": 4500,
    "type": "platinum"
};

const dest9 = {
    "name": "new york",
    "price": 4800,
    "type": "platinum"
};

const destinations = [
    dest1,
    dest2,
    dest3,
    dest4,
    dest5,
    dest6,
    dest7,
    dest8,
    dest9,
];


window.onload = function () {
    const splitovano = window.location.search.substr(1).split("&");
    const recnik = {};

    for (const elem of splitovano) {
        const podeljeno = elem.split("=");
        recnik[podeljeno[0]] = podeljeno[1];
    }

    document.getElementById("welcome_user").innerText = `Hello, ${recnik.ime} ${recnik.prezime}`;


    const premiumMember = document.getElementById("premium_member");

    if (recnik.status === "Premium") {
        if (recnik.klasa === "1") {
            premiumMember.innerText = "You are our premium member, with Silver membership!"
            ponudiDestinacije(["ordinary", "silver"]);
        } else if (recnik.klasa === "2") {
            premiumMember.innerText = "You are our premium member, with Gold membership!"
            ponudiDestinacije(["ordinary", "silver", "gold"]);
        } else if (recnik.klasa === "3") {
            premiumMember.innerText = "You are our premium member, with Platinum membership!"
            ponudiDestinacije(["ordinary", "silver", "gold", "platinum"]);

        }
    } else {
        ponudiDestinacije(["ordinary"]);
    }
};

function ponudiDestinacije(tipovi) {
    const destinacije = destinations.filter(elem => tipovi.includes(elem.type));
    const sel1 = document.getElementById("sel1");

    for (const elem of destinacije) {
        sel1.options[sel1.options.length] = new Option(elem.name, elem.name);
    }

}

function calculate() {
    const sel1 = document.getElementById("sel1");
    const destination = destinations.filter(elem => elem.name === sel1.value)[0];

    document.getElementById("paragraph").innerText = `Price for your selected destination is ${destination.price}.`
}
