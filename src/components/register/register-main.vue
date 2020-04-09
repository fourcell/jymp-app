<template>
  <div>
    <LoginTitle :title="title" :regClause = false />
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
      title: "使用手机注册"
    };
  }
};
</script>