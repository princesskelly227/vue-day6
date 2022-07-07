<template>
  <MyTable>
    <template v-slot:num="scope1" >
        {{scope1.row1.id}}
    </template>
    <template v-slot:uname="scope2" >
        {{scope2.row2.name}}
    </template>
    <template v-slot:age="scope3" >
        {{scope3.row3.age}}
    </template>
    <template v-slot:img="scope4" >
        <a  v-if="scope4.row4.type==0" :href="scope4.row4.headImgUrl">{{scope4.row4.headImgUrl}}</a>
        <img v-if="scope4.row4.type==1" :href="scope4.row4.headImgUrl" alt="">
        <input v-if="scope4.row4.type==2" type="text" value="scope4.row4.headImgUrl">
    </template>
    
  </MyTable>
</template>

<script>
import MyTable from './MyTable.vue'
export default {
components:{
    MyTable
}
}
</script>

<style>

</style>