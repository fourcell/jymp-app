<template>
    <van-address-list
    v-model="chosenAddressId"
    :add-button-text="'立即支付￥'+price.toFixed(2)"
    :list="list"
    @add="onAdd"
    @edit="onEdit"
    />
</template>
<script>
export default {
  props:['goodlist'],
  data() {
    return {
      chosenAddressId: '1',
      addressShow:true,
      price:0,
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        }
      ],
    };
  },
  methods: {
    onAdd() {
      this.$emit("addList",this.addressShow)
    },
    onEdit() {
      this.$router.push({ path: "/myLocation",query:{goodlist:this.goodlist,entrance:'1'} });
    },
  },
  created() {
    this.goodlist.forEach(item => {
      this.price += item.vip_price*item.num
    });
    if(this.$route.query && this.$route.query.address){
      this.list[0] = this.$route.query.address
      this.chosenAddressId = this.$route.query.address.id
    }
  },
};    

</script>
<style scoped>
.van-address-list {
    padding: 12px 12px 30px;
    height: 110PX;
}
</style>