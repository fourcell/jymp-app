<template>
  <div class="log-main">
    <LoginTitle :title="title" />
  </div>
</template>
<script>
import LoginTitle from "../../components/components/login/login-title";
export default {
  components: {
    LoginTitle
  },
  data() {
    return {
      title: "使用手机登录"
    };
  }
};
</script>