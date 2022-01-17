class Geo {

    constructor (lat, lon, city, country, countryCode){
        this.lat = lat;
        this.lon = lon;
        this.city = city;
        this.country = country;
        this.countryCode = countryCode;
    }

    getLocationLat() {
        this.lat = lat;
    }
    
    setLocationLat() {
        return this.lat;
    }

    getLocationLon() {
        this.lon = lon;
    }

    setLocationLon() {
        return this.lon;
    }

    getLocationCity() {
        this.city = city;
    }

    setLocationCity() {
        return this.city;
    }

    getLocationCountry() {
        this.country = country;
    }

    setLocationCountry() {
        return this.country;
    }

    getLocationCountryCode() {
        this.countryCode = countryCode;
    }

    setLocationCountryCode() {
        return this.countryCode;
    }
}
module.exports.geo = Geo;