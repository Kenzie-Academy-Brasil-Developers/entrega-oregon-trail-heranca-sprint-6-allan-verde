class Doctor extends Traveler {
    constructor (name, qt, isHealthy) {
        super (name, qt, isHealthy)
    }

     heal = (viajante) => {
        return viajante.isHealthy = true
     }
}