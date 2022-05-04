<template>
  <view>
    <div>右窗口</div>
  </view>
</template>

<script>
  export default {
    created(e) {
      //监听自定义事件
      uni.$on('reload', (e) => {
      })
    }
  }
</script>
