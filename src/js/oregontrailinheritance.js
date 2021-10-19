class Hunter extends Traveler {
    constructor (name, isHealthy) {
        super (name, isHealthy)
        this.qtfood = 2
    }

    hunt = () => {
        return this.qtfood += 5
    }

    eat = () => {
        if (this.qtfood > 1) {
            this.qtfood -= 2
        } else if(this.qtfood === 1) {
            this.qtfood--
            this.isHealthy = false
        }
    }

    giveFood = (traveler, numOfFoodUnits) => {
        if (this.qtfood >= numOfFoodUnits) {
            this.qtfood -= numOfFoodUnits
            traveler.qtfood += numOfFoodUnits
        } else {
            return `${this.name} not have ${numOfFoodUnits} food`
        }
    }
}

class Doctor extends Traveler {
    constructor (name, qt, isHealthy) {
        super (name, qt, isHealthy)
    }

     heal = (viajante) => {
        return viajante.isHealthy = true
     }
}