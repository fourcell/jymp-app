<template>
  <div>
    <van-overlay :show="show" @click="onShow">
      <div :class="['wrapper',this.widthShow?'wrapper-avter':'']" @click.stop>
        <div class="block">
          <OverlaySearch />
          <OverlayList />
        </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import OverlaySearch from "../components/overlay/overlay-search";
import OverlayList from "../components/overlay/overlay-list";
export default {
  components: {
    OverlaySearch,
    OverlayList
  },
  data() {
    return {};
  },
  computed: {
    show() {
      return this.$store.state.show;
    },
    widthShow() {
      return this.$store.state.widthShow;
    }
  },
  methods: {
    onShow() {
      this.$store.commit("show", false);
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  right: 0;
  height: 100%;
  width: 85%;
}
.wrapper-avter {
  width: 100%;
}
.block {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>