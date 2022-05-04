<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
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
        title: 'Hello',
      }
    },
    onLoad() {
    },
    methods: {},
  }
</script>

<style>
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

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36 rpx;
    color: #8f8f94;
  }
</style>
