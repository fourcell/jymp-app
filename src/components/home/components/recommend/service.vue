<template lang="html">

  <div class="service">
    <ul>
      <li><van-icon name="certificate" color="rgb(254, 64, 112)" /><span>自营品牌</span></li>
      <li><van-icon name="certificate" color="rgb(254, 64, 112)" /><span>无忧退货</span></li>
      <li><van-icon name="certificate" color="rgb(254, 64, 112)" /><span>48小时快速退款</span></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
    ul {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-around;
    }
    li {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        align-items: center;
        padding: 3.3vw 0;
      }
    span {
           padding-left: 1vw;
           font-size: 12px;
        }
    i {
        font-size: 20px;
      }
</style>
