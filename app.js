let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro", "tokyo"];
console.log(citiesId);

//citiesId = [];

function getWeather(cityId) {
    var city = cityId.toUpperCase();
    var temperature = 20;
    return {
        city,
        temperature
    };
}

const weather = getWeather(favoriteCityId);

console.log(weather);
console.log(weather.city);
console.log(weather.temperature);

let [parisId, nycId, ...othersCitiesId] = citiesId;

console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    getDefaultTrip(){
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }


    toString() {
        return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price + ']';
    }
}

let parisTrip = new Trip('paris', 'paris', 'img/paris.jpg');
console.log(parisTrip);
console.log(parisTrip.name);

console.log(parisTrip.toString());

parisTrip.price = 100;
console.log(parisTrip.toString());

const defaultTrip = parisTrip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

    toString() {
        return 'Free' + super.toString();
    }
}

const freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log(freeTrip.toString());