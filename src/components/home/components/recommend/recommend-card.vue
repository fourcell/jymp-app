<template>
  <div class="overlay-card">
    <van-card
      price="2.00"
      origin-price="10.00"
      title="【sum37]=】 呼吸苏秘37度 经典惊喜水分气垫CC霜定妆"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      v-for="i in 4"
      :key="i"
      @click="onCard(i)"
    >
      <template #footer>
        <p>2220条评论</p>
      </template>
    </van-card>
  </div>
</template>
<script>
export default {
  methods: {
    onCard(ev) {
      window.console.log(ev);
    }
  }
};
</script>
<style lang="scss">
.overlay-card {
  .van-card:nth-child(1){
    margin-top: 10px;
  }
  .van-card {
    position: relative;
    margin-bottom: 10px;
    padding: 8px 16px 8px 0;
    height: 130px;
    background-color: #fff;
    .van-card__header {
      width: 100%;
      height: 100%;
      .van-card__thumb {
        width: 130px;
        height: 110px;
        padding-left: 10px;
      }
      .van-card__content {
        font-size: 13px;
        color: #333;
        .van-card__bottom {
          .van-card__price {
            color: #fe4070;
            font-size: 20px;
            .van-card__price-integer {
              font-size: 20px;
            }
          }
          .van-card__origin-price {
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
    .van-card__footer {
      position: absolute;
      right: 16px;
      bottom: 0;
      color: #999;
      font-size: 11px;
    }
  }
}
</style>