var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            var light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
            scene.add( light );

			var geometry = new THREE.SphereGeometry( 5, 32, 32 );
			var material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );
            var t = 0;
            var o1 = 0;
            var r1 = 20;
            var v1 = 0.1;
            camera.position.z = 30;
            //camera.position.y = 5;

            var axesHelper = new THREE.AxesHelper( 25 );
            scene.add( axesHelper );

            var geometry1 = new THREE.SphereBufferGeometry( 2, 32, 32 );
			var material1 = new THREE.MeshLambertMaterial({color: 0xFF0563} );
			var satelite2 = new THREE.Mesh( geometry1, material1 );
            scene.add( satelite2);
            satelite2.position.x = r1;
            satelite2.matrix.makeBasis(0, 0, -1, 0,
                            1, 0, 0, 0,
                            0, -1, 0, 0,
                            0,0 , 0, 1 );
            // satelite2.up.set(0, 1, 0.0)
            // satelite2.rotateY(-Math.PI/2);
            // satelite2.rotateZ(-Math.PI/2);
            //console.log(satelite2.matrix);
            

            var delayInMilliseconds = 1000; //1 second
            
            // setTimeout(function() {
            // //your code to be executed after 1 second
            
            // }, delayInMilliseconds);

            // setTimeout();
			var animate = function () {
                requestAnimationFrame( animate );
                // satelite2.position.x = r1*Math.cos(o1);
                // satelite2.position.z = r1*Math.sin(o1);

                satelite2.position.set(r1*Math.cos(o1), r1*Math.sin(o1), 0, 0,
                                        -r1*Math.sin(o1), r1*Math.cos(o1), 0, 0,
                                        0, 0, 1, 0,
                                        0, 0, 0, 1 );

				t +=1;
                o1 = (v1*t)/r1;
                //console.log(t);

				renderer.render(scene, camera);
			};

			animate();