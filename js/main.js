import DataBus from './databus'
import * as Const from './const'

let databus = new DataBus()

let w = canvas.width
let h = canvas.height

export default class Main {
    constructor() {
        this.loop()
    }

    loop() {
        this.update()
        this.render()
        window.requestAnimationFrame(this.loop.bind(this), canvas)
    }

    update() {
        databus.update()
    }

    render() {
        databus.draw()
    }
}
