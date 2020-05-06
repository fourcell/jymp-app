<template>
<div>
  <EmptyShopping v-if="list.length == 0"/>
  <div v-else class="all-shopping">
    <div class="commodit-shopping">
      <div class="shopping-card" v-for="item in list" :key="item">
        <div class="card-checked">
          <van-checkbox v-model="checked" checked-color="#fe4070" icon-size="20px" />
        </div>
        <div class="card-img">
          <van-image width="120" height="130" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </div>
        <div class="card-conent">
          <p class="card-conent__titlel" v-text="'【'+item.p_name+'】'+item.p_title">【15号十点开售】完美日记天赋干皮粉底液深水弹女保湿持久干皮</p>
          <p class="card-conent__sub" v-show="updateShow">
            <span>{{item.describes}}</span>
            <span v-text="'x'+item.num"></span>
          </p>
          <p class="card-conent__stepper" v-show="!updateShow">
            <van-stepper v-model="value" min="5" max="8" />
          </p>
          <div class="card-conent__price">
            <span class="price" v-text="'￥'+item.vip_price"></span>
            <van-button plain type="primary" round  size="small" v-show="updateShow" @click="onUpdateShow">编辑</van-button>
            <p class="compile" v-show="!updateShow">
              <van-button plain type="primary" round  size="small" style="margin-right: 4px">删除</van-button>
              <van-button plain type="primary" round  size="small" @click="onUpdateShow">完成</van-button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <van-submit-bar :price="3050" button-text="去结算" @submit="onSubmit">
      <van-checkbox checked-color="#fe4070" v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</div>
</template>
<script>
import { getShopping } from "../../../api/serve/shopping/index";
import {getcookie} from "../../../api/common";
import { Dialog } from "vant";
import EmptyShopping from '../empty-shopping/index'
export default {
  components:{EmptyShopping},
  data() {
    return {
      updateShow: true,
      checked: true,
      value: 1,
      list:[]
    };
  },
  created() {
    this.getData()
  },
  methods: {
     async getData(){
       let userId = getcookie("userId");
       let res = await getShopping(userId).then();
      try {
        if (res.code == 0) {
          this.list = res.payload;
          window.console.log(res);
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
    onUpdateShow() {
      this.updateShow = !this.updateShow;
    },
    onSubmit() {}
  }
};
</script>
<style lang="scss">
.all-shopping {
  height: 100%;
  .commodit-shopping {
    position: relative;
    height: 100%;
    overflow: scroll;
    width: 100%;
    padding-bottom: 110px;
    background-color: #f5f5f5;
    .shopping-card {
      background-color: #fff;
      padding: 10px 0;
      margin-top: 10px;
      padding-left: 8px;
      display: flex;
      height: 150px;
      align-items: center;
      .card-img {
        padding-left: 8px;
      }
      .card-conent {
        padding: 0 12px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .card-conent__titlel {
          color: #333;
          font-size: 15px;
        }
        .card-conent__sub {
          color: #999;
          font-size: 12px;
          display: flex;
          line-height: 30px;
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
</style>