import DrawSeq from './draw_seq'
import * as Const from './const'
import Chance from './libs/chance'

let chance = new Chance()
let drawseq = new DrawSeq()

export function move_effect(databus, move_dir) {
    console.log('方向：', move_dir)

}

export function game_update(databus) {
    return true
}
