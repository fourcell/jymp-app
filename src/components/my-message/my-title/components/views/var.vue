<template>
  <div class="shopping">
    <van-nav-bar :title="getTitle">
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
  data() {
    return {
      getTitle:''
    }
  },
  created() {
    this.init();
  },
   methods: {
     init(){
      var str=location.href;
      let i = str.split('/')
      if(i[3] == 'myOrder'){
        this.getTitle = '我的订单'
      }else if(i[3] == 'myCollection'){
        this.getTitle = '我的收藏'
      }
    },
    toHome() {
      this.$router.push({ path: "/manage/home/recommend" });
    },
    toReverse() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.shopping {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .van-nav-bar {
    width: 100%;
  }
}
</style>