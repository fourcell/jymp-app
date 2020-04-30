<template>
  <div class="overlay-swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [
        "http://mp6.jmstatic.com//jmstore/image/000/008/8558_std/5e7f00a342bdb_2048_710.jpg?1585733600&imageView2/2/w/800/q/90",
        "http://mp5.jmstatic.com//jmstore/image/000/008/8403_std/5e7abe83ce180_2048_710.jpg?1585882401&imageView2/2/w/800/q/90"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.overlay-swipe {
  height: 150px;
  width: 100%;
  .van-swipe {
    transform: translateZ(0);
    img {
      width: 100%;
      height: 150px;
    }
  }
}
</style>