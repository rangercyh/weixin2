import * as Const from './const'
import DrawSeq from './draw_seq'
import * as Game from './game'

let drawseq = new DrawSeq()

let instance

let startX
let startY
let move_dir
/**
 * 全局状态管理器
 */
export default class DataBus {
    constructor() {
        if (instance) {
            return instance
        }

        instance = this
        this.reset()
        this.initEvent()
    }

    reset() {
        canvas.removeEventListener('touchstart', this.touchHandler)
        this.touchHandler = null
        this.frame = 0
        this.score = 0
        this.moving = 0
        this.moving_check = false
        drawseq.reset()

        console.log('game reset')
        drawseq.init()

        this.gameover = false
        wx.startAccelerometer()
    }

    btn_dispatch(x, y) {

    }

    touchEventHandler(e) {
        e.preventDefault()
        if (e.touches.length > 0) {
            let x = e.touches[0].clientX
            let y = e.touches[0].clientY
            this.btn_dispatch(x, y)
        }
    }

    update() {
        if (this.gameover) {
            if (!this.touchHandler) {
                this.game_over()
            }
            return
        }
        this.frame++
        Game.game_update(this)
        drawseq.update(this.score)
        if (this.slide_mark) {
            this.slide_down(this.slide_all)
            this.slide_mark = false
            this.slide_all = false
        }
    }

    draw() {
        drawseq.draw(this)
    }

    initEvent() {
        canvas.addEventListener('touchstart', ((e) => {
            if (this.gameover) {
                return
            }
            e.preventDefault()
            if (!this.moving && e.touches.length == 1) {
                let x = e.touches[0].clientX
                let y = e.touches[0].clientY
                if (Const.check_in_screen(x, y)) {
                    move_dir = null
                    startX = x
                    startY = y
                } else {
                    this.btn_dispatch(x, y)
                }
            }
        }).bind(this))

        canvas.addEventListener('touchmove', ((e) => {
            if (this.gameover) {
                return
            }
            e.preventDefault()
            if (startX && startY && e.touches.length == 1) {
                let x = e.touches[0].clientX
                let y = e.touches[0].clientY
                if (Const.check_in_screen(x, y)) {
                    let diffX = x - startX
                    let diffY = y - startY
                    if (Math.abs(diffX) > Math.abs(diffY) && diffX > 0) {
                        move_dir = Const.MOVING_RIGHT
                    }
                    if (Math.abs(diffX) > Math.abs(diffY) && diffX < 0) {
                        move_dir = Const.MOVING_LEFT
                    }
                    if (Math.abs(diffX) < Math.abs(diffY) && diffY > 0) {
                        move_dir = Const.MOVING_DOWN
                    }
                    if (Math.abs(diffX) < Math.abs(diffY) && diffY < 0) {
                    }
                }
            }
        }).bind(this))

        canvas.addEventListener('touchend', ((e) => {
            if (this.gameover) {
                return
            }
            e.preventDefault()
            if (startX && startY && e.touches.length <= 0) {
                startX = null
                startY = null
                if (!this.gameover && !this.moving) {
                    if (move_dir) {
                        Game.move_effect(this, move_dir)
                    } else {
                        // 变化pre方块
                        // Game.change_pre_squares()
                    }
                }
            }
        }).bind(this))

    }

    lock_moving(arrow) {
        this.moving = arrow
        this.moving_check = true
    }
    unlock_moving() {
        this.moving = 0
        this.moving_check = false
    }
    game_over() {
        console.log('gameover')
        wx.stopAccelerometer()
        this.touchHandler = this.touchEventHandler.bind(this)
        canvas.addEventListener('touchstart', this.touchHandler)
    }
    add_score(score) {
        this.score += score
        console.log('add score = ', score)
    }
}
