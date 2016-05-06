
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//var geometry = new THREE.BoxGeometry( 9, 9, 9 );
////var material = new THREE.MeshPhongMaterial( { color: 0xff55ff } );
//var material = new THREE.MeshLambertMaterial({color: 0xff55ff, transparent: true, opacity: 0.3});
//var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );
//
//var geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
//var material2 = new THREE.MeshPhongMaterial( { color: 0xff99ff } );
//var cube2 = new THREE.Mesh( geometry2, material2 );
//scene.add( cube2 );
//cube2.position.x=2;
//
//var geometry3 = new THREE.BoxGeometry( 1, 1, 1 );
//var material3 = new THREE.MeshPhongMaterial( { color: 0xffffff } );
//var cube3 = new THREE.Mesh( geometry3, material3 );
//scene.add( cube3 );
//cube3.position.x=-2;

console.log(1);
console.log(2);
var x=0.0;

for(var i=1; i<10; i++){
    var name="cube"+i;
    x=x+2;
    console.log(name) ;
    var geometry = new THREE.BoxGeometry( 1+0.7*i,1,1 );
    var colorValue = 0x220000*i;
    if (i==1) {
        colorValue=0xff0000
    }
    else if (i==2) {
        colorValue=0xff8000
    }
    else if (i==3) {
        colorValue=0xffff00
    }
    else if (i==4) {
        colorValue=0x00ff00
    }


    //if(i<4) {
    //    colorValue=0x00ff00;
    //} else if (i>6) {
    //    colorValue=0x0000ff
    //}
    var material = new THREE.MeshLambertMaterial({color: colorValue, transparent:false, opacity: 1});
    var cube = new THREE.Mesh( geometry, material );
    cube.position.x=x-9;
    cube.position.y=0;
    cube.name=name;
    scene.add( cube );
}

camera.position.z = 15;

addLights();

function addLights() {
    var dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(100, 100, 50);
    scene.add(dirLight);
    var ambLight = new THREE.AmbientLight(0xffffffffffffff);
    scene.add(ambLight);
};

var render = function () {
    requestAnimationFrame( render );

    for(var j=1; j<10; j++)  {
        var cube = scene.getObjectByName("cube"+j, true );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
    //cube2.rotation.x += 0.01;
    //cube2.rotation.y += 0.01;
    //cube3.rotation.x += 0.01;
    //cube3.rotation.y += 0.01;


    renderer.render(scene, camera);
};

render();


