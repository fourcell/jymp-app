<template>
  <div v-show="!widthShow">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="轻奢" name="1">
        <template>
          <p
           v-for="(item,index) in dataList1"
           :key="index"
          >{{item}}</p>
        </template>
      </van-collapse-item>
      <van-collapse-item title="美妆" name="2">
        <p
           v-for="(item,index) in dataList2"
           :key="index"
          >{{item}}</p>
      </van-collapse-item>
      <van-collapse-item title="女装" name="3">
        <p
           v-for="(item,index) in dataList3"
           :key="index"
          >{{item}}</p>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "1",
      dataList1:['DW手表','阿玛尼唇釉','香奈儿套装','海蓝之谜'],
      dataList2:['天气皇后套装','水妍护肤套装','圣罗兰 黑管唇釉','TOM FORD 激情幻魅唇膏','纪梵希 新禁忌之吻唇膏'],
      dataList3:['女士时尚套装','旗袍','复古长裙','质感毛衣'],
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
    line-height: 45px;
  }
}
</style>