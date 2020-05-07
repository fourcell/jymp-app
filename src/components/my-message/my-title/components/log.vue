<template>
  <div class="log">
    <div class="log-top">
      <van-image
        class="head_img"
        v-if="userName != undefined"
        round
        width="60px"
        height="60px"
        :src="noportrait1"
        />
      <img v-else :src="noportrait" alt />
    </div>
    <div class="log-bottom">
      <p v-if="userName != undefined" class="user_name">{{userName}}</p>
      <ul v-else>
        <li @click="toRegister">注册</li>
        <p></p>
        <li @click="toLogin">登录</li>
      </ul>
    </div>
   
  </div>
</template>
<script>
import {getcookie} from "../../../../api/common";
export default {
  data() {
    return {
      noportrait: require("../../../../assets/noportrait.png"),
      noportrait1: require("../../../../assets/user.png"),
      userName:''
    };
  },
  created() {
    this.init()
  },
  methods: {
    init(){
      this.userName = getcookie("token")
    },
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
    padding-bottom: 15px;
    .user_name{
      color: #fff;
      text-align: center;
      line-height: 30px;
    }
    ul {
      height: 100%;
      display: flex;
      margin-top: 10px;
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