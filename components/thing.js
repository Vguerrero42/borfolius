import {useState,useEffect,useRef,useCallback} from 'react'
import { render } from 'react-dom'
import * as THREE from 'three'
import { AdditiveBlending } from 'three'
import {OrbitControls, OribitControls} from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'

import {ThingContainer,ThingSpinner} from './thing-loader'

function easeOutCirc(x){
  return Math.sqrt(1-Math.pow(x-1,4))
}

const Thing = ()=>{
  const refContainer = useRef()
  const [loading,setLoading] = useState(true)
  const [renderer,setRenderer] = useState()
  const [_camera,setCamera] =useState()
  const [target] = useState(new THREE.Vector3(-0.5,1.2,0))
  //
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      -20*Math.sin(0.2*Math.PI),
      10,
      20*Math.cos(0.2*Math.PI)
    )
  )
  /**
   * 
   *  20*Math.sin(0.2*Math.PI),
      10,
      20*Math.cos(0.2*Math.PI)
   */
  const [scene] = useState(new THREE.Scene())
  const [_controls,setControls] = useState()
  
  let maxParticleCount = 500
  let particleCount = 500
  let particlesData =[]
  const r = 1000
  const rHalf = r/2
  let positions, colors;
  let particles;
  let pointCloud;
  let particlePositions;
  let linesMesh;

  const effectController = {
    showDots: true,
    showLines: true,
    minDistance: 200,
    limitConnections: false,
    maxConnections: 5,
    particleCount: 100
  };

  const handleWindowResize = useCallback(() =>{
    const {current:container} = refContainer
    if(container && renderer){
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW,scH)

    }

  },[renderer])
  
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() =>{
    const {current:container} = refContainer
    if(container && !renderer){
      const scW=container.clientWidth
      const scH=container.clientHeight
    
      const renderer = new THREE.WebGLRenderer({
        antialias:true,
        alpha:true,
        // preserveDrawingBuffer:true
      })
      
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW,scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const scale = scH 
      const scaleDouble = scale * 2
      
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,scale,
        -scale,0.001,50000
      )
      // const camera = new THREE.PerspectiveCamera(45,scW/scH,1,1000)
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)
    setCamera(camera)

    const ambientLight = new THREE.AmbientLight(0xcccccc,1)
    const group = new THREE.Group()
    // scene.add(ambientLight)
    scene.add(group)
    const sphere = new THREE.SphereGeometry(r,r/4,r/8)
    const object = new THREE.Mesh(sphere,new THREE.MeshBasicMaterial({color:0x0ff088}))
    const helper = new THREE.BoxHelper(object)
    helper.material.color.setHex(0x101010)
    helper.material.blending = THREE.AdditiveBlending
    helper.material.transparent = false
    group.add(helper)
    group.add(object)
  
    const controls = new OrbitControls(camera,renderer.domElement)
    controls.autoRotate = true
    controls.target = target
    controls.enableDamping = true
    controls.dampingFactor = .05
    setControls(controls)
