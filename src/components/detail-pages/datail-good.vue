<template>
  <div class="datail_goods_box">
    <div class="datail-good" v-if="takeShow">
      <DatailTitle/>
      <van-swipe>
        <van-swipe-item v-for="(item,index) in list" :key="index">
          <div class="good-img">
            <img :src="item.previewImgUrl" alt/>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="good-price">
        <span v-text="'￥'+ datailData.vip_price">></span>
        <span v-text="'￥'+ datailData.price"></span>
      </div>
      <div class="good-title">{{datailData.title}}</div>
      <div class="good-cell">
        <van-cell icon="balance-o" title="促销" value="暂无促销"/>
        <van-cell icon="location-o" title="发货：广东广州  /  快递：免运费" :value="'月销'+datailData.sales+'笔'" />
        <van-cell icon='chat-o' :title="'宝贝评价('+datailData.is_put+')'"  is-link value="查看全部" @click="datailTaking_show"/>
      </div>
      <DatailFooter/>
    </div>
    <DatailTaking v-else @goodTakeShow = 'goodTakeShow'/>
  </div>
</template>
<script>
import DatailTaking from './datail-taking'
import DatailTitle from './datail-title'
import DatailFooter from "./datail-footer";
import {appDatails} from "../../api/serve/shopping/index";
import { Dialog } from "vant";
export default {
  components:{
    DatailTaking,
    DatailTitle,
    DatailFooter
  },
  data() {
    return {
      takeData:66,
      takeShow:true,
      datailData:[],
      list:[]
    }
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
          this.datailData = res.payload.param;
          window.console.log(res);
          this.list = res.payload.sku.tree[0].v
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
    datailTaking_show(){
      this.takeShow = false
    },
    goodTakeShow(val){
      this.takeShow = val
    }
  },
};
</script>
<style lang="scss" scoped>
.datail_goods_box{
  margin-bottom: 100px;
}
.datail-good {
  .good-img {
    width: 100%;
    height: 375px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .good-price {
    padding: 12px 12px;
    span:nth-child(1) {
      font-size: 22px;
      color: #f33873;
      line-height: 18px;
    }
    span:nth-child(2) {
      color: #666666;
      font-size: 13px;
      text-decoration: line-through;
      margin-left: 5px;
    }
  }
  .good-title {
    padding: 0 12px;
    font-size: 14px;
  }
  .good-cell {
    .van-cell {
      .van-cell__title {
        span {
          color: #999;
        }
      }
    }
  }
}
</style>