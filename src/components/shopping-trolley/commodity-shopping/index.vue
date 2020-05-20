<template>
<div class="shopping_box">
  <EmptyShopping v-if="list.length == 0"/>
  <div v-else class="all-shopping">
    <div class="commodit-shopping">
      <div class="shopping-card" v-for="(item,index) in list" :key="index">
        <div class="card-checked">
            <van-checkbox 
            v-model="item.checked"
            @change="choose(index)"
            checked-color="#fe4070" 
            icon-size="20px" 
            />
        </div>
        <div class="card-img">
          <van-image width="120" height="130" :src="item.img" />
        </div>
        <div class="card-conent">
          <p class="card-conent__titlel" v-text="'【'+item.p_name+'】'+item.p_title"></p>
          <p class="card-conent__sub" v-show="item.updateShow">
            <span>{{item.color + '，' + item.name}}</span>
            <span v-text="'x'+item.num"></span>
          </p>
          <p class="card-conent__stepper" v-show="!item.updateShow">
            <van-stepper v-model="item.num" min="1" :max="item.stock" ref="mun_box" />
          </p>
          <div class="card-conent__price">
            <span class="price" v-text="'￥'+item.vip_price"></span>
            <van-button plain type="primary" round  size="small" v-show="item.updateShow" @click="edit(index)">编辑</van-button>
            <p class="compile" v-show="!item.updateShow">
              <van-button plain type="primary" round  size="small" style="margin-right: 4px" @click="deleData">删除</van-button>
              <van-button plain type="primary" round  size="small" @click="onUpdateShow(item.num,index)">完成</van-button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="Allprice" button-text="去结算" @submit="onSubmit">
      <div>
          <div>
            <van-checkbox
              v-model="checked"
              checked-color="#fe4070" 
              icon-size="20px" 
              @click="allCheck"
            >全选</van-checkbox>
          </div>
          <van-button v-show="isShow" round  size="mini" v-model="checked" class="lyy_del" @click="deleteData" type="danger">全删</van-button>
      </div>
    </van-submit-bar>
  </div>
</div>
</template>
<script>
import { getShopping, deleteShopping, setShopping } from "../../../api/serve/shopping/index";
import {getcookie} from "../../../api/common";
import { Dialog, Toast} from "vant";
import EmptyShopping from '../empty-shopping/index'

export default {
  components:{EmptyShopping},
  data() {
    return {
      updateShow: true,
      isShow:false,
      checked: false,
      Allprice:0,
      list:[]
    };
  },
  created() {
    this.getData()
  },
  methods: {
    //全选
    allCheck() {
      let a = !this.checked;
      this.list = this.list.map(e => {
        e.checked = a;
        return e;
      });
      if(this.checked === true){
        this.isShow = true
      }else(
        this.isShow = false
      )
    },
    //单选
    choose(index) {
      let priceArr = []
      let checkArr = []
      let price = Number
      let s = 0
      let a = true;
      if(this.list[index].checked === true){
        this.Allprice += this.list[index].vip_price * this.list[index].num * 100
      } else {
        this.Allprice -= this.list[index].vip_price * this.list[index].num * 100
      }
      
      this.list.forEach(e => {
        price = e.vip_price * e.num * 100
        priceArr.push(price)
        if (e.checked === false) {
          a = false;
        }else{
          checkArr.push(index)
        }
      });
      this.checked = a;
      
      if(this.checked === true){
        this.isShow = true

        //全选时计算总额，循环数组相加
        for(let i = 0; i< priceArr.length; i++){
          s += priceArr[i]
        }
        this.Allprice =  s 
      }else{
        this.isShow = false
        if(checkArr.length === 0){
          this.Allprice = 0
        }
      }
    },
    //全删
    deleteData() {
      let arr = [];
      this.list.forEach(e => {
        e.checked ? 0 : arr.push(e);
      });
      this.list = arr;
    },
    //单删
    deleData(){
      Dialog.confirm({
        message: '确认删除这个宝贝？'
      }).then(async() => {
        let userId = getcookie("userId");
        let skuid = this.list[0].sku_id
        let res = await deleteShopping(userId,skuid).then();
        try {
          if (res.code == 0) {
            this.getData();
          } 
        } catch (error) {
          window.console.log(res);
        }
        }).catch(() => {});
      
    },
    //获取购物车商品信息
    async getData(){
       let userId = getcookie("userId");
       let res = await getShopping(userId).then();
      try {
        if (res.code == 0) {
          this.list = res.payload;
          console.log(this.list);
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
    //修改商品数量
    onUpdateShow(num,index) {
      this.updateShow = !this.updateShow;
      let userId = getcookie("userId");
      let skuId = this.list[index].sku_id
      let procuctId = this.list[index].product_id
      let parm = {
          skuId: skuId, //skuID
          userId: userId,  //用户id
          procuctId: procuctId,    //商品id
          shoppingNumber: num //购买数量
        };
        setShopping(parm).then(data => {
          window.console.log(data);
        });
        this.list[index].updateShow = true
    },
    //点击编辑操作按钮出现
    edit(index){
      this.list[index].updateShow = false
    },
    onSubmit() {
      if(this.Allprice === 0) {
        Toast.fail('还没有选中商品哦！');
      }else{
        let selected = []
        selected = this.list.filter(item => item.checked === true)
        this.$router.push({ path: "/sureOrder", query:{list:selected}});
      }
    }
  }
};
</script>
<style lang="scss">
.shopping_box{
  width: 100%;
  height: 100%;
}
.lyy_del{
  position: absolute;
  left: 85px;
  top: 14px;
  font-size: 12px;
  // background: #fe4070;
}
.all-shopping {
  height: 100%;
  width: 100%;
  margin-bottom: 100px;
  .commodit-shopping {
    position: relative;
    height: 100%;
    overflow: scroll;
    width: 100%;
    background-color: #f5f5f5;
    .shopping-card {
      background-color: #fff;
      padding: 10px 0;
      margin-top: 10px;
      padding-left: 8px;
      display: flex;
      height: 115px;
      // width: 100%;
      align-items: center;
      .card-img {
        padding-left: 8px;
      }
      .card-conent {
        // padding: 0 12px;
        height: 100%;
        width: 190px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .card-conent__titlel {
          color: #333;
          font-size: 15px;
          height: 35px;
        }
        .card-conent__sub {
          color: #999;
          font-size: 12px;
          display: flex;
          line-height: 30px;
          height: 38px;
          justify-content: space-between;
        }
        .card-conent__stepper {
          .van-stepper {
            padding: 5px 0;
            .van-stepper__plus,
            .van-stepper__minus {
              border-radius: 50%;
              background-color: #fff;
              border: 1px solid #ccc;
              width: 22px;
              height: 22px;
            }
            .van-stepper__input {
              background-color: #fff;
            }
          }
        }
        .card-conent__price {
          color: #333;
          font-size: 16px;
          display: flex;
          line-height: 30px;
          justify-content: space-between;
          .price {
            color: #fe4070;
            font-size: 16px;
          }
          .compile {
            span {
              display: inline-block;
              padding: 0 5px;
              line-height: 16px;
            }
           
          }
        }
      }
    }
  }
  .van-submit-bar {
    height: 50px;
    width: 100%;
    bottom: 50px;
  }
}
.van-submit-bar__button {
    width: 75px;
}
</style>