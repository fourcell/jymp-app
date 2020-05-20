<template>
  <div class="tab-title">
    <Title/>
    <div class="box">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for="(item,index) in title" :key="index" :title="item" />
      </van-sidebar>
      <Card class="list_right" :gridList="gridList" />
    </div>
  </div>
</template>
<script>
import Card from "../viwes/card";
import Title from "../../shopping-trolley/shopping-title/index";
import { appSelect } from "../../../api/serve/home/index";

export default {
  components: {
    Card,
    Title
  },
  data() {
    return {
      activeKey: 0,
      title: ["推荐","美妆","母婴健康", "内衣","女装","箱包皮具","鞋类","家居","食品保健","下期预告"],
      gridList: [],
      goods: {
        '0': [
          {
            imgUrl: 'http://mp6.jmstatic.com/product/005/137/5137944_std/5137944_1000_1000.jpg?v=1579079337&imageView2/2/w/440/q/90',
            text: '防晒喷雾'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/051/5051586_std/5051586_1000_1000.jpg?v=1571278193&imageView2/2/w/440/q/90',
            text: '粉饼'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/953/4953828_std/4953828_1000_1000.jpg?v=1563431097&imageView2/2/w/440/q/90',
            text: 'Sw胶原蛋白片'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/154/5154412_std/5154412_1000_1000.jpg?v=1587954419&imageView2/2/w/440/q/90',
            text: '欧莱雅小黑瓶'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/003/963/3963492_std/3963492_1000_1000.jpg?v=1532507058&imageView2/2/w/440/q/90',
            text: '迷情唇釉'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/005/028/5028040_std/5028040_1000_1000.jpg?v=1577960298&imageView2/2/w/440/q/90',
            text: '神仙水乳套装'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/15/197/ias_957b9a1b598b52488f5438d97fe8c705_120x120_90.png',
            text: '洗发护发'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/11/15/60/ias_db82ab735d86ab6feb324545ba239c42_120x120_90.png',
            text: '牙膏'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/11/27/106/ias_492a1e25461b16fcffc368d8e794899d_120x120_90.png',
            text: '手足护理'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/15/147/ias_fdfd7adcd105b3cf5123ac7264fc09d3_120x120_90.png',
            text: '斯凯奇'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/14/157/ias_bc609d5c4293a2e529d17e351ebf5f9a_120x120_90.png',
            text: '耐克'
          },
          {
            imgUrl: 'https://a.appsimg.com/upload/merchandise/pdcvis/2020/03/27/6/a4d52612-f9e0-4780-bc30-d626c176e928_420_531_120x120_90.jpg!75.webp',
            text: '阿迪达斯'
          },
          {
            imgUrl: 'https://a.appsimg.com/upload/merchandise/pdcvis/104218/2020/0420/173/5afc462f-d367-4562-b9fa-db7615946223_420_531_120x120_90.jpg!75.webp',
            text: '巴拉巴拉'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/879/4879988_std/4879988_1000_1000.jpg?v=1576895072&imageView2/2/w/440/q/90',
            text: '香体乳'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/841/4841164_std/4841164_1000_1000.jpg?v=1558422165&imageView2/2/w/440/q/90',
            text: '卡通连衣裙'
          }
        ],
        '4': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/10/22/20/15717101185745_120x120_90.jpg',
            text: 'T恤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/07/04/30/15622214817122_120x120_90.jpg',
            text: '衬衫'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/10/19/146/ias_f64716c53994bdbdb2339bd48039797b_120x120_90.png',
            text: '针织衫'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/09/20/186/15374407517095_120x120_90.png',
            text: '卫衣'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/10/18/151/ias_2760ef39bb3ff758af413d6779cab52e_120x120_90.png',
            text: '毛衣'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/09/20/6/15374404957643_120x120_90.png',
            text: '风衣'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/02/24/38/9272911f-1fcd-4d8d-954d-ef8fc8e7f24f_120x120_90.jpg',
            text: '西装外套'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/09/20/142/15374405563607_120x120_90.png',
            text: '棒球服'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/08/24/129/15351130269783_120x120_90.jpg',
            text: '针织外套'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/02/26/68/15196478636599_120x120_90.jpg',
            text: '牛仔裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/11/21/66/15427963696708_120x120_90.png',
            text: '阔腿裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/07/04/186/15622216523313_120x120_90.jpg',
            text: '短裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/04/25/1/15246473217940_120x120_90.jpg',
            text: '连体/背带裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/02/26/54/15196480197088_120x120_90.jpg',
            text: '打底裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/10/22/151/15717104531666_120x120_90.jpg',
            text: '连衣裙'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/06/11/11/15286886223150_120x120_90.png',
            text: '半身裙'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/07/04/0/15622103775507_120x120_90.jpg',
            text: '旗袍'
          }
        ],
        '2': [
          {
            imgUrl: 'http://mp6.jmstatic.com/product/005/154/5154150_std/5154150_1000_1000.jpg?v=1586230678&imageView2/2/w/440/q/90',
            text: '儿童内衣套装'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/870/4870424_std/4870424_1000_1000.jpg?v=1576143007&imageView2/2/w/440/q/90',
            text: '纸尿'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/146/5146636_std/5146636_1000_1000.jpg?v=1583380649&imageView2/2/w/440/q/90',
            text: '婴儿洗衣液'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/844/4844226_std/4844226_1000_1000.jpg?v=1554110003&imageView2/2/w/440/q/90',
            text: '连体衣'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/170/5170872_std/5170872_1000_1000.jpg?v=1586325466&imageView2/2/w/440/q/90',
            text: '尿不湿'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/003/523/3523074_std/3523074_1000_1000.jpg?v=1557455126&imageView2/2/w/440/q/90',
            text: '超薄纸尿裤'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/696/4696150_std/4696150_1000_1000.jpg?v=1585211831&imageView2/2/w/440/q/90',
            text: '妈咪宝贝纸尿裤'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/978/4978498_std/4978498_1000_1000.jpg?v=1587538435&imageView2/2/w/440/q/90',
            text: '孕妇隔离霜'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/230/4230886_std/4230886_1000_1000.jpg?v=1587090315&imageView2/2/w/440/q/90',
            text: '保湿喷雾'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/005/175/5175248_std/5175248_1000_1000.jpg?v=1587007804&imageView2/2/w/440/q/90',
            text: '清洁面膜'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/168/5168052_std/5168052_1000_1000.jpg?v=1587964089&imageView2/2/w/440/q/90',
            text: '纸尿裤'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/117/4117380_std/4117380_1000_1000.jpg?v=1583549824&imageView2/2/w/440/q/90',
            text: '孕妇补水乳液'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/007/4007540_std/4007540_1000_1000.jpg?v=1588824244&imageView2/2/w/440/q/90',
            text: '补水保湿4件套'
          }
        ],
        '6': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/179/158806642829610362_120x120_90.png',
            text: '凉鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/190/158806641480910643_120x120_90.png',
            text: '单鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/119/15677383084975_120x120_90.jpg',
            text: '休闲鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/2/15677347017628_120x120_90.jpg ',
            text: '小白鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/61/15677346925235_120x120_90.jpg',
            text: '运动鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/133/15674284341232_120x120_90.jpg',
            text: '高跟鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/03/07/123/15519539714764_120x120_90.jpg',
            text: '老爹鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/121/158806233051010128_120x120_90.png',
            text: '乐福鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/02/05/81/158089052282310018_120x120_90.png',
            text: '帆布鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/30/163/158556763611110539_120x120_90.png',
            text: '后空鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/168/8debf144-0d6d-46ec-9cdf-f6d8adeb0a7f_120x120_90.jpg',
            text: '一脚蹬'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/04/23/72/15559999807598_120x120_90.jpg',
            text: '椰子鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/08/19/121/15661774772143_120x120_90.jpg',
            text: '板鞋'
          }
        ],
        '3': [
          {
            imgUrl: 'http://mp6.jmstatic.com/product/003/836/3836230_std/3836230_1000_1000.jpg?v=1578646603&imageView2/2/w/440/q/90',
            text: '浪莎内裤（'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/003/267/3267350_std/3267350_1000_1000.jpg?v=1502426078&imageView2/2/w/440/q/90',
            text: '浅口船袜'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/148/5148536_std/5148536_1000_1000.jpg?v=1585732005&imageView2/2/w/440/q/90',
            text: '蕾丝美背裹胸'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/838/4838068_std/4838068_1000_1000.jpg?v=1553664375&imageView2/2/w/440/q/90',
            text: '浪莎长筒丝袜'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/005/148/5148516_std/5148516_1000_1000.jpg?v=1585732606&imageView2/2/w/440/q/90',
            text: '运动美背抹胸'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/241/4241130_std/4241130_1000_1000.jpg?v=1584674869&imageView2/2/w/440/q/90',
            text: '性感文胸 '
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/862/4862954_std/4862954_1000_1000.jpg?v=1578303601&imageView2/2/w/440/q/90',
            text: '性感蕾丝内裤'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/583/4583552_std/4583552_1000_1000.jpg?v=1582168931&imageView2/2/w/440/q/90',
            text: '无钢圈文胸'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/145/5145670_std/5145670_1000_1000.jpg?v=1581935466&imageView2/2/w/440/q/90',
            text: '运动袜男袜子'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/073/5073338_std/5073338_1000_1000.jpg?v=1572606435&imageView2/2/w/440/q/90',
            text: '刺绣侧收文胸'
          }
        ],
        '5': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/27/15677358669712_120x120_90.jpg',
            text: '斜挎包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/02/03/56/15491828529383_120x120_90.jpg',
            text: '手提包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/11/56/15129737481735_120x120_90.jpg',
            text: '男/女钱包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/172/158806345093210469_120x120_90.png',
            text: '真皮包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/02/22/11/15193002178762_120x120_90.jpg',
            text: '单肩包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/21/12/15112541607351_120x120_90.jpg',
            text: '实用大包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/03/15/15096995407805_120x120_90.jpg',
            text: '手拿包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/03/133/15096997774559_120x120_90.jpg',
            text: '小方包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/18/131/15135888351749_120x120_90.jpg',
            text: '商务公文包'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/27/43/4e86cbf1-f608-477f-a16b-9285ce76c5d8_120x120_90.jpg',
            text: '单肩/斜挎包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/176/15677359812916_120x120_90.jpg',
            text: '双肩包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/06/116/15099352972207_120x120_90.jpg',
            text: '电脑包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/06/74/15099608361609_120x120_90.jpg',
            text: '钥匙包'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/01/02/122/17273453-ba8c-4c03-8457-7fcb133735ba_120x120_90.jpg',
            text: '零钱包'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/27/9/cc93c88c-757f-494d-a584-be3408846019_120x120_90.jpg',
            text: '旅行包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/08/03/39/15332855144298_120x120_90.jpg',
            text: '拉杆箱'
          }
        ],
        '8': [
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/977/4977546_std/4977546_1000_1000.jpg?v=1567501577&imageView2/2/w/440/q/90',
            text: '维生素C'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/953/4953828_std/4953828_1000_1000.jpg?v=1563431097&imageView2/2/w/440/q/90',
            text: 'Sw胶原蛋白片'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/978/4978074_std/4978074_1000_1000.jpg?v=1565596519&imageView2/2/w/440/q/90',
            text: 'Sw成人VD钙片'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/977/4977522_std/4977522_1000_1000.jpg?v=1565938490&imageView2/2/w/440/q/90',
            text: '左旋肉碱'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/079/5079906_std/5079906_1000_1000.jpg?v=1573091881&imageView2/2/w/440/q/90',
            text: '下半身减肥'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/005/016/5016518_std/5016518_1000_1000.jpg?v=1574678211&imageView2/2/w/440/q/90',
            text: '香辣素肉'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/549/4549852_std/4549852_1000_1000.jpg?v=1549935981&imageView2/2/w/440/q/90',
            text: '红糖姜茶'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/977/4977520_std/4977520_1000_1000.jpg?v=1577244988&imageView2/2/w/440/q/90',
            text: '咖啡固体饮料'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/977/4977534_std/4977534_1000_1000.jpg?v=1567501576&imageView2/2/w/440/q/90',
            text: '维生素C+E片'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/013/5013466_std/5013466_1000_1000.jpg?v=1571122086&imageView2/2/w/440/q/90',
            text: '皂角米雪燕'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/540/4540796_std/4540796_1000_1000.jpg?v=1556099112&imageView2/2/w/440/q/90',
            text: '阿胶糕'
          },
        ],
        '1': [
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/109/b8dffa5d-1f24-495c-bf70-6dd32af00699_120x120_90.png',
            text: '面膜'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/07/26/198/f7e46bb5-394a-4fb9-8020-1f4219daccbf_120x120_90.jpg',
            text: '面部精华'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/122/d20de9d6-30b9-4e9c-addf-827fe486b42a_120x120_90.png',
            text: '眼线笔'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/11/06/192/4ee9c39f-d28b-4290-bdc1-a309d9d946ac_120x120_90.png',
            text: '气垫bb'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/34/1fd89259-2a39-4fa0-bc47-f1f7cf7f1693_120x120_90.png',
            text: '眼影'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/07/26/39/7e651cc8-bfb9-4f05-bb71-37de270af534_120x120_90.jpg',
            text: '粉饼'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/132/b67020e0-27d5-4fb3-a1c0-6733d7e76ed3_120x120_90.png',
            text: '唇釉'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/08/28/162/15669864637720_120x120_90.jpg',
            text: '口红'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/199/f18e0192-fe58-4eb0-ac78-d1b9a76174f5_120x120_90.png',
            text: '睫毛膏'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/07/26/84/2f608ca5-b19d-4194-a0c7-c96e590d9d87_120x120_90.jpg',
            text: '腮红'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/05/14/105/15578170774520_120x120_90.png',
            text: '香水'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/02/24/47/6df78067-bb13-4e52-a2a8-96446aefa9d8_120x120_90.jpg',
            text: '美甲'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/01/19/21/44978c8f-47e9-4e59-b6c4-0b8c5437c256_120x120_90.png',
            text: '化妆棉'
          }
        ],
        '7': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/04/194/158329364749310749_120x120_90.png',
            text: '床上套件'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/02/01/152/46c44aa1-4a10-4f91-8d6e-df7328445980_120x120_90.png',
            text: '蚕丝被'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/11/24/193/a7d60b67-60b5-4d26-bd5c-246b65e5a854_120x120_90.png',
            text: '枕头'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/12/11/148/995c2c36-ecaa-4fce-853c-f0d538e9b606_120x120_90.png',
            text: '蚊帐'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/03/21/155/15216262975498_120x120_90.png ',
            text: '凉席'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2019/08/01/179/64fd01df-3d72-4241-b33a-c9004677d0d3_120x120_90.png',
            text: '床垫床褥'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/04/13/158329352915710385_120x120_90.png',
            text: '毛毯'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/03/14/108/15525599945957_120x120_90.jpg',
            text: '被芯'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/11/09/107/ad41b450-d857-46de-9b48-b61a8469a604_120x120_90.jpg',
            text: '电热毯'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/26/81/15142784568521_120x120_90.png',
            text: '抱枕'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/11/24/132/1106b76c-3755-4458-bdfa-1b489483d6bf_120x120_90.png',
            text: '坐垫'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/26/99/15142785816146_120x120_90.png',
            text: '窗帘'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/03/06/174/15203038617754_120x120_90.png',
            text: '地毯'
          }
        ],
        '9':[
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/977/4977316_std/4977316_1000_1000.jpg?v=1584669673&imageView2/2/w/440/q/90',
            text: '三色隔离霜'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/005/034/5034562_std/5034562_1000_1000.jpg?v=1576907248&imageView2/2/w/440/q/90',
            text: '淡皱消保湿'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/158/5158042_std/5158042_1000_1000.jpg?v=1587890810&imageView2/2/w/440/q/90',
            text: '小棕瓶6件套'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/899/4899406_std/4899406_1000_1000.jpg?v=1584334145&imageView2/2/w/440/q/90',
            text: '美白护手霜'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/900/4900124_std/4900124_1000_1000.jpg?v=1587193216&imageView2/2/w/440/q/90',
            text: '香氛沐浴露'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/004/880/4880114_std/4880114_1000_1000.jpg?v=1587181066&imageView2/2/w/440/q/90',
            text: '明眸眼膜贴'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/810/011/810011722_std/810011722_1000_1000.jpg?v=1577084099&imageView2/2/w/440/q/90',
            text: '变色润唇膏'
          },
          {
            imgUrl: 'http://mp5.jmstatic.com/product/005/015/5015982_std/5015982_1000_1000.jpg?v=1584085579&imageView2/2/w/440/q/90',
            text: '土豆泥眼影盘'
          },
          {
            imgUrl: 'http://mp6.jmstatic.com/product/004/377/4377886_std/4377886_1000_1000.jpg?v=1588819040&imageView2/2/w/440/q/90',
            text: '净柔卸妆膏'
          },
        ]
      }
    };
  },
  async created () {
    let type = this.activeKey + 6
    let res = await appSelect(type);
    this.gridList = res.payload
    console.log(res.payload);
  },
  methods: {
    async onChange(index){
      let type = (index + 6)
      let res = await appSelect(type);
      this.gridList = res.payload
      console.log(res);
    }
  },
};
</script>
<style lang="scss">
.tab-title {
  .van-hairline--top-bottom {
    border-bottom: 1px solid #eee;
  }
  .van-sidebar{
    padding-bottom: 60px;
  }
  .box{
    display: flex;
    .list_right{
      width: 75%;
      position:absolute;
      left: 25%;
      height:80%;
      overflow:auto
    }
  }
}
</style>