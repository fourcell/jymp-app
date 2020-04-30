<template>
    <div >
      <Title/>
      <ReceivedContent/>
    </div>
</template>
<script>
import Title from '.././var'
import ReceivedContent from './received-content/index'
export default {
   components: {
    Title,
    ReceivedContent
  },
}
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>