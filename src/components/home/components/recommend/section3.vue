<template lang="html">
  <section class="section3">
    <ul class="section3-list">
      <li v-for="k in list" :key='k.id'>
        <div class="section3-list-left">
          <h4>【澳洲直邮】</h4>
          <p class="start"> Starts at </p>
          <van-count-down :time="time">
                <template v-slot="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
        </div>
        <router-link :to="{name:'分类页'}" class="section3-list-right">
          <img :src="k.imgPath">
          <span>${{k.price}}</span>
        </router-link>
      </li>
    </ul>
    <router-link :to="{name:'分类页'}" class="section3-banner">
      <img src='http://mp6.jmstatic.com//jmstore/image/000/009/9008_std/5ea95effea013_2048_710.jpg?1588332544&imageView2/2/w/800/q/90'>
    </router-link>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        time: 30 * 60 * 60 * 1000,
        list:[
            {
                imgPath:'http://mp6.jmstatic.com/product/004/900/4900234_std/4900234_1000_1000.jpg?v=1584410791&imageView2/2/w/440/q/90',
                price:'398'
            },
            {
                imgPath:'http://mp6.jmstatic.com/product/004/884/4884194_std/4884194_1000_1000.jpg?v=1587540192&imageView2/2/w/440/q/90',
                price:'198'
            },
            {
                imgPath:'http://mp6.jmstatic.com/product/004/967/4967034_std/4967034_1000_1000.jpg?v=1587107383&imageView2/2/w/440/q/90',
                price:'288'
            },
            {
                imgPath:'http://mp5.jmstatic.com/product/005/020/5020322_std/5020322_1000_1000.jpg?v=1578475059&imageView2/2/w/440/q/90',
                price:'129'
            },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .section3 {
    width: 100%;
    .section3-list {
      width: 100%;
      margin-bottom: 10px;
      li {
        display: flex;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        width: 100%;
        margin-top: 10px;
        .section3-list-left {
          padding-top: 10vw;
          padding-left: 20px;
          width: 50%;
          h4 {
            line-height: 4.8vw;
            margin-bottom: 7.2vw;
            letter-spacing: 0.42vw;
          }
          .colon {
                display: inline-block;
                margin: 0 4px;
                color: #ee0a24;
            }
            .block {
                display: inline-block;
                width: 22px;
                color: #fff;
                font-size: 12px;
                text-align: center;
                background-color: #ee0a24;
            }
          .start {
            letter-spacing: 0.3vw;
          }
        }

        .section3-list-right {
          width: 40%;
          display: block;
          padding-top: 10px;
          margin-bottom: 10px;
          position: relative;
          img {
            display: block;
            width: 100%;
            background-color: gold;
          }
          span {
            padding: .3vw 1.2vw;
            border-radius: 1vw;
            text-align: center;
            position: absolute;
            bottom: .4vw;
            right: .2vw;
            // background-color: @cl;
            color: #ee0a24;
            // .fz(font-size,24);
          }
        }
      }
    }

    .section3-banner {
      display: block;
      width: 100%;
      margin-bottom: 10px;

      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
