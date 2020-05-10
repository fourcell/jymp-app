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
import { setShopping } from "../../api/serve/shopping/index";
import {getcookie} from "../../api/common";
import { Dialog } from "vant";

export default {
  data() {
    return {
      show: false,
      goodsId: 1,
      id: Number,
      userId:'',
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
    this.userId = getcookie("userId")
  },
  methods: {
    //获取商品详情
    async getData(){
      let str = (decodeURI(location.search)).split('=')
      this.id = str[1];
      let res = await appDatails(this.id).then();
      try {
        if (res.code == 0) {
          this.sku = res.payload.sku;
          this.sku.list.forEach(item => {
            item.price *= 100
          });
          this.sku.price = this.sku.price.toFixed(2)
          this.goods.picture = this.sku.tree[0].v[0].previewImgUrl
          console.log(this.sku,this.goods.picture);
          
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
      // window.console.log(this.$refs.goodsSku.getSkuData());
      let obj = this.$refs.goodsSku.getSkuData()
      let parm = {
          skuId: obj.selectedSkuComb.id, //skuID
          userId: this.userId,  //用户id
          procuctId: this.id,    //商品id
          shoppingNumber: obj.selectedNum  //购买数量
        };
        setShopping(parm).then(data => {
          window.console.log(data);
        });
    },
    onAddCartClicked(val) {
      window.console.log(val);
      let parm = {
          skuId: val.selectedSkuComb.id, //skuID
          userId: this.userId,  //用户id
          procuctId: this.id,    //商品id
          shoppingNumber: val.selectedNum //购买数量
        };
        setShopping(parm).then(data => {
          window.console.log(data);
        });
    }
  }
};
</script>