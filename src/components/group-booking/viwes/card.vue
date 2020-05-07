<template>
  <div>
      <van-grid :column-num="3">
          <van-grid-item v-for="(item,index) in gridList" :key="index">
              <van-image :src="item.imgUrl">
              <template v-slot:error>加载失败</template>
              </van-image>
              <span>{{item.text}}</span>
          </van-grid-item>
      </van-grid>
  </div>
</template>
<script>
export default {
  props: ['gridList'],
  data () {
    return {
    }
  }
};
</script>
<style lang="scss" scoped>
.van-grid-item__content{
    padding: 16px 1px;
    span{
      font-size: 14px;
    }
    .van-image__img {
        width: 90%;
        height: 90%;
    }
}
</style>