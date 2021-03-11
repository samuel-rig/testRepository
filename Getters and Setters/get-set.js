const data = {
    locations: [],
    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

//code that usses the data object
data.location = 'SLP   '
data.location = 'Mexico  '
console.log(data)