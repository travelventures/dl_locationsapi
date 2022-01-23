class Geo {

    constructor(lat, lon, city, country, countryCode) {
        this.lat = lat;
        this.lon = lon;
        this.city = city;
        this.country = country;
        this.countryCode = countryCode;
    }

    setLocationLat() {
        this.lat = lat;
    }
    
    getLocationLat() {
        return this.lat;
    }

    setLocationLon() {
        this.lon = lon;
    }

    getLocationLon() {
        return this.lon;
    }

    setLocationCity() {
        this.city = city;
    }

    getLocationCity() {
        return this.city;
    }

    setLocationCountry() {
        this.country = country;
    }

    getLocationCountry() {
        return this.country;
    }

    setLocationCountryCode() {
        this.countryCode = countryCode;
    }

    getLocationCountryCode() {
        return this.countryCode;
    }
}
export const geo = Geo;