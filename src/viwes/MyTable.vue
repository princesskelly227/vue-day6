<template>
  <div>
    <UseTable>
      <template #uname="scope">
        <input type="text" name="" id="" v-model="scope.row.name" />
      </template>
      <template #age="scope">
        <input type="text" name="" id="" v-model="scope.row.age" />
      </template>
      <template #img="scope">
        <!-- <a href=""></a>
        <img src="" alt="" /> -->
        {{ arr[scope.row.type] }}
      </template>
    </UseTable>
  </div>
</template>

<script>
// 引入
import UseTable from '../components/input/UseTable.vue';
export default {
  data() {
    return {
      arr: [
        { a: `<a :href="scope.row.headImgUrl"></a>` },
        { img: ` <img :src="scope.row.headImgUrl" alt="">` },
        { img: ` <img :src="scope.row.headImgUrl" alt="">` },
        {
          a: ` <input type="text" name="" id="" v-model="scope.row.headImgUrl" />`,
        },
      ],
    };
  },
  components: {
    UseTable,
  },
};
</script>

<style></style>
