
      let scene = new THREE.Scene()

			let camera = new THREE.PerspectiveCamera(40, window.innerWidth/ window.innerHeight, 1,1000 );

			camera.position.x = 30;
			camera.position.y = 100;
			camera.position.z = 10;



			let geometry = new THREE.CubeGeometry( 1000, 1000, 1000)

			let cubeMaterials =
			[
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_bk.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_dn.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_up.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_lf.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_rt.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_ft.jpg'), side: THREE.DoubleSide}),
			];

			let cube=new THREE.Mesh( geometry, cubeMaterials);


			scene.add(cube)


			let controls_phone = new THREE.DeviceOrientationControls(camera, true);

			let hlight = 	new THREE.AmbientLight('0x404040',1)

		 	scene.add(hlight)
		 	let renderer = new THREE.WebGLRenderer()

		 	renderer.setSize( window.innerWidth, window.innerHeight )
		 	document.body.appendChild( renderer.domElement )
			let controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.minDistance = 10;
      controls.maxDistance = 200;


			 /*
			controls_phone.connect();
*/


			controls.addEventListener('change', renderer);
			let loader = new THREE.GLTFLoader();
			let satellite
			let satellite2
      let satellite3
			let poubelle
			let yui
			let toilette
      let debris1
      let rocket
      let rock




			loader.load('images/sat1/sat1.gltf', function(gltf){
			satellite = gltf.scene;
			satellite.position.set(-50, -35, 10);
			scene.add(satellite);
			animate();
})
			loader.load('images/sat2/sat2.gltf', function(gltf){
			satellite2 = gltf.scene;
      gltf.scene.scale.set(2,2,2)
			satellite2.position.set(-40, -35, -50);
			scene.add(satellite2);
			animate();
			})
      loader.load('images/sat3/scene.gltf', function(gltf){
      satellite3 = gltf.scene;
      gltf.scene.scale.set(0.2,0.2,0.2)
      satellite3.position.set(-45, 0, -350);
      scene.add(satellite3);
      animate();
      })



			loader.load('images/toilette/toilette.gltf', function(gltf){
			toilette = gltf.scene;
			toilette.position.set(0, 5, 5);
			scene.add(toilette);
			animate();
			})

			loader.load('images/yui/scene.gltf', function(gltf){
			yui = gltf.scene;
			yui.position.set(10, 2, 15);
			scene.add(yui);
			animate();
			})

      loader.load('images/debris1/debris1.gltf', function(gltf){
      debris1 = gltf.scene;
      debris1.position.set(5, 5 , -25);
      scene.add(debris1);
      animate();
      })

      loader.load('images/rocket_engine/scene.gltf', function(gltf){
      rocket = gltf.scene;
      rocket.position.set(10, 10 , 0);
      scene.add(rocket);
      animate();
      })





function animate() {
				if (satellite) satellite.rotation.x += 0.0005;
				if (satellite2) satellite2.rotation.x += 0.0007;
				if (toilette) toilette.rotation.x += 0.005;
				if (yui) yui.rotation.y += 0.0005;
				if (yui) yui.rotation.x += 0.0007;
        if (debris1) debris1.rotation.y += 0.0005;
        if (debris1) debris1.rotation.x += 0.0009;
        if (rocket)rocket.rotation.y += 0.0005;
        if (rocket)rocket.rotation.x += 0.0006;
        if (satellite3)satellite3.rotation.y += 0.0001;
        if (satellite3)satellite3.rotation.x += 0.0003;









			 renderer.render(scene,camera);
			 requestAnimationFrame(animate);

			 /*
			controls_phone.update()
*/
		 }
