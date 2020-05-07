<template>
  <section class="section2">
    <div class="section2-list">
      <ul>
        <li v-for="k in 10" :key="k.id">
          <router-link :to="{name:'详情页'}">
            <img :src="imgPath">
          </router-link>
          <h2 class="section2-list-title ac">【手机专享】</h2>
          <p class="section2-list-intro">薇诺娜青刺果修护保湿喷雾50ml舒缓修护保湿 </p>
          <p class="section2-list-price">
            ￥180</p>
        </li>
      </ul>
    </div>
    <router-link class="section2-banner" :to="{name:'详情页'}">
      <img src="http://mp6.jmstatic.com//jmstore/image/000/007/7950_std/5e9e68318e36c_2048_710.jpg?1588140114&imageView2/2/w/800/q/90">
    </router-link>
  </section>
</template>

<script>
export default {
  props: {
    banner: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
      return {
        imgPath:[
            'http://mp6.jmstatic.com/product/004/904/4904490_std/4904490_1000_1000.jpg?v=1584527019&imageView2/2/w/440/q/90',
            'http://mp6.jmstatic.com/product/004/900/4900234_std/4900234_1000_1000.jpg?v=1584410791&imageView2/2/w/440/q/90',
            'http://mp6.jmstatic.com/product/004/884/4884194_std/4884194_1000_1000.jpg?v=1587540192&imageView2/2/w/440/q/90',
            'http://mp6.jmstatic.com/product/004/967/4967034_std/4967034_1000_1000.jpg?v=1587107383&imageView2/2/w/440/q/90'
        ]  
      }
  },
}
</script>

<style lang="scss" scoped>
.section2-list {
  overflow-x: auto;
  width: 100%;
  /*原生滑动*/
  -webkit-overflow-scrolling: touch;
  ul {
    display: flex;
    padding: 2vw;
    width: 462%;
    li {
      margin-right: 4vw;
      width: 160px;
      background: #fff;
      a,img {
        display: block;
        width: 100%;
      }

      h2,p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      h2 {
        font-size: 16px;
        padding-top: 3vw;
        color: #333;
      }

      p.section2-list-intro {
        padding-top: 2vw;
        font-size: 12px;
        color: rgb(150, 150, 150);
      }

      p.section2-list-price {
        color: #b4282d;
      }
    }
  }
}

.section2-banner {
  display: block;
  width: 100vw;
  margin-bottom: 10px;
  img {
    display: block;
    height: 180px;
    width: 100%;
  }
}
</style>
