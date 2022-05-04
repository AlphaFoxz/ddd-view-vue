<template>
  <view class="content">
    <World>
      <ThirdPersonCamera active mouseControl>
        <Model
            src="src/3dmodels/sofa_03_4k.gltf"
            rotation=""
            pbr
        />
      </ThirdPersonCamera>
    </World>
  </view>
</template>

<script>
  import {World, Cube, ThirdPersonCamera, Model, Editor} from 'lingo3d-vue'

  export default {
    components: {
      World,
      Cube,
      ThirdPersonCamera,
      Model,
      Editor
    },
    data() {
      return {
      }
    },
    onLoad() {
    },
    methods: {},
  }
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200 rpx;
    width: 200 rpx;
    margin-top: 200 rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50 rpx;
  }

</style>