/**
 PARTICLES
 */
    
      const segments = maxParticleCount * maxParticleCount;

				positions = new Float32Array( segments * 3 );
				colors = new Float32Array( segments * 3 );

				const pMaterial = new THREE.PointsMaterial( {
					color: new THREE.Color(0x1f003c) ,
					size: 10,
          vertexColors:false,
					blending: THREE.AdditiveBlending,
					transparent: true,
					sizeAttenuation: false,
          depthTest:false
				} );

				particles = new THREE.BufferGeometry();
				particlePositions = new Float32Array( maxParticleCount * 3 );

				for ( let i = 0; i < maxParticleCount; i ++ ) {
					const x = Math.random() * r- r/ 2;
					const y = Math.random() * r - r / 2;
					const z = Math.random() * r- r/ 2;

					particlePositions[ i * 3 ] = x;
					particlePositions[ i * 3 + 1 ] = y;
					particlePositions[ i * 3 + 2 ] = z;

					// add it to the geometry
					particlesData.push( {
						velocity: new THREE.Vector3( - 1 + Math.random() * 10, - 1 + Math.random() * 2, - 1 + Math.random() * 10 ),
						numConnections: 0
					} );

				}

				particles.setDrawRange( 0, particleCount );
				particles.setAttribute( 'position', new THREE.BufferAttribute( particlePositions, 3).setUsage( THREE.DynamicDrawUsage ) );

				// create the particle system
				pointCloud = new THREE.Points( particles, pMaterial );
				group.add( pointCloud );

				const geometry = new THREE.BufferGeometry();

				geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3).setUsage( THREE.DynamicDrawUsage ) );
				geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3).setUsage( THREE.DynamicDrawUsage ) );

				geometry.computeBoundingSphere();

				geometry.setDrawRange( 0,0 );

				const material = new THREE.LineBasicMaterial( {
					vertexColors: true,
					blending: THREE.AdditiveBlending,
					transparent: true
				} );

				linesMesh = new THREE.LineSegments( geometry, material );
				group.add( linesMesh );

    /*DRAW BOX HERE,THEN */

    let req = null
    let frame = 0
    const animate = () => {
      let vertexpos = 0;
				let colorpos = 0;
				let numConnected = 0;

      req = requestAnimationFrame(animate)
      frame = frame <= 100 ? frame + 1 :frame

      if(frame <= 100 ){
        
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame/120)*Math.PI * 20

        camera.position.y =  10
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.zoom = -0.0125 * (101-frame/2) /2 *rotSpeed/100
        camera.updateProjectionMatrix()
        camera.lookAt(target)
        
      }
      
      else{
        // if(frame == 101){
        //   frame += 1
        //   camera.zoom = 0.2
        //   camera.updateProjectionMatrix()
        // }
        camera.updateProjectionMatrix()
        controls.update()
 
      }
      
      /*PARTICLE STUFF */
      for ( let i = 0; i < particleCount; i ++ )
					particlesData[ i ].numConnections = 0;

				for ( let i = 0; i < particleCount; i ++ ) {

					// get the particle
					const particleData = particlesData[ i ];

					particlePositions[ i * 3 ] += particleData.velocity.x;
					particlePositions[ i * 3 + 1 ] += particleData.velocity.y;
					particlePositions[ i * 3 + 2 ] += particleData.velocity.z;
          
          let rSquared = Math.pow(r,2)
          let xSquared = Math.pow(particlePositions[i*3],2),
              ySquared= Math.pow(particlePositions[i*3+1],2),
              zSquared=  Math.pow(particlePositions[i*3+2],2)
          let eq = xSquared + ySquared + zSquared <= rSquared
          
  
          /**     
 * 
 * 
 * x+y+z = r
 * 
 * 
*/
          if(!eq){
            	particleData.velocity.x = - particleData.velocity.x ;
          }
           if(!eq){
            	particleData.velocity.y = - particleData.velocity.y;
          }
           if(!eq){
            	particleData.velocity.z = - particleData.velocity.z;
          }
          
          
					// if ( particlePositions[ i * 3 + 1 ] < - r || particlePositions[ i * 3 + 1 ] > r )
					// 	particleData.velocity.y = - particleData.velocity.y;

					// if ( particlePositions[ i * 3 ] < - r || particlePositions[ i * 3 ] > r )
					// 	particleData.velocity.x = - particleData.velocity.x;

					// if ( particlePositions[ i * 3 + 2 ] < - r || particlePositions[ i * 3 + 2 ] > r )
					// 	particleData.velocity.z = - particleData.velocity.z;

					if ( effectController.limitConnections && particleData.numConnections >= effectController.maxConnections )
						continue;

					// Check collision
					for ( let j = i + 1; j < particleCount; j ++ ) {

						const particleDataB = particlesData[ j ];
						if ( effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections )
							continue;

						const dx = particlePositions[ i * 3 ] - particlePositions[ j * 3 ];
						const dy = particlePositions[ i * 3 + 1 ] - particlePositions[ j * 3 + 1 ];
						const dz = particlePositions[ i * 3 + 2 ] - particlePositions[ j * 3 + 2 ];
						const dist = Math.sqrt( dx * dx + dy * dy + dz * dz );

						if ( dist < effectController.minDistance ) {

							particleData.numConnections ++;
							particleDataB.numConnections ++;

							const alpha = 1.0 - dist / effectController.minDistance;

							positions[ vertexpos ++ ] = particlePositions[ i * 3 ];
							positions[ vertexpos ++ ] = particlePositions[ i * 3 + 1 ];
							positions[ vertexpos ++ ] = particlePositions[ i * 3 + 2 ];

							positions[ vertexpos ++ ] = particlePositions[ j * 3 ];
							positions[ vertexpos ++ ] = particlePositions[ j * 3 + 1 ];
							positions[ vertexpos ++ ] = particlePositions[ j * 3 + 2 ];

							colors[ colorpos ++ ] = alpha;
							colors[ colorpos ++ ] = alpha;
							colors[ colorpos ++ ] = alpha;

							colors[ colorpos ++ ] = alpha;
							colors[ colorpos ++ ] = alpha;
							colors[ colorpos ++ ] = alpha;
  
							numConnected ++;

						}

					}

				}


				linesMesh.geometry.setDrawRange( 0, numConnected * 2 );
				linesMesh.geometry.attributes.position.needsUpdate = true;
				linesMesh.geometry.attributes.color.needsUpdate = true;

				pointCloud.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene,camera)
    }

    animate()
    setLoading(false)
    
    return () =>{
      cancelAnimationFrame(req)
      renderer.dispose()
    }
    }

  },[])

  useEffect(() =>{
    window.addEventListener('resize',handleWindowResize,false)
    return () =>{
      window.removeEventListener('resize',handleWindowResize,false)
    }
  },[renderer,handleWindowResize])


  return (
      <ThingContainer ref={refContainer}>
        {loading && <ThingSpinner/>}
      </ThingContainer>
  )
}

export default Thing