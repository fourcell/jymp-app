<template>
  <div class="empty-shopping">
    <div class="shopping-oops">
      <div class="oops avnter">
        <img :src="noCardops" alt />
      </div>
      <div class="empty-cart avnter">
        <p>您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
      </div>
      <div class="go-stroll avnter">
        <van-button round type="info" color="#fe4070" @click="onStroll">去逛逛</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import noCardops from "../../../assets/no-card-oops.png";
export default {
  data() {
    return {
      noCardops
    };
  },
  methods: {
    onStroll() {
      this.$router.push('/manage/home/recommend')
    }
  }
};
</script>
<style lang="scss" scoped>
.avnter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
}
.empty-shopping {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .shopping-oops {
    .oops {
      img {
        width: 86px;
        height: 82px;
      }
    }
    .empty-cart {
      font-size: 14px;
    }
    .go-stroll {
      .van-button {
        height: 36px;
        width: 125px;
        line-height: 36px;
      }
    }
  }
}
</style>