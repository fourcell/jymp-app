<template>
  <div class="datail-good">
    <div class="good-img">
      <img
        src="//mp5.jmstatic.com/product/005/169/5169352_std/5169352_5_1000_1000.jpg?v=1586914402&imageView2/2/w/800/q/90"
        alt
      />
    </div>
    <div class="good-price">
      <span>￥109.9</span>
      <span>￥219</span>
    </div>
    <div class="good-title">【15号十点开售】完美日记天赋干皮粉底液深水弹女保湿持久干皮</div>
    <div class="good-cell">
      <van-cell title="促销" is-link value="暂无促销"/>
      <van-cell title="运费" is-link value="内容" />
      <van-cell title="说明" is-link value="内容" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.datail-good {
  .good-img {
    width: 100%;
    height: 375px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .good-price {
    padding: 12px 12px;
    span:nth-child(1) {
      font-size: 22px;
      color: #f33873;
      line-height: 18px;
    }
    span:nth-child(2) {
      color: #666666;
      font-size: 13px;
      text-decoration: line-through;
      margin-left: 5px;
    }
  }
  .good-title {
    padding: 0 12px;
    font-size: 14px;
  }
  .good-cell {
    .van-cell {
      .van-cell__title {
        span {
          color: #999;
        }
      }
    }
  }
}
</style>