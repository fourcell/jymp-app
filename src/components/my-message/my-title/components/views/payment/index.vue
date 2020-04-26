<template>
    <div >
      <Title/>
       <van-notice-bar text="购物节购买，价格更优惠哦" left-icon="volume-o" />
        <van-empty
        style="display:none"
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="您还没有相关订单，可以去看看有哪些想买的！"
        />
        <PaymentContent/>
    </div>
</template>
<script>
import Title from '.././var'
import PaymentContent from './payment-content/index'
export default {
   components: {
    Title,
    PaymentContent
  },
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>