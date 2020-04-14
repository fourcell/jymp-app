<template>
<!-- 首页 - 首页 - card -->
  <div>
    <overlaySwipe />
    <overlayCard />
  </div>
</template>
<script>
import overlaySwipe from "../../components/recommend/recommend-swipe";
import overlayCard from "../../components/recommend/recommend-card";
export default {
  components: {
    overlaySwipe,
    overlayCard
  }
};
</script>