<template>
  <div class="tab-title">
    <van-tabs title-active-color="#fe4070" color="#fe4070" title-inactive-color="#666">
      <van-tab v-for="(item,index) in title" :title="item.name" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
        //请求获取title，先写死
      title: [
        {
          name: "推荐"
        },
        {
          name: "美妆"
        },
        {
          name: "母婴健康"
        },
        {
          name: "内衣"
        },
        {
          name: "女装"
        },
        {
          name: "家具"
        },
        {
          name: "鞋类"
        },
        {
          name: "运动户外"
        },
        {
          name: "食品保健"
        },
        {
          name: "下期预告"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.tab-title {
  .van-hairline--top-bottom {
    border-bottom: 1px solid #eee;
  }
}
</style>