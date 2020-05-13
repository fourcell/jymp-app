<template>
    <div>
    <van-card
    v-for="(item,index) in list"
    :key="index"
    :num='item.num'
    :price="item.price"
    :desc="item.describes"
    :title="'【'+item.p_name+'】'+item.p_title"
    :thumb="item.img"
    />
    </div>
</template>
<script>
export default {
    props:['list']
}
</script>
<style scoped>
.van-card{
    background: #fff;
}
</style>