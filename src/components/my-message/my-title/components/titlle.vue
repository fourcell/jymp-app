<template>
  <div class="title">
    <van-nav-bar :title='getTitle'>
      <template #left>
        <van-icon name="arrow-left" size="30" color="#fff" @click="toReverse" />
      </template>
      <template #right>
        <van-icon name="wap-home-o" size="30" color="#fff" @click="toHome" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getTitle:'我的聚美'
    }
  },
  methods: {
    toReverse() {
      this.$router.go(-1);
    },
    toHome() {
      this.$router.push({ path: "/manage/home/recommend" });
    }
  }
};
</script>
<style lang="scss">
.title {
  height: 50px;
  .van-nav-bar {
    background-color: rgba(255, 255, 255, 0);
    .van-nav-bar__title {
      color: #fff;
      font-size: 18px;
    }
  }
  .van-hairline--bottom::after {
    border: none;
  }
}
</style>