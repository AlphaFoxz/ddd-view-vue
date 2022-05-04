<template>
  <view>
    <div class="bottom-bar">
      <span @click="navigateTo('/pages/index/3dtest')">消息</span>
      <span>通讯录</span>
      <span>发现</span>
      <span @click="navigateTo('/pages/index/login')">我</span>
    </div>
  </view>
</template>

<script>
  export default {
    created(e) {
      //监听自定义事件
      uni.$on('reload', (e) => {
      })
    },
    methods: {
      navigateTo(url) {
        uni.navigateTo({url: url})
      }
    }
  }
</script>
<style scoped>
  .bottom-bar {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
  .bottom-bar {
    width: 100%;
    font-size: 20rpx;
  }
</style>
