
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var renderSignal = new signals.Signal();

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

var raycaster = new THREE.Raycaster();

var canvas3d = $('canvas');
var width = canvas3d.innerWidth();
var height = canvas3d.innerHeight();
var mousePosition = new THREE.Vector2();

canvas3d.on('click', function(event) {
    var posX = canvas3d.offset().left;
    var posY = canvas3d.offset().top;
    mousePosition.x = 2.0*(event.pageX - posX)/width-1.0;
    mousePosition.y = -(2.0*(event.pageY - posY)/height-1.0);

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mousePosition, camera);

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children, true);
    if(intersects.length > 0) {
        var clickedObject = intersects[0];
        clickedObject.object.material.color.setRGB(0,0,1);
        // Now do something interesting with the clickedObject.
    }
});

var count=0;
setInterval(function(){
    console.log("count="+count);
    count++;
},5000);

var render = function () {
    requestAnimationFrame( render );

    renderSignal.dispatch();

    //for(var j=1; j<10; j++)  {
    //    var cube = scene.getObjectByName("cube"+j, true );
    //    cube.rotation.x += 0.01;
    //    cube.rotation.y += 0.01;
    //}
    renderer.render(scene, camera);
};

render();


