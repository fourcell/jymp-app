<template>
  <div class="shopping-trolley">
    <Shopping />
    <CommodityShopping />
  </div>
</template>
<script>
import Shopping from "../../components/shopping-trolley/shopping-title/index";
import CommodityShopping from '../../components/shopping-trolley/commodity-shopping/index'
export default {
  components: {
    Shopping,
    CommodityShopping
  }
};
</script>
<style lang="scss" scoped>
.shopping-trolley {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .empty-shopping {
    flex: 1;
  }
  .commodit-shopping{
    flex: 1;
    background-color: #f5f5f5;
  }
}
</style>