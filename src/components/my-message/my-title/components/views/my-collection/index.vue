<template>
    <div >
      <Title/>
        <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/empty-image-default.png"
        description="您当前还没有收藏喔！"
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