<template>
    <div>
        <van-nav-bar title="【15号十点开售】完美日记天赋干皮粉底液深水弹女保湿持久干皮" left-arrow>
            <!-- <template #right>
                <van-icon name="wap-home-o" color="#ccc" size="22" @click="toHome" />
            </template> -->
            <template #left>
                <van-icon name="arrow-left" color="#ccc" size="22" @click="toReverse" />
            </template>
        </van-nav-bar>
        <van-panel 
        title="未央之夏装"
        icon='http://img2.imgtn.bdimg.com/it/u=2389221346,3210971720&fm=26&gp=0.jpg' 
        desc="尺码：s / 颜色分类：酒红色" status="状态">
            <div>内容</div>
            <template #footer>
                <van-button size="small">按钮</van-button>
                <van-button size="small" type="danger">按钮</van-button>
            </template>
        </van-panel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            takeShow:true
        }
    },
    methods: {
        toReverse(){
            this.$emit(this.takeShow,'false')
        }
    },
}
</script>
<style scoped>
</style>