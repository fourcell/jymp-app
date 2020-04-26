<template>
    <div >
      <Title/>
        <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="您还没有相关订单，可以去看看有哪些想买的！"
        />
    </div>
</template>
<script>
import Title from '.././var'
export default {
   components: {
    Title
  },
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>