<template>
  <div class="my-title">
    <Title />
    <Log />
    <Bottom />
  </div>
</template>
<script>
import Title from "./components/titlle";
import Log from "./components/log";
import Bottom from "./components/bottom";
export default {
  components: {
    Title,
    Log,
    Bottom
  }
};
</script>
<style lang="scss" scoped>
.my-title {
  height: 150px;
  background-image: linear-gradient(-204deg, #fd465f 0, #fc5e9f 100%);
}
</style>