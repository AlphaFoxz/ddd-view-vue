<template>
  <view>
    <span>右窗口</span>
    <!-- 将原来的详情页（/pages/detail/detail.vue），作为一个组件(pages-detail-detail)使用 -->
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
