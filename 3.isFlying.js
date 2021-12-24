/*Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
If a plane takes off, its isFlying property is set to true.
If a plane lands, its isFlying property is set to false.*/


const Airplane = {
    name : "Boeing",
    isFlying : false,
    takeoff : () => {
        this.isFlying = true,
        console.log(`${this.isFlying}`)
    },
    land : () => {
        this.isFlying = false,
        console.log(`${this.isFlying}`)
    },
};

Airplane.land()