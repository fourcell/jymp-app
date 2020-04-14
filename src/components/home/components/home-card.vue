<template>
  <div class="speed-card">
    <div class="card" v-for="i in 4" :key="i">
      <div>
        <img src="http://p4.jmstatic.com/product/005/170/5170884_std/5170884_350_350.jpg    " alt />
      </div>
      <div class="product-name">
        <span>官方授权</span>
        <span>宝宝背心网眼透气莫代尔婴儿小背心夏季男女童薄款吊带儿童夏装</span>
      </div>
      <div class="tag_text">
        <span>新品上架</span>
      </div>
      <div class="price-info">
        <p>
          <span>￥25.9</span>
          <span>￥139</span>
        </p>
      </div>
      <div class="buyer-and-comments">4条评论</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.speed-card {
  width: 100%;
  display: flex;
  padding: 0 2px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  .card {
    width: calc(50% - 2px);
    height: auto;
    background-color: #fff;
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 5px 0;
    img {
      width: 162px;
      height: 157px;
    }
    .product-name {
      width: 162px;
      font-size: 14px;
      line-height: 18px;
      height: auto;
      padding-bottom: 5px;
      span:nth-child(1) {
        color: #fff;
        background: #fe4070;
        border-radius: 2px;
        padding: 0 2px;
      }
    }
    .tag_text {
      width: 162px;
      line-height: 14px;
      span {
        color: #999;
        font-size: 12px;
      }
    }
    .price-info {
      width: 162px;
      height: 20px;
      line-height: 20px;
      p {
        margin: 0;
        padding-top: 5px;
        font-size: 18px;
        span:nth-child(1) {
          color: #fe4070;
        }
        span:nth-child(2) {
          color: #999;
          font-size: 14px;
          padding-left: 5px;
        }
      }
    }
    .buyer-and-comments{
        width: 162px;
        padding-top: 5px;
        color: #999;
        font-size: 12px;
    }
  }
}
</style>