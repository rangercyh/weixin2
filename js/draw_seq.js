import * as Const from './const'
// import Matter from './libs/matter'
import Box2D from './libs/Box2D'


let ctx = canvas.getContext('2d')

let instance

let b2Vec2 = Box2D.Common.Math.b2Vec2;
let b2BodyDef = Box2D.Dynamics.b2BodyDef;
let b2Body = Box2D.Dynamics.b2Body;
let b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
let b2Fixture = Box2D.Dynamics.b2Fixture;
let b2World = Box2D.Dynamics.b2World;
let b2MassData = Box2D.Collision.Shapes.b2MassData;
let b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
let b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
let b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

// let Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Body = Matter.Body,
//     Composites = Matter.Composites,
//     Common = Matter.Common,
//     Constraint = Matter.Constraint,
//     MouseConstraint = Matter.MouseConstraint,
//     Mouse = Matter.Mouse,
//     World = Matter.World,
//     Bodies = Matter.Bodies;

// let engine = Engine.create({
//         enableSleeping: true,
//     })
// let world = engine.world
// let options = {
//     width: canvas.width,
//     height: canvas.height,
//     showVelocity: true,
//     enabled: true,
//     background: 'aquamarine',
//     wireframeBackground: 'aquamarine',
// }
// let render = Render.create({
//     canvas: canvas,
//     engine: engine,
//     options: options,
// })
let gravity = new b2Vec2(0, 9.8)
let world = new b2World(gravity, true)

let w = canvas.width
let h = canvas.height
let line_w = 25

let test_world = function() {
    // // add bodies
    // var group = Body.nextGroup(true),
    //     particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: false }},
    //     constraintOptions = { stiffness: 0.06 },
    //     cloth = Composites.softBody(200, 200, 20, 12, 5, 5, false, 8, particleOptions, constraintOptions);

    // for (var i = 0; i < 20; i++) {
    //     cloth.bodies[i].isStatic = true;
    // }

    // World.add(world, [
    //     cloth,
    //     Bodies.circle(300, 500, 80, { isStatic: true }),
    //     Bodies.rectangle(500, 480, 80, 80, { isStatic: true }),
    //     Bodies.rectangle(400, 609, 800, 50, { isStatic: true })
    // ]);
    // // let ball = Bodies.circle(w/2, line_w*4, 25, {
    // //     density: 0.68, // 密度
    // //     restitution: 0.8 // 弹性
    // // });
    // // World.add(world, ball)

    // // // add mouse control
    // // let mouse = Mouse.create(render.canvas)
    // // let mouseConstraint = MouseConstraint.create(engine, {
    // //     mouse: mouse,
    // //     constraint: {
    // //         stiffness: 0.2,
    // //         render: {
    // //             visible: false,
    // //         }
    // //     }
    // // })
    // // World.add(world, mouseConstraint)
    // // render.mouse = mouse

    // // console.log(w, h)
    // // World.add(world, [
    // //     // walls
    // //     Bodies.rectangle(w/2, line_w/2, w, line_w, { isStatic: true }),
    // //     Bodies.rectangle(line_w/2, h/2, line_w, h, { isStatic: true }),
    // //     Bodies.rectangle(w/2, h-line_w/2, w, line_w, { isStatic: true }),
    // //     Bodies.rectangle(w-line_w/2, h/2, line_w, h, { isStatic: true })
    // // ]);

    // Engine.run(engine)

    // // (function(render) {
    // //     (function loop(time){
    // //         render.frameRequestId = window.requestAnimationFrame(loop);
    // //         Render.world(render);
    // //     })();
    // // })(render);
    // Render.run(render)
}

/**
 * 界面绘图器
 */
let lastFrame = new Date().getTime()
export default class DrawSeq {
    constructor() {
        if (instance) {
            return instance
        }

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
        var tm = new Date().getTime()
        var dt = (tm - lastFrame) / 1000
        if (dt > 1/15) { dt = 1/15; }
        world.Step(dt)
        lastFrame = tm
    }

    draw(databus) {

    }
}
