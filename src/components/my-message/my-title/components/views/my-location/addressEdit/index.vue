<template>
    <van-address-list
    v-model="chosenAddressId"
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    @select='onSelect'
    />
</template>
<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      chosenAddressId: '1',
      addressShow:true,
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$emit("addList",this.addressShow)
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    onSelect(item){
      if(this.$route.query && this.$route.query.entrance === '1'){
        this.$router.push({ path: "/sureOrder",query:{list:this.$route.query.goodlist, address:item} })
      }
    }
  },
};    

</script>