<template>
    <div >
        <van-cell-group>
            <van-card
                price="2.00"
                desc="5022人收藏 | 67人推荐"
                title="完美日记天赋干皮粉底液深水弹女保湿持久干皮"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
                <template #footer>
                <van-button size="mini" round icon="like-o" >推荐</van-button>
                <van-button size="mini" round >找相似</van-button>
                </template>
            </van-card>
        </van-cell-group>
        <van-cell-group class="order">
            <van-card
                price="2.00"
                desc="5022人收藏 | 67人推荐"
                title="完美日记天赋干皮粉底液深水弹女保湿持久干皮"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
                <template #footer>
                <van-button size="mini" round icon="like-o" >推荐</van-button>
                <van-button size="mini" round >找相似</van-button>
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
  .van-card{
    background-color: #fff;
  }
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .van-card__title {
    font-size: 14px;
  }
  .van-button--mini {
    min-width: 70px;
    font-size: 13px;
    height: 27px;
  }
  .van-card__desc{
    color: #ccc;
    line-height: 30px;
  }
</style>