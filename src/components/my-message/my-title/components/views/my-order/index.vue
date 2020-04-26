<template>
    <div >
      <Title/>
        <van-empty
        style="display:none"
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="您当前还没有订单喔，快去选购商品下单吧"
        />
        <OrderContent/>
    </div>
</template>
<script>
import Title from '.././var.vue'
import OrderContent from './myorder-content/index'
export default {
  components: {
    Title,
    OrderContent
  },
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>