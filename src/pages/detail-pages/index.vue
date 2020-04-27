<template>
  <div>
    <DatailGood />
    <DataShopping />
    <DatailFooter />
  </div>
</template>
<script>
import DatailGood from "../../components/detail-pages/datail-good";
import DataShopping from "../../components/detail-pages/datail-shopping";
import DatailFooter from "../../components/detail-pages/datail-footer";
export default {
  components: {
    DatailGood,
    DataShopping,
    DatailFooter
  }
};
</script>