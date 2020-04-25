<template>
  <div>
    <DatailTitle />
    <DatailGood />
    <DataShopping />
  </div>
</template>
<script>
import DatailTitle from "../../components/detail-pages/datail-title";
import DatailGood from "../../components/detail-pages/datail-good";
import DataShopping from "../../components/detail-pages/datail-shopping";
export default {
  components: {
    DatailTitle,
    DatailGood,
    DataShopping
  }
};
</script>