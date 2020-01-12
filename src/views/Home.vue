<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 16:56:22
 * @LastEditTime: 2019-10-24 11:47:21
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div id="container">
  </div>
     

</template>
<script>
// 引用api
import { login } from 'api/user'
import * as Three from 'three'
import {
    OBJLoader
} from "three/examples/jsm/loaders/OBJLoader.js";
import {
    MTLLoader
} from "three/examples/jsm/loaders/MTLLoader.js";
import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls.js";
export default {
  name: 'home',
   data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      fish: null,
    }
  },
  methods: {
    init() {
         
  

        let container = document.getElementById('container');
 
        this.camera = new Three.PerspectiveCamera(45, container.clientWidth/container.clientHeight,20, 10000);
        this.camera.position.z = 1000;
 
        this.scene = new Three.Scene();
        this.scene.background = new Three.Color("white");
          // // 灯光效果
          //   //     (参数1 可选）颜色的rgb数值。缺省值为 0xffffff。
          //   //  (参2数可选)光照的强度。缺省值为 1。
            var light = new Three.AmbientLight(0xffffff, 1);
           this.scene.add(light);
        // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        // let material = new Three.MeshNormalMaterial();
 
        // this.mesh = new Three.Mesh(geometry, material);
        // this.scene.add(this.mesh);
           //加载模型
        let mtlLoader = new MTLLoader();
        let objLoader = new OBJLoader();
        mtlLoader.load('build.mtl', (materials) => {
           console.log(materials,'bb');
          materials.preload();
          objLoader.setMaterials(materials);
          objLoader.load('build.obj', (object) => {
            
            object.scale.set(100, 100, 100);
            this.fish = object;
            this.scene.add(this.fish);

            console.log(object,'aa');
          })
        })
        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);
 
    },
    animate(){
        requestAnimationFrame(this.animate);
        // this.mesh.rotation.x += 0.01;
        // this.mesh.rotation.y += 0.02;
        // this.fish.rotation.x += 0.01;
        // this.fish.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init();
      this.animate()
  }
}
</script>
<style lang="less">
#container{
  width: 100%;
  height: 99%;
  background: #ffff;
}
</style>
