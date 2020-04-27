<template>
  <div class="pages-index">
    <router-view />
    <div>
      <van-tabbar route v-model="active" active-color="#fe4070" inactive-color="#999999">
        <van-tabbar-item icon="wap-home" to="/manage/home/recommend">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o" to="/manage/groupBooking">分类</van-tabbar-item>
        <van-tabbar-item icon="bag" to="/manage/shoppingTrolley">购物车</van-tabbar-item>
        <van-tabbar-item icon="manager" to="/manage/myMessage">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    <Overlay />
  </div>
</template>
<script>
import Overlay from "../components/home/overlay/index";
export default {
  components: {
    Overlay
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.pages-index {
  height: 100%;
}
</style>