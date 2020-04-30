<template>
  <div class="overlay-card">
    <van-card
      price="2.00"
      origin-price="10.00"
      desc="B01（升级）"
      title="【sum37]=】 呼吸苏秘37度 经典惊喜水分气垫CC霜定妆"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      v-for="i in 4"
      :key="i"
      @click="onCard(i)"
    >
      <template #footer>
        <p>2220条评论</p>
      </template>
    </van-card>
  </div>
</template>
<script>
import {appSelect} from "../../../../api/serve/home/index";
export default {
  data() {
    return {
      dataList: [],
      selectID: 1
    };
  },
  created() {
    this.getData();
  },
  methods: {
    //获取商品信息
    async getData() {
      let type = this.selectID;
      window.console.log(type);
      let res = await appSelect(type).then();
      try {
        if (res.code == 0) {
          this.dataList = res.payload;
        } else {
          // this.toPopUpWindows(res.msg);
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
.overlay-card {
  .van-card:nth-child(1) {
    margin-top: 10px;
  }
  .van-card {
    position: relative;
    margin-bottom: 10px;
    padding: 8px 16px 8px 0;
    height: 165px;
    background-color: #fff;
    .van-card__header {
      width: 100%;
      height: 100%;
      .van-card__thumb {
        width: 155px;
        height: 150px;
        padding-left: 10px;
      }
      .van-card__content {
        font-size: 13px;
        color: #333;
        div {
          height: 50px;
          .van-card__title {
            line-height: 16px;
            font-size: 16px;
          }
          .van-card__desc {
            line-height: 30px;
          }
        }

        .van-card__bottom {
          .van-card__price {
            color: #fe4070;
            font-size: 20px;
            .van-card__price-integer {
              font-size: 20px;
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
      right: 16px;
      bottom: 10px;
      margin-bottom: 26px;
      color: #999;
      font-size: 11px;
    }
  }
}
</style>