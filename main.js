var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 5000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CylinderGeometry(1,.0,5,32,1, false);
var material = new THREE.MeshPhongMaterial({color: 0xcfc2c2AA, side:THREE.DoubleSide});
var cone = new THREE.Mesh(geometry, material);
scene.add(cone);

// create a point light
var pointLight = new THREE.PointLight( 0xFFFF8F );

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);
    

camera.position.z = 10;

var render = function () {
  requestAnimationFrame(render);

  cone.rotation.x += 0.001;
  cone.rotation.y += 0.001;
  cone.rotation.z -= 0.002;

  renderer.render(scene, camera);
};

render();