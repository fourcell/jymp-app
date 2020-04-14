<template>
  <div class="product-con">
    <div class="goods">
      <div class="goods-topsmall">
        <img
          src="http://mp6.jmstatic.com/product/005/002/5002978_std/5002978_1000_1000.jpg?v=1585302689&imageView2/2/w/440/q/90"
          alt
        />
        <p>2556条评论</p>
      </div>
      <div class="goods-middle">
        <span>【手机专享】JM蜂蜜/急救/燕窝面膜 多款可选</span>
      </div>
      <div class="goods-foot">
        <P>
          <span>¥42</span>
          <span>单买价¥99</span>
        </P>
        <van-button round type="info" size="small" color="#fe4070">去选购</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.product-con {
  width: 100%;
  height: auto;
  .goods {
    width: 100%;
    padding:0 12px;
    .goods-topsmall {
      position: relative;
      height: 155px;
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 150px;
        height: 150px;
      }
      p {
        position: absolute;
        height: 12px;
        font-size: 12px;
        padding: 4px 7px;
        background: rgba(251, 251, 251, 0.8);
        border: 1px solid #eee;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        line-height: 12px;
        left: 0;
        top: 50%;
      }
    }
    .goods-middle {
      span {
        font-size: 14px;
        line-height: 18px;
      }
    }
    .goods-foot {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        display: flex;
        flex-direction: column;
        span:nth-child(1) {
          color: #fe4070;
          font-size: 18px;
          display: block;
        }

        span:nth-child(2) {
          color: #999;
          display: block;
          font-size: 12px;
        }
      }
      .van-button {
        padding: 0 15px;
        font-size: 16px;
      }
    }
  }
}
</style>