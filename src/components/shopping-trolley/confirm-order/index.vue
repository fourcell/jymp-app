<template>
    <div class="sureOrder">
        <Title/>
        <ressList :goodlist='list' />
        <Card :list='list' />
    </div>
</template>
<script>
import Title from '../shopping-title/index'
import ressList from './ressList'
import Card from './card'
export default {
   components:{Title, ressList, Card}, 
   data() {
       return {
           list:[]
       }
   },
   created() {
       this.list = this.$route.query.list
   },
   
}
</script>
<style scoped>
.sureOrder{
    height: 100%;
    background: #F5F5F5;
}
</style>