<template>
  <div v-show="!widthShow">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="标题1" name="1">
        <template>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
        </template>
      </van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  },
  computed:{
      widthShow(){
          return this.$store.state.widthShow
      }
  }
};
</script>
<style lang="scss">
.van-collapse {
  .van-collapse-item__content {
    padding: 0;
  }
  p {
    background-color: #f5f5f5;
    height: 45px;
    margin: 0px;
    margin-bottom: 2px;
    padding-left: 30px;
  }
}
</style>