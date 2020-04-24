<template>
    <div >
      <Title/>
       <van-panel icon="location" title="未央之夏装" desc="会员名：未央之夏装" />
       <div class="v-bottom">
        <van-button type="primary" hairline plain block>块级元素</van-button>
        <van-button type="primary" hairline plain block>块级元素</van-button>
       </div>
    </div>
</template>
<script>
import Title from '../var'
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
  .v-bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
</style>