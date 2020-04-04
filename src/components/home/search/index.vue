<template>
  <div class="search">
    <van-search
      v-model="search"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
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
      window.console.log(this.search);
    }
  }
};
</script>