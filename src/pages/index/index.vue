<template>
  <view class="text-area">
    <text class="title">{{ title }}</text>
  </view>
  <view class="content">
    <BottomWindow class="bottom-window"/>
  </view>
</template>

<script>
  import BottomWindow from '@c/layout/bottom-window.vue'

  export default {
    components: {
      BottomWindow,
    },
    data() {
      return {
        title: 'Hello',
      }
    },
    onLoad() {
    },
    methods: {
      navigateTo(url) {
        uni.navigateTo({
          url: url,
          animationType: 'pop-in',
          animationDuration: 300
        })
      }
    },
  }
</script>

<style scoped>
  .bottom-window{
    display: flex;
    justify-content: center;
    align-self: flex-end;
    width: 100vw
  }
  @media (min-width: 768px) {
    .bottom-window{
      display: none
    }
  }
  .content {
    display: flex;
    height: 100vh;
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

  .title {
    font-size: 36 rpx;
    color: #8f8f94;
  }
</style>
