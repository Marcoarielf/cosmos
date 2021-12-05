import React, { useEffect, useRef } from "react";
import Header from "../../share/components/header/header";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import css from "./styles.module.scss";

function Models3d() {
  // const mountRef = useRef(null);

  // console.log(OrbitControls);
  // useEffect(() => {
  //   var scene = new THREE.Scene();

  //   const loader = new GLTFLoader();
  //   loader.load(
  //     "/dragon_V2.glb",
  //     function (glb) {
  //       console.log(glb);
  //       const dragon = glb.scene;
  //       scene.add(dragon);
  //       dragon.scale.set(3, 3, 3);
  //       dragon.position.set(0, -3, -2);
  //       dragon.rotation.y = Math.PI / 3;
  //     },
  //     function (xhr) {
  //       console.log((xhr.leaded / xhr.total) * 100 + "% loaded");
  //     },
  //     function (e) {
  //       console.log("error", e);
  //     }
  //   );
  //   var camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   var renderer = new THREE.WebGLRenderer({
  //     antialias: true,
  //     // alpha: true,
  //   });

  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   mountRef.current.appendChild(renderer.domElement);

  //   // orbit controls
  //   const controls = new OrbitControls(camera, renderer.domElement);

  //   // scene.add(cube);
  //   camera.position.z = 5;

  //   var animate = function () {
  //     requestAnimationFrame(animate);
  //     // cube.rotation.x += 0.01;
  //     // cube.rotation.y += 0.01;
  //     renderer.render(scene, camera);
  //   };

  //   const ambientLight = new THREE.AmbientLight(0x404040, 3);

  //   const spotLight1 = new THREE.SpotLight(0x1d17f0, 1);
  //   spotLight1.position.set(6, 11, 6);

  //   const spotLight1Helper = new THREE.SpotLightHelper(spotLight1, 1, 0x00ff00);
  //   scene.add(ambientLight, spotLight1);
  //   scene.add(spotLight1Helper);

  //   let onWindowResize = function () {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };

  //   window.addEventListener("resize", onWindowResize, false);

  //   animate();

  //   return () => mountRef.current.removeChild(renderer.domElement);
  // }, []);

  const titleHeader = "MODELADOS 3D";
  const descriptionHeader =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

  return (
    <>
      <Header title={titleHeader} description={descriptionHeader} />
      <div className={css.dragon} ref={mountRef}></div>
    </>
  );
}

export default Models3d;
