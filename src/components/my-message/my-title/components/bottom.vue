<template>
    <div>
        <van-cell title="我的订单" is-link to="/myOrder" size="large" value="查看全部订单" />
        <van-grid :border="false" class="order">
            <van-grid-item icon="balance-pay" text="待付款" badge="0"  to="/payment"/>
            <van-grid-item icon="send-gift-o" text="待发货" badge="9"  to="/sendGoods"/>
            <van-grid-item icon="logistics" text="待收货" badge="10"  to="/goodsReceived"/>
            <van-grid-item icon="comment-o" text="评价" badge=""  to="/taking"/>
        </van-grid>
        <van-cell-group class="order">
            <van-cell icon="vip-card" title="会员福利" size="large" is-link  />
            <van-cell icon="gold-coin" title="我的优惠" size="large" is-link  />
        </van-cell-group>
        <van-cell-group class="order">
            <van-cell icon="like" title="我的收藏" size="large" is-link to="/myCollection"  value="查看"/>
            <van-cell icon="location" title="我的地址" size="large" is-link value="编辑" to="/myLocation"/>
            <van-cell icon="friends" title="联系人" size="large" is-link value="编辑" to="/myContact"/>
        </van-cell-group>
        <van-cell-group class="order">
            <van-cell icon="hot" title="热卖商品" size="large" is-link  />
            <van-cell icon="setting" title="设置" size="large" is-link value="编辑" to="/setup" />
        </van-cell-group>
        <myOrder v-show="this.$route.name == 'myOrder'"/>
        <myCollection v-show="this.$route.name == 'myCollection'"/>
        <myLocation v-show="this.$route.name == 'myLocation'"/>
    </div>
</template>

<script>
import myOrder from './views/my-order/index'
import myCollection from './views/my-collection/index'
import myLocation from './views/my-location/index'
export default {
  components: {
    myOrder,
    myCollection,
    myLocation
  },
   methods: {

   },
}
</script>
<style scoped>
.order{
    width: 100%;
    padding-bottom: 15px;
    background-color: #f5f5f5;
}
</style>