<template>
    <div >
      <van-cell-group>
        <van-card
          v-for="(item,index) in orderList"
          :key="index"
          :num="item.p_num"
          :price="item.pay_total"
          :desc="item.adderss"
          :title="'【'+ item.p_name +'】' + item.p_title"
          :thumb="item.img"
        >
          <template #footer>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">卖了换钱</van-button>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">查看物流</van-button>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">评价</van-button>
          </template>
        </van-card>
      </van-cell-group>
    </div>
</template>
<script>
import {getcookie} from '../../../../../../../api/common'
import {getOrder} from '../../../../../../../api/serve/shopping'
import { Dialog } from "vant";

export default {
  data() {
    return {
      orderList:[]
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData(){
      let userId = getcookie("userId")
      let res = await getOrder(userId).then();
      try {
        if (res.code == 0) {
          console.log(res);
          this.orderList = res.param
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
  },
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