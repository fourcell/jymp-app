<template>
    <div >
      <Title/>
        <van-empty
        style="display:none"
        class="custom-image"
        image="https://img.yzcdn.cn/vant/empty-image-default.png"
        description="您当前还没有收藏的商品喔！"
        />
        <Collectioncontent/>
    </div>
</template>
<script>
import Title from '.././var'
import Collectioncontent from './collection-content/index'
export default {
   components: {
    Title,
    Collectioncontent
  },
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>