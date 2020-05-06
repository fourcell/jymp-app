<template>
  <van-sku
    v-model="show"
    ref="goodsSku"
    :sku="sku"
    :goods="goods"
    :goods-id="goodsId"
    :quota="quota"
    :quota-used="quotaUsed"
    :hide-stock="sku.hide_stock"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
  />
</template>
<script>
import { appDatails } from "../../api/serve/shopping/index";
import { Dialog } from "vant";

export default {
  data() {
    return {
      show: false,
      goodsId: 1,
      quota: 0,
      quotaUsed: 0,
      sku: {},
      goods: {
        // 数据结构见下方文档
        // 默认商品 sku 缩略图
        picture: ""
      }
    };
  },
  created() {
    this.getData()
  },
  methods: {
    //获取商品详情
    async getData(){
      let str = (decodeURI(location.search)).split('=')
      let id = str[1];
      let res = await appDatails(id).then();
      try {
        if (res.code == 0) {
          this.sku = res.payload.sku;
          this.goods.picture = this.sku.tree[0].v[0].previewImgUrl
          // window.console.log(this.sku.tree[0].v[0].previewImgUrl);
        } else {
          Dialog.alert({
            message: res.msg
          }).then(() => {
          });
        }
      } catch (error) {
        window.console.log(error);
      }
    },
    toShow(val) {
      this.show = val;
    },
    onBuyClicked() {
      window.console.log(this.$refs.goodsSku.getSkuData());
    },
    onAddCartClicked(val) {
      window.console.log(val);
    }
  }
};
</script>