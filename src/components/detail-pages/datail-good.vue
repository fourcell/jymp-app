<template>
  <div class="datail_goods_box">
    <div class="datail-good" v-if="takeShow">
      <DatailTitle/>
      <van-swipe @change="onChange">
        <van-swipe-item>
          <div class="good-img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt/>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="good-img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt/>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="good-img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt/>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="good-img">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt/>
          </div>
        </van-swipe-item>
      </van-swipe>
      <div class="good-price">
        <span>￥109.9</span>
        <span>￥219</span>
      </div>
      <div class="good-title">【15号十点开售】完美日记天赋干皮粉底液深水弹女保湿持久干皮</div>
      <div class="good-cell">
        <van-cell icon="balance-o" title="促销" value="暂无促销"/>
        <van-cell icon="location-o" title="发货：广东广州  /  快递：免运费" value="月销336笔" />
        <van-cell icon='chat-o' :title="'宝贝评价('+this.takeData+')'"  is-link value="查看全部" @click="datailTaking_show"/>
      </div>
    </div>
    <DatailTaking v-else/>
  </div>
</template>
<script>
import DatailTaking from './datail-taking'
import DatailTitle from './datail-title'
export default {
  components:{
    DatailTaking,
    DatailTitle
  },
  data() {
    return {
      takeData:66,
      takeShow:true
    }
  },
  methods: {
    onChange(index) {
      console.log(index);
      
    },
    datailTaking_show(){
      this.takeShow = false
    },
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