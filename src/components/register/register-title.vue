<template>
  <div class="log-title">
    <van-nav-bar
      title="注册"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon name="arrow-left" size="18" color="#333" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  methods: {
    onClickRight() {
      this.$router.push({ path: "/Login" });
    },
    onClickLeft() {
      this.$router.push({ path: "/manage/myMessage" });
    }
  }
};
</script>
<style lang="scss">
.log-title {
  height: 45px;
  .van-nav-bar__text {
    color: #333;
  }
  .van-nav-bar__title {
    color: #666;
  }
}
</style>