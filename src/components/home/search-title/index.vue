<template>
  <div class="tab-title">
    <van-tabs title-active-color="#fe4070" color="#fe4070" title-inactive-color="#666">
      <van-tab title="首页" to="/manage/home/recommend"></van-tab>
      <van-tab title="极速免税店" to="/manage/home/topSpeed"></van-tab>
      <van-tab title="母婴" to="/manage/home/infantMom"></van-tab>
      <van-tab title="轻奢" to="/manage/home/Luxurious"></van-tab>
      <van-tab title="名品特卖" to="/manage/home/FamousBrandSale"></van-tab>
    </van-tabs>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <p>刷新次数: {{ count }}</p>
      <router-view />
    </van-pull-refresh>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return { count: 0, isLoading: false };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    }
  }
};
</script>
<style lang="scss">
.tab-title {
  .van-hairline--top-bottom {
    border-bottom: 1px solid #eee;
  }
}
</style>