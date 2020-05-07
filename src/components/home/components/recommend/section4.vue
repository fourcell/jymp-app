<template lang="html">
  <section class="section4">
    <!-- <h2 class="section4-title">
      section4
      <i class="icon-right"></i>
    </h2> -->
    <ul class="section4-list">
      <li v-for="k in data" :key='k.id'>
        <router-link :to="{name:'详情页'}">
          <img :src="k.imgPath">
          <p>{{k.info}}</p>
        </router-link>
        <h3>【聚美直发】</h3>
        <span>$ {{k.price}}</span>
      </li>
    </ul>
    <router-link :to="{name:'分类页'}" class="section4-banner">
      <img src='http://mp5.jmstatic.com//jmstore/image/000/009/9255_std/5eaa474e1fc5e_2048_710.jpg?1588238336&imageView2/2/w/800/q/90'>
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
          data:[
              {
                imgPath:'http://mp5.jmstatic.com/product/005/088/5088216_std/5088216_1000_1000.jpg?v=1578537610&imageView2/2/w/440/q/90',
                info:'便携纳米喷雾补水蒸脸器保湿嫩肤女冷喷机活肤仪',
                price:'198'
              },
              {
                imgPath:'http://mp5.jmstatic.com/product/005/088/5088214_std/5088214_1000_1000.jpg?v=1577151185&imageView2/2/w/440/q/90',
                info:'洗脸仪电动女洁面仪毛孔清洁器脸部洗面仪洁面仪',
                price:'99'
              },
              {
                imgPath:'http://mp6.jmstatic.com/product/005/086/5086578_std/5086578_1000_1000.jpg?v=1578538565&imageView2/2/w/440/q/90',
                info:'牙结石去除器洁牙器去除牙石牙垢超声波速效溶解去除',
                price:'298'
              },
              {
                imgPath:'http://mp6.jmstatic.com/product/005/087/5087188_std/5087188_1000_1000.jpg?v=1578538817&imageView2/2/w/440/q/90',
                info:'美眼仪眼睛按摩棒眼部按摩仪器去导入眼袋黑眼',
                price:'198'
              },
          ]
      }
  },
}
</script>

<style lang="scss" scoped>
.section4 {
  width: 100%;
  margin-top: 10px;
  overflow: hidden;
  .section4-list {
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    overflow: hidden;
    li {
      width: 48%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 10px;
      margin: 0 2px 5px 2px;
      background: #fff;
      a {
        display: block;
        width: 100%;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: gold;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 1.2vw 2vw;
        }
      }

      > h3 {
        padding-top: 3vw;
        // .fz(font-size,40);
      }
      > span {
        display: inline-block;
        padding-bottom: 3vw;
        color: #b4282d;
      }
    }
  }

  .section4-banner {
    width: 100%;
    display: block;
    margin-bottom: 5px;

    img {
      display: block;
      width: 100%;
    }
  }
}
</style>
