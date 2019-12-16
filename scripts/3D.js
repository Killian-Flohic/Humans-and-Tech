
      let scene = new THREE.Scene()

			let camera = new THREE.PerspectiveCamera(40, window.innerWidth/ window.innerHeight, 1,1000 );

			camera.position.x = 0;
			camera.position.y = 0;
			camera.position.z = 10;

			let geometry = new THREE.CubeGeometry( 1000, 1000, 1000)

			let cubeMaterials =
			[
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_bk.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_dn.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_ft.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_lf.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_rt.JPG'), side: THREE.DoubleSide}),
				new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('images/cwd_up.JPG'), side: THREE.DoubleSide}),
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

			controls_phone.connect();



			controls.addEventListener('change', renderer);
			let loader = new THREE.GLTFLoader();
			let satellite;
			let satellite2;
			let poubelle;
			let yui
			let toilette




			loader.load('images/sat1/sat1.gltf', function(gltf){
			satellite = gltf.scene;
			satellite.position.set(100, 100, 10);
			scene.add(satellite);
			animate();
})
			loader.load('images/sat2/sat2.gltf', function(gltf){
			satellite2 = gltf.scene;
			satellite2.position.set(40, 100, 100);
			scene.add(satellite2);
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




function animate() {
				if (satellite) satellite.rotation.x += 0.001;
				if (satellite2) satellite2.rotation.x += 0.005;
				if (toilette) toilette.rotation.x += 0.01;
				if (yui) yui.rotation.y += 0.01;
				if (yui) yui.rotation.x += 0.05;


			 renderer.render(scene,camera);
			 requestAnimationFrame(animate);


			controls_phone.update()

		 }
