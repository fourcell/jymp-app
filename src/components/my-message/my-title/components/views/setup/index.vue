<template>
    <div >
      <Title/>
        <van-card
            desc="会员名：未央之夏装"
            title="未央之夏装"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          >
          <template #footer>
            <van-button size="mini">编辑</van-button>
          </template>
        </van-card>
        <van-cell-group class="tool">
            <van-cell title="账户与安全" is-link  />
        </van-cell-group>
        <van-cell-group class="tool">
            <van-cell title="地区设置" is-link  />
            <van-cell title="支付设置" is-link  />
            <van-cell title="音效与通知" is-link  />
            <van-cell title="隐私" is-link  />
            <van-cell title="通用" is-link  />
        </van-cell-group>
        <van-cell-group class="tool">
            <van-cell title="问题反馈" is-link  />
            <van-cell title="关于手机聚美" is-link  />
        </van-cell-group>
       <div class="v-bottom">
        <van-button color="linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%)" size="large" class="v-bottom-top">退出登录</van-button>
        <van-button color="linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%)" size="large">切换账号</van-button>
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
    background-color: #f5f5f5;
  }
  .v-bottom-top{
    margin-bottom: 10px;
  }
  .tool{
    width: 100%;
    padding-top: 15px;
    background-color: #f5f5f5;
  }
  .goods-card{
    background-color: #fff;
  }
  .van-card__title{
    font-size: 18px;
    line-height: 40px;
  }
  .van-card__desc {
    color: #999;
  }
   .van-button--mini {
    min-width: 70px;
    font-size: 12px;
    height: 27px;
  }
</style>