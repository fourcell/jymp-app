<template>
  <div class="log">
    <div class="log-top">
      <img :src="noportrait" alt />
    </div>
    <div class="log-bottom">
      <ul>
        <li @click="toRegister">注册</li>
        <p></p>
        <li @click="toLogin">登录</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      noportrait: require("../../../../assets/noportrait.png")
    };
  },
  methods: {
    toRegister() {
      this.$router.push({ path: "/register" });
    },
    toLogin() {
      this.$router.push({ path: "/Login" });
    }
  }
};
</script>
<style lang="scss" scoped>
.log {
  .log-top {
    display: flex;
    justify-content: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .log-bottom {
    height: 45px;
    ul {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 95px;
        text-align: center;
        line-height: 25px;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
      }
      p {
        background: #fff;
        width: 1px;
        display: inline-block;
        height: 15px;
      }
    }
  }
}
</style>