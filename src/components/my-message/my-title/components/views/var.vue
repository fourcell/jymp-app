<template>
  <div class="shopping">
    <van-nav-bar :title="getTitle">
      <template v-show="this.$route.query.entrance !== '1'" #left>
        <van-icon  name="arrow-left" size="18" color="#999" @click="toReverse" />
      </template>
      <template #right>
        <van-icon name="wap-home-o" size="18" color="#999" @click="toHome" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getTitle: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let path = this.$route.path;

      switch (path) {
        case "/myOrder":
          this.getTitle = "我的订单";
          break;
        case "/myCollection":
          this.getTitle = "我的收藏";
          break;
        case "/myLocation":
          this.getTitle = "我的地址";
          break;
        case "/myContact":
          this.getTitle = "联系人";
          break;
        case "/setup":
          this.getTitle = "设置";
          break;
        case "/payment":
          this.getTitle = "待付款";
          break;
        case "/sendGoods":
          this.getTitle = "待发货";
          break;
        case "/goodsReceived":
          this.getTitle = "待收货";
          break;
        case "/taking":
          this.getTitle = "评价";
          break;
        default:
          break;
      }
    },
    toHome() {
      this.$router.push({ path: "/manage/home/recommend" });
    },
    toReverse() {
      if(this.$route.path=="/myLocation" && this.$route.query && this.$route.query.entrance === '1') {
        this.$router.push({ path: "/sureOrder",query:{list:this.$route.query.goodlist} })
      } else {
      this.$router.go(-1);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.shopping {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-nav-bar {
    width: 100%;
  }
}
</style>