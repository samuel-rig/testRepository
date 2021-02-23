let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvaibility: function(partySize){
        let seatLeft = this.guestCapacity - this.guestCount;
        return partySize <=seatLeft;
    },
    seatParty: function(seat){
        this.guestCount = this.guestCount + seat;
    },
    removeParty: function(seat){
        this.guestCount = this.guestCount - seat;
    }
}

restaurant.seatParty(72);
console.log(restaurant.checkAvaibility(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvaibility(4));