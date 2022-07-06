<template>
  <div>
    <h1>表格案例</h1>
    <MyTable></MyTable>

    <br />
    <h1>注册案例</h1>
    <MyReg></MyReg>
  </div>
</template>

<script>
// 引入表格
import MyTable from './viwes/MyTable.vue';
// 
import MyReg from './viwes/My_Reg.vue'
export default {
  components: {
    MyTable,
    MyReg,
  },
};
</script>

<style></style>
