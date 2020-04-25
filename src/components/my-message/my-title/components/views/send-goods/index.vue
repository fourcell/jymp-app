<template>
    <div >
      <Title/>
        <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="您当前还没有订单喔，快去选购商品下单吧"
        />
    </div>
</template>
<script>
import Title from '../../var.vue'
import Bus from '../../../../../../../assets/Bus.js'
export default {
   components: {
    Title
  },
  created() {
    Bus.$emit('titleName',this.$route.name)
  },
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>