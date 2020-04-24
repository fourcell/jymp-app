<template>
    <div >
      <Title/>
      <AddressList/>
    </div>
</template>
<script>
import Title from '.././var.vue'
import AddressList from './addressList/index'
export default {
  components: {
    Title,
    AddressList,
  },
};
</script>
<style scoped>
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>