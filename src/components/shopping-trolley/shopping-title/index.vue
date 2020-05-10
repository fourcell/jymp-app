<template>
  <div class="shopping">
    <van-nav-bar :title="getTitle">
      <template #left>
        <van-icon name="arrow-left" size="18" color="#999" @click="toReverse" />
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
      getTitle:''
    }
  },
  created() {
    let path = this.$route.path
    switch (path) {
      case '/manage/groupBooking':
        this.getTitle = '分类'
        break
      case '/manage/shoppingTrolley':
        this.getTitle = '购物车'
        break
      case '/sureOrder':
        this.getTitle = '支付订单'
        break
    }
  },
  methods: {
    toHome() {
      this.$router.push({ path: "/manage/home/recommend" });
    },
    toReverse() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
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