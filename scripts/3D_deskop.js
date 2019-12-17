
      let scene = new THREE.Scene()

			let camera = new THREE.PerspectiveCamera(40, window.innerWidth/ window.innerHeight, 1,1000 );

			camera.position.x = 30;
			camera.position.y = 100;
			camera.position.z = 10;

/*
      camera.position.x = 100;
      camera.position.y = 100;
      camera.position.z = 100;
*/


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



			let loader = new THREE.GLTFLoader();
			let satellite
			let satellite2
      let satellite3
      let satellite3_1
      let satellite3_2
      let debris1
      let rocket
      let rocket_2
      let rocket_3
      let rocket_4
      let rocket_7
      let rocket_8
      let door
      let doorv4
      let doorv4_2
      let doorv4_3
      let doorv4_4
      let doorv4_5
      let doorv4_6
      let fusee




			loader.load('images/sat1/sat1.gltf', function(gltf){
			satellite = gltf.scene;
			satellite.position.set(-300, 0, -400);
			scene.add(satellite);
			animate();
      })
			loader.load('images/sat2/sat2.gltf', function(gltf){
			satellite2 = gltf.scene;
      gltf.scene.scale.set(2,2,2)
			satellite2.position.set(-40, 0, -50);
			scene.add(satellite2);
			animate();
			})
      loader.load('images/sat3/scene.gltf', function(gltf){
      satellite3 = gltf.scene;
      gltf.scene.scale.set(0.05,0.05,0.05)
      satellite3.position.set(-105, 0, -350);
      scene.add(satellite3);
      animate();
      })

      loader.load('images/sat3_1/sat3-1.gltf', function(gltf){
      satellite3_1 = gltf.scene;
      gltf.scene.scale.set(0.1,0.1,0.1)
      satellite3_1.position.set(105, -20, -350);
      scene.add(satellite3_1);
      animate();
      })

      loader.load('images/sat3_2/sat3-2.gltf', function(gltf){
      satellite3_2 = gltf.scene;
      gltf.scene.scale.set(0.1,0.1,0.1)
      satellite3_2.position.set(105, 200, -350);
      scene.add(satellite3_2);
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
      rocket.position.set(-50, 40 , -50);
      scene.add(rocket);
      animate();
      })
      loader.load('images/rocket_engine/scene.gltf', function(gltf){
      rocket_2 = gltf.scene;
      rocket_2.position.set(-50, -40 , -50);
      scene.add(rocket_2);
      animate();
      })

      loader.load('images/rocket_engine/scene.gltf', function(gltf){
      rocket_3 = gltf.scene;
      rocket_3.position.set(-100, -40 , -50);
      scene.add(rocket_3);
      animate();
      })

      loader.load('images/rocket_engine/scene.gltf', function(gltf){
      rocket_4 = gltf.scene;
      rocket_4.position.set(-200, -40 , -50);
      scene.add(rocket_4);
      animate();
      })

      loader.load('images/rocket_engine/scene.gltf', function(gltf){
      rocket_7 = gltf.scene;
      rocket_7.position.set( 150, -100 , -50);
      scene.add(rocket_7);
      animate();
      })

      loader.load('images/rocket_engine/scene.gltf', function(gltf){
      rocket_8 = gltf.scene;
      rocket_8.position.set( 75, 70 , -70);
      scene.add(rocket_8);
      animate();
      })


      loader.load('images/fusee/scene.gltf', function(gltf){
      fusee = gltf.scene;
      gltf.scene.scale.set(0.1,0.1,0.1)
      fusee.position.set(150, 100 , -100);
      scene.add(fusee);
      animate();
      })

      loader.load('images/door/scene.gltf', function(gltf){
      door = gltf.scene;
      gltf.scene.scale.set(0.03,0.03,0.03)
      door.position.set(100, 100 , -75);
      scene.add(door);
      animate();
      })

      loader.load('images/multi_doorv2/doorv9.glb', function(gltf){
      doorv4 = gltf.scene;
      gltf.scene.scale.set(0.2,0.2,0.2)
      doorv4.position.set(50, 50 ,  -100);
      scene.add(doorv4);
      animate();
      })

      loader.load('images/multi_doorv2/doorv9.glb', function(gltf){
      doorv4_2 = gltf.scene;
      gltf.scene.scale.set(0.2,0.2,0.2)
      doorv4_2.position.set(100, 0 ,  -100);
      scene.add(doorv4_2);
      animate();
      })
      loader.load('images/multi_doorv2/doorv9.glb', function(gltf){
      doorv4_3 = gltf.scene;
      gltf.scene.scale.set(0.2,0.2,0.2)
      doorv4_3.position.set(50, -50 ,  -100);
      scene.add(doorv4_3);

      animate();
      })

      loader.load('images/multi_doorv2/doorv9.glb', function(gltf){
      doorv4_4 = gltf.scene;
      gltf.scene.scale.set(0.2,0.2,0.2)
      doorv4_4.position.set(0, 0 ,  -100);
      scene.add(doorv4_4);
      animate();
      })

      loader.load('images/multi_doorv2/doorv9.glb', function(gltf){
      doorv4_5 = gltf.scene;
      gltf.scene.scale.set(0.2,0.2,0.2)
      doorv4_5.position.set(-50, -50 ,  -100);
      scene.add(doorv4_5);
      animate();
      })

      loader.load('images/multi_doorv2/doorv9.glb', function(gltf){
      doorv4_6 = gltf.scene;
      gltf.scene.scale.set(0.2,0.2,0.2)
      doorv4_6.position.set(-50, 50 ,  -100);
      scene.add(doorv4_6);
      animate();
      })








function animate() {
				if (satellite) satellite.rotation.x += 0.0005;
				if (satellite2) satellite2.rotation.x += 0.0007;
        if (debris1) debris1.rotation.y += 0.0005;
        if (debris1) debris1.rotation.x += 0.0009;
        if (rocket)rocket.rotation.y += 0.0005;
        if (rocket)rocket.rotation.x += 0.0006;
        if (rocket_2)rocket_2.rotation.x += 0.0003;
        if (rocket_3)rocket_3.rotation.x += 0.0002;
        if (rocket_3)rocket_3.rotation.y += 0.0002;

        if (rocket_4)rocket_4.rotation.x += 0.001;
        if (rocket_4)rocket_4.rotation.y += 0.001;


        if (rocket_7)rocket_7.rotation.x += 0.0001;
        if (rocket_8)rocket_8.rotation.x += 0.0007;

        if (satellite3)satellite3.rotation.x += 0.0001;
        if (satellite3_1)satellite3_1.rotation.y += 0.0001;
        if (satellite3_1)satellite3_1.rotation.x += 0.0003;
        if (satellite3_2)satellite3_2.rotation.y -= 0.0007;
        if (satellite3_2)satellite3_2.rotation.x -= 0.0003;
        if (fusee)fusee.rotation.x += 0.0001;
        if (fusee)fusee.rotation.y += 0.0002;
        if (door)door.rotation.x -= 0.0005;
        if (door)door.rotation.y += 0.001;

        if (doorv4)doorv4.rotation.x -= 0.0005;
        if (doorv4)doorv4.rotation.y += 0.0001;

        if (doorv4_2)doorv4_2.rotation.x -= 0.0009;
        if (doorv4_2)doorv4_2.rotation.y += 0.0003;

        if (doorv4_3)doorv4_3.rotation.x -= 0.0002;
        if (doorv4_3)doorv4_3.rotation.y += 0.0001;
        if (doorv4_4)doorv4_4.rotation.x -= 0.0001;
        if (doorv4_4)doorv4_4.rotation.y += 0.0002;

        if (doorv4_5)doorv4_5.rotation.x -= 0.0004;
        if (doorv4_5)doorv4_5.rotation.y += 0.0003;

        if (doorv4_6)doorv4_6.rotation.x -= 0.0005;
        if (doorv4_6)doorv4_6.rotation.y += 0.0001;


			 renderer.render(scene,camera);
			 requestAnimationFrame(animate);



		 }
