<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
            <van-goods-action-icon icon="cart-o" to="/manage/shoppingTrolley" text="购物车" />
            <van-goods-action-icon icon="star-o" @click="collection" v-if="isShow" text="收藏" color="#ff5000" />
            <van-goods-action-icon icon="star" @click="show" v-else text="已收藏" color="#ff5000" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        <!-- <goodSku/> -->
    </div>
</template>
<script>
// import goodSku from './datail-sku'
export default {
    // components:{
    //     goodSku
    // },
    data() {
        return {
            isShow:true
        }
    },
    methods: {
        collection(){
            this.isShow = false
        },
        show(){
            this.isShow = true
        }
    },
}
</script>