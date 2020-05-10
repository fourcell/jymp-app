import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './home/index'
import GroupBooking from './group-booking/index'
import MyMessage from './my-message/index'
import ShoppingTrolley from './shopping-trolley/index'
import Register from './register/index'
import Login from './login/index'
import myOrder from "./my-order/index";
import myCollection from "./my-collection/index";
import myLocation from "./my-location/index";
import myContact from "./my-contact/index";
import setup from "./setup/index";
import payment from "./payment/index";
import sendGoods from "./send-goods/index";
import goodsReceived from "./goods-received/index";
import taking from "./taking/index";
import detailPages from "./detail-pages/index";
import sureOrder from "./sureorder/index";

const routes = [
  {
    path: "/manage",
    name: "manage",
    alias: "/",
    redirect: "home/recommend",
    component: () => import("../pages/index.vue"),
    children: [...Home, ...GroupBooking, ...MyMessage, ...ShoppingTrolley],
  },
  ...Register,
  ...Login,
  ...myOrder,
  ...myCollection,
  ...myLocation,
  ...myContact,
  ...setup,
  ...payment,
  ...sendGoods,
  ...goodsReceived,
  ...taking,
  ...detailPages,
  ...sureOrder
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router