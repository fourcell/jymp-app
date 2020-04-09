<template>
  <div>
    <RegisterTitle />
    <RegisterMain />
  </div>
</template>
<script>
import RegisterMain from "../../components/register/register-main";
import RegisterTitle from "../../components/register/register-title";
export default {
  components: {
    RegisterTitle,
    RegisterMain
  }
};
</script>