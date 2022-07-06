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
        <a v-if="scope.row.type == 0" :href="scope.row.headImgUrl">{{ scope.row.headImgUrl }}</a>
        <img v-if="scope.row.type == 1" :src="scope.row.headImgUrl" alt="" />
        <input  v-if="scope.row.type == 2" type="text"  :value="scope.row.headImgUrl"  />
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
  Create() {
    if (scope.row.type == 0) {
      scope.row.type = `<a :href="scope.row.headImgUrl"></a>`;
    }
  },
};
</script>

<style></style>
