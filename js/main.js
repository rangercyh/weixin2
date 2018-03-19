import DataBus from './databus'
import * as Const from './const'
// let Box2D = require('./libs/Box2D')

let databus = new DataBus()
// let b2Vec2 = Box2D.Common.Math.b2Vec2;
// let b2BodyDef = Box2D.Dynamics.b2BodyDef;
// let b2Body = Box2D.Dynamics.b2Body;
// let b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
// let b2Fixture = Box2D.Dynamics.b2Fixture;
// let b2World = Box2D.Dynamics.b2World;
// let b2MassData = Box2D.Collision.Shapes.b2MassData;
// let b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
// let b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
// let b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

// let gravity = new b2Vec2(0, 9.8)
// let world = new b2World(gravity, true)

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
        // world.Step(1/60, 8, 3)
    }

    render() {
        databus.draw()
    }
}
