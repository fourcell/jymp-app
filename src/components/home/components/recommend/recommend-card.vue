<template>
<div>
    <div class="overlay-card">
      <van-card
        v-for="(item,index) in dataList"
        :key="index"
        :price="item.vip_price"
        :desc="item.describes"
        :title="'【'+item.p_name+'】'+item.p_title"
        :thumb="item.img"
        @click="onCard(item.product_id)"
      >
      <template #footer>
        <p v-text="item.diss_num+'条评论'"></p>
      </template>
    </van-card>
  </div>
  <div class="center_img">
      <img v-for="(item,index) in imgList" :key="index" :src="item" alt="">
  </div>
</div>
  
</template>
<script>
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);
import { appSelect } from "../../../../api/serve/home/index";
export default {
  data() {
    return {
      dataList: [],
       imgList: [
        'http://mp6.jmstatic.com//jmstore/image/000/009/9008_std/5ea95effea013_2048_710.jpg?1588332544&imageView2/2/w/800/q/90',
        'http://mp5.jmstatic.com//jmstore/image/000/009/9134_std/5eaa808f9def8_2048_710.jpg?1588236022&imageView2/2/w/800/q/90',
        'http://mp6.jmstatic.com//jmstore/image/000/007/7950_std/5e9e68318e36c_2048_710.jpg?1588140114&imageView2/2/w/800/q/90',
        'http://mp5.jmstatic.com//jmstore/image/000/009/9255_std/5eaa474e1fc5e_2048_710.jpg?1588238336&imageView2/2/w/800/q/90'
      ],
      selectID: 1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //获取商品信息
    async getData() {
      let type = this.selectID
      let res = await appSelect(type).then();
      try {
        if (res.code == 0) {
          this.dataList = res.payload;
        } else {
          Dialog.alert({
            message: res.msg
          }).then(() => {});
        }
      } catch (error) {
        window.console.log(error);
      }
    },

    onCard(ev) {
      this.$router.push({
        path: "/detailPages?" + "id=" + ev
      });
    }
  }
};
</script>
<style lang="scss">
.center_img img{
    width: 100%;
    height: 180px;
    margin-top:10px
}
.overlay-card {
  .van-card:nth-child(1) {
    margin-top: 10px;
  }
  .van-card {
    position: relative;
    margin-bottom: 10px;
    padding: 8px 16px 8px 0;
    // height: 165px;
    background-color: #fff;
    .van-card__header {
      width: 100%;
      height: 100%;
      .van-card__thumb {
        padding-left: 10px;
      }
      .van-card__content {
        font-size: 10px;
        color: #333;
        div {
          .van-card__title {
            line-height: 16px;
            font-size: 16px;
          }
          .van-card__desc {
            line-height: 25px;
            margin-left: 10px;
          }
        }

        .van-card__bottom {
            margin-bottom: 15px;
            margin-left: 10px;
          .van-card__price {
            color: #fe4070;
            font-size: 16px;
            .van-card__price-integer {
              font-size: 16px;
            }
          }
          .van-card__origin-price {
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
    .van-card__footer {
      position: absolute;
      left: 115px;
      bottom: -20px;
      margin-bottom: 26px;
      color: #999;
      font-size: 11px;
    }
  }
}
</style>