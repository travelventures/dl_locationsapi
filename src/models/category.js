class Category {

    constructor(_Id, type, name, locations) {
        this._Id = _Id;
        this.type = type;
        this.name = name;
        this.locations = locations;
    }

    setCategoryId() {
        this._Id = _Id;
    }

    getCategoryId() {
        return this._Id;
    }

    setCategoryType() {
        this.type = type;
    }

    getCategoryType() {
        return this.type;
    }

    setCategoryName() {
        this.name = name;
    }

    getCategoryName() {
        return this.name;
    }

    setCategoryLocations() {
        this.locations = locations;
    }

    getCategoryLocations() {
        return this.locations;
    }
}
export const category = Category;