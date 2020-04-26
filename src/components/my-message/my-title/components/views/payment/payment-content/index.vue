<template>
    <div >
      <van-cell-group>
        <van-card
          num="1"
          price="2.00"
          desc="B01（升级）"
          title="完美日记天赋干皮粉底液深水弹女保湿持久干皮"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #footer>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">取消订单</van-button>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">去付款</van-button>
          </template>
        </van-card>
      </van-cell-group>
      <van-cell-group class="order">
        <van-card
          num="1"
          price="2.00"
          desc="B01（升级）"
          title="完美日记天赋干皮粉底液深水弹女保湿持久干皮"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #footer>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">取消订单</van-button>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">去付款</van-button>
          </template>
        </van-card>
      </van-cell-group>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .order{
    width: 100%;
    padding-top: 15px;
    background-color: #f5f5f5;
  }
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .van-card{
    background-color: #fff;
  }
  .van-card__title {
    font-size: 14px;
  }
  .van-button--mini {
    min-width: 70px;
    font-size: 12px;
    height: 27px;
  }
</style>