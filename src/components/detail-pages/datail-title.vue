<template>
  <div class="datail-title">
    <van-nav-bar title="【15号十点开售】完美日记天赋干皮粉底液深水弹女保湿持久干皮" left-arrow>
      <template #right>
        <van-icon name="wap-home-o" color="#ccc" size="22" @click="toHome" />
      </template>
      <template #left>
        <van-icon name="arrow-left" color="#ccc" size="22" @click="toReverse" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
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