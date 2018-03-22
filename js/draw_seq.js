import * as Const from './const'
// import Matter from './libs/matter'
import * as THREE from './libs/three.min'

let ctx = canvas.getContext('webgl')

let instance

let w = canvas.width
let h = canvas.height

let test_world = function() {

}



/**
 * 界面绘图器
 */
export default class DrawSeq {
    constructor() {
        if (instance) {
            return instance
        }

        this.camera = new THREE.PerspectiveCamera(70, w/h, 0.01, 10)
        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer({ context: ctx })
        this.renderer.setSize(w/2, h/2, false)
        document.body.appendChild(this.renderer.domElement)
        instance = this
        this.reset()
    }

    reset() {
        this.score = 0
    }
    init() {
        test_world()
    }

    dump() {

    }

    update(score) {
        this.score = score
        this.renderer.render(this.scene, this.camera)
    }

    draw(databus) {

    }
}
