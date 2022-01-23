class Location {

    constructor(_Id, type, name, category, created, updated, rating, geo) {
        this._Id = _Id;
        this.type = type;
        this.name = name;
        this.category = category;
        this.created = created;
        this.updated = updated;
        this.rating = rating;
        this.geo = geo
    }

    setLocationId() {
        this._Id = _Id;
    }

    getLocationId() {
        return this._Id;
    }

    setLocationType() {
        this.type = type;
    }

    getLocationType() {
        return this.type;
    }

    setLocationName() {
        this.name = name;
    }

    getLocationName() {
        return this.name;
    }

    setLocationCategory() {
        this.category = category;
    }

    getLocationCategory() {
        return this.category;
    }

    setLocationCreated() {
        this.created = created;
    }

    getLocationCreated() {
        return this.created;
    }

    setLocationUpdated() {
        this.updated = updated;
    }

    getLocationUpdated() {
        return this.updated;
    }

    setLocationRating() {
        this.rating = rating;
    }

    getLocationRating() {
        return this.rating
    }

    setLocationGeo() {
        this.geo = geo;
    }

    getLocationGeo() {
        return this.geo
    }
}
export const location = Location;