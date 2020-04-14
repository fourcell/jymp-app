<template>
  <div class="shopping-trolley">
    <Shopping />
    <EmptyShopping />
  </div>
</template>
<script>
import Shopping from "../../components/shopping-trolley/shopping-title/index";
import EmptyShopping from "../../components/shopping-trolley/components/empty-shopping";
export default {
  components: {
    Shopping,
    EmptyShopping
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
}
</style>