import './style.css'

import * as THREE from '/three';
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 0.1, 2000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(0);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(15, 2, 32, 100);
const material = new THREE.MeshStandardMaterial( { color: 0x301934, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

const geometry_2 = new THREE.TorusGeometry(12, 1, 32, 100);
const material_2 = new THREE.MeshStandardMaterial( { color: 0x8b0000, wireframe: true});
const torus_1 = new THREE.Mesh(geometry_2, material_2);


const logoTexture = new THREE.TextureLoader().load("py.png");
const pyLogo = new THREE.Mesh(
  new THREE.PlaneGeometry( 3, 3 ),
  new THREE.MeshStandardMaterial({
    map: logoTexture,
    side: THREE.DoubleSide
  })
);
pyLogo.position.z = 20;
pyLogo.position.x = 10;
pyLogo.position.y = 10;

const cssTexture = new THREE.TextureLoader().load("css.png");
const cssLogo = new THREE.Mesh(
  new THREE.PlaneGeometry( 3, 3 ),
  new THREE.MeshStandardMaterial({
    map: cssTexture,
    side: THREE.DoubleSide
  })
);
cssLogo.position.z = 25;
cssLogo.position.x = -15;
cssLogo.position.y = 10;

const jsTexture = new THREE.TextureLoader().load("js.png");
const jsLogo = new THREE.Mesh(
  new THREE.PlaneGeometry( 3, 3 ),
  new THREE.MeshStandardMaterial({
    map: jsTexture,
    side: THREE.DoubleSide
  })
);
jsLogo.position.z = 20;
jsLogo.position.x = -10;
jsLogo.position.y = -10;

const sunDepth = new THREE.TextureLoader().load("sund.jpg");
const sunMaterial = new THREE.TextureLoader().load("sun.png");
const icoLogo = new THREE.Mesh(
  new THREE.SphereGeometry( 2, 32, 32 ),
  new THREE.MeshBasicMaterial({
    map: sunMaterial,
    normalMap: sunDepth
  })
);
icoLogo.position.z = 0;
icoLogo.position.x = 0;
icoLogo.position.y = 0;

const tluTexture = new THREE.TextureLoader().load("tlu.png");
const tluLogo = new THREE.Mesh(
  new THREE.BoxGeometry( 3, 3, 3 ),
  new THREE.MeshStandardMaterial({
    map: tluTexture,
    side: THREE.DoubleSide
  })
);
tluLogo.position.z = 72;
tluLogo.position.x = 10;
tluLogo.position.y = 5;

const dtiTexture = new THREE.TextureLoader().load("dti.png");
const dtiLogo = new THREE.Mesh(
  new THREE.BoxGeometry( 2, 2, 2 ),
  new THREE.MeshStandardMaterial({
    map: dtiTexture,
    side: THREE.DoubleSide
  })
);
dtiLogo.position.z = 72;
dtiLogo.position.x = -4;
dtiLogo.position.y = 8;



const pointLight = new THREE.PointLight(0xF0F8Fe);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xFFFFFF);
const lightHelp = new THREE.PointLightHelper(pointLight);

const grid = new THREE.GridHelper(200, 50);

const earthTexture = new THREE.TextureLoader().load("earth.jpg");

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
  })
);

earth.position.z = 30;
earth.position.x = 10;

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load("space.jpg");
scene.background = spaceTexture;

scene.add(icoLogo);
scene.add(torus_1);
scene.add(dtiLogo);
scene.add(tluLogo);
scene.add(cssLogo);
scene.add(jsLogo);
scene.add(pyLogo);
scene.add(earth);
scene.add(torus);
scene.add(pointLight, ambientLight);



function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  console.log(t);

  camera.position.z = t * -0.0375;
  camera.position.x = t * -0.002;
  camera.position.y = t * -0.002;

}

document.body.onscroll = moveCamera;

function animate(){
  requestAnimationFrame( animate );

  earth.rotation.y += 0.004;

  pyLogo.rotation.y +=0.005;
  pyLogo.rotation.z +=0.001;

  tluLogo.rotation.y += 0.005;
  tluLogo.rotation.z += 0.0008;

  dtiLogo.rotation.y += 0.007;
  dtiLogo.rotation.z += 0.001;

  cssLogo.rotation.y +=0.005;
  cssLogo.rotation.z +=0.001;

  jsLogo.rotation.y +=0.005;
  jsLogo.rotation.z +=0.0005;
   
  torus.rotation.x += 0.008;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  torus_1.rotation.x -= 0.008;
  torus_1.rotation.y -= 0.01;
  torus_1.rotation.z -= 0.01;

  icoLogo.rotation.y -= 0.005;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}

animate();
