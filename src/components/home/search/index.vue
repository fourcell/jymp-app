<template>
  <div class="search">
    <van-search
      v-model="search"
      show-action
      shape="round"
      placeholder="搜索商品名称、品牌、功效"
      @search="onSearch"
      @click="onWindthShow"
    >
      <template #action>
        <div @click="onSearch" class="iconfont icon-sousuo"></div>
      </template>
    </van-search>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  methods: {
    //搜索
    onSearch() {
      this.$store.commit("show", true);
    },
    onWindthShow() {
      this.$store.commit("show", true);
      this.$store.commit("widthShow", true);
      this.search = ''
    }
  }
};
</script>