<template>
    <div >
      <Title/>
        <sendGoodsContent/>
    </div>
</template>
<script>
import Title from '.././var'
import sendGoodsContent from './sendgoods-content/index'
export default {
   components: {
    Title,
    sendGoodsContent
  },
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>