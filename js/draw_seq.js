import * as Const from './const'
// import Matter from './libs/matter'
// import Box2D from './libs/Box2D'
import * as THREE from './libs/three.min'


let ctx = canvas.getContext('webgl')

let instance

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

var camera, scene, renderer;
var geometry, material, mesh;

let test_world = function() {
    camera = new THREE.PerspectiveCamera( 70, w / h, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true, context: ctx } );
    renderer.setSize( w, h );
    document.body.appendChild( renderer.domElement );
}

/**
 * 界面绘图器
 */
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
        // world.Step(1/60, 8, 3)
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        renderer.render( scene, camera );
    }

    draw(databus) {

    }
}
