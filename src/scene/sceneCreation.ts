import { FreeCamera, Vector3, HemisphericLight, MeshBuilder, Scene, Color4 } from "@babylonjs/core";
let box : any
export function createScene(scene: Scene) :void {
  scene.clearColor = new Color4(0, 0, 0, 0);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
}