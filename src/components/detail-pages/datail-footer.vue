<template>
  <div>
    <goodSku :addGoods="addGoods" ref="goodSku" />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" to="/manage/shoppingTrolley" text="购物车" />
      <van-goods-action-icon
        icon="star-o"
        @click="collection"
        v-if="isShow"
        text="收藏"
        color="#ff5000"
      />
      <van-goods-action-icon icon="star" @click="show" v-else text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onShopping" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
import goodSku from "./datail-sku";
import { setShopping } from "../../api/serve/shopping/index";
export default {
  components: {
    goodSku
  },
  data() {
    return {
      isShow: true,
      addGoods: false
    };
  },
  methods: {
    collection() {
      this.isShow = false;
    },
    show() {
      this.isShow = true;
    },
    toShow(val) {
      this.addGoods = val;
    },
    onShopping() {
        this.$refs.goodSku.toShow(true);
      //   this.addGoods = true;
      //   window.console.log(666);
        let parm = {
          skuId: 1, //skuID
          userId: 17,  //用户id
          procuctId: 1,    //商品id
          shoppingNumber: 20  //购买数量
        };
        setShopping(parm).then(data => {
          window.console.log(data);
        });
    }
  }
};
</script>
