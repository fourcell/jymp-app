<template>
  <div>
    <van-search
      @click="onWindthShow(true)"
      v-model="search"
      show-action
      shape="round"
      placeholder="搜索商品名称、品牌、功效"
    >
      <template #action>
        <div v-show="!widthShow" class="go-back" @click="onGoBack">返回</div>
        <div v-show="widthShow" class="go-back" @click="onSearch">搜索</div>
      </template>
      <template #left>
        <div v-show="widthShow" class="go-back" @click="onWindthShow(false)">
          <van-icon name="arrow-left" />
        </div>
      </template>
    </van-search>
    <van-cell v-for="(item,index) in searhData" :key="index" :title="item.p_name" />
  </div>
</template>
<script>
import { Search } from "../../../../api/serve/search";
export default {
  data() {
    return {
      search: "",
      searhData:[]
    };
  },
  computed: {
    widthShow() {
      return this.$store.state.widthShow;
    }
  },
  methods: {
    onGoBack() {
      this.$store.commit("show", false);
      this.search = ''
      this.searhData = [] 
    },
    onWindthShow(val) {
      this.$store.commit("widthShow", val);
    },
    async onSearch() {
      let parm = {
        name: this.search
      };
      let res = await Search(parm).then();
      try {
        if(res.code === 0){
          console.log(res);
          this.searhData = res.param
        }
      }catch (error) {
        window.console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.go-back {
  width: 30px;
  color: #999;
}
</style>