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
        <div v-show="widthShow" class="go-back">搜索</div>
      </template>
      <template #left>
        <div v-show="widthShow" class="go-back" @click="onWindthShow(false)">
          <van-icon name="arrow-left" />
        </div>
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
  computed: {
    widthShow() {
      return this.$store.state.widthShow;
    }
  },
  methods: {
    onGoBack() {
      this.$store.commit("show", false);
    },
    onWindthShow(val) {
      this.$store.commit("widthShow", val);
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