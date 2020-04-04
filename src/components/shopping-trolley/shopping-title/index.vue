<template>
  <div class="shopping">
    <van-nav-bar title="购物车">
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
  methods: {
    toHome() {
      this.$router.push({ path: "/manage/home" });
    },
    toReverse() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
</style>