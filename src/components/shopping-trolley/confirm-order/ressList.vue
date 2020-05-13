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
import {setOrder} from '../../../api/serve/shopping/index'
import {getcookie} from "../../../api/common";
import { Dialog } from "vant";
export default {
  props:['goodlist'],
  data() {
    return {
      chosenAddressId: '1',
      addressShow:true,
      price:0,
      p_id:0,
      p_num:0,
      sku_id:0,
      order_time:'',
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
    async onAdd() {
      let userId = getcookie("userId")
      let parm = {
        o_num: 1,
        p_id: this.p_id,
        p_num: this.p_num,
        u_id: userId,
        s_id: this.sku_id,
        phone: this.list[0].tel,
        adderss: this.list[0].address,
        order_time: this.order_time,
        order_way: 2,
        pay_time: this.order_time,
        total: this.price,
        pay_total: this.price,
        remark: 'null',
        validstatus: 1,
        is_delete: 1
      }
      let res = await setOrder(parm).then();
      try {
        if (res.code === 0) {
          Dialog.alert({
            message: '支付成功'
          }).then(() => {
            this.$router.push({ path: "/manage/home/recommend"})
          });
        } else {
          Dialog.alert({
            message: res.msg
          }).then(() => {
          });
        }
      } catch (error) {
        window.console.log(error);
      }
    },
    onEdit() {
      this.$router.push({ path: "/myLocation",query:{goodlist:this.goodlist,entrance:'1'} });
    },
  },
  created() {
    //获取当前时间并转换格式
    let time = new Date().getTime()
    let timesplit = ((new Date(time).toLocaleString()).split(' ')[0]).split('/')
    if(timesplit[1] < 10 && timesplit[2] > 10){
      this.order_time = `${timesplit[0]}-0${timesplit[1]}-${timesplit[2]}`;
    }else if(timesplit[1] > 10 && timesplit[2] < 10){
      this.order_time = `${timesplit[0]}-${timesplit[1]}-0${timesplit[2]}`;
    }else if(timesplit[1] < 10 && timesplit[2] < 10){
      this.order_time = `${timesplit[0]}-0${timesplit[1]}-0${timesplit[2]}`;
    }else{
      this.order_time = `${timesplit[0]}-${timesplit[1]}-${timesplit[2]}`;
    }


    if(this.goodlist){
        this.goodlist.forEach(item => {
        this.price += item.vip_price*item.num
        this.p_num = item.num
        this.p_id = item.product_id
        this.sku_id = item.sku_id
      });
      if(this.$route.query && this.$route.query.address){
        this.list[0] = this.$route.query.address
        this.chosenAddressId = this.$route.query.address.id
      }
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