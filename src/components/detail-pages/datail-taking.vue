<template>
    <div class="taking_box">
        <van-nav-bar title="评价" left-text="返回" left-arrow>
            <template #left>
                <van-icon name="arrow-left" color="#ccc" size="22" @click="toReverse" />
            </template>
        </van-nav-bar>
        <van-panel 
            v-for="(item,index) in 4"
            :key="index"
            title="未央之夏装"
            icon='http://img2.imgtn.bdimg.com/it/u=2389221346,3210971720&fm=26&gp=0.jpg' 
            desc="尺码：s / 颜色分类：酒红色">
            <div class="taking_content">
                <p style="margin: 5px;font-size:14px"> Icon 组件默认引用有赞 CDN 提供的字体文件，并通过网络下载。如果需要在项目中使用本地字体文件，请引入下面的 CSS 文件</p>
            </div>
            <template #footer>
                <van-button icon="smile-comment-o" round size="small" color="linear-gradient(to right,#ff6034,#ee0a24)">评论</van-button>
                <van-button icon="good-job-o" style="margin-left: 5px;" size="small" round color="linear-gradient(to right,#ff6034,#ee0a24)">有用</van-button>
            </template>
        </van-panel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            takeShow:true,
            message:''
        }
    },
    methods: {
        toReverse(){
            this.$emit('goodTakeShow',true)
        }
    },
}
</script>
<style scoped>
.taking_box{
    background: #f5f5f5;
}
.taking_content{
    border: 1px solid #ccc;
    height: 100px;
    margin: 0px 15px;
}
.van-panel__footer{
    margin-left: 200px;
}
.van-cell-group{
    margin-bottom: 20px;
}
</style>