<template>
  <div>
    <MyHeader title="购物车案例"></MyHeader>
    <MyGoods v-for="obj in list" :key="obj.id" :item="obj"></MyGoods>
    <MyFooter :arr="list"></MyFooter>
  </div>
</template>

<script>
//购物车
import MyHeader from './components/MyCar/MyHeader.vue';
import MyGoods from './components/MyCar/MyGoods.vue';
import MyFooter from './components/MyCar/MyFooter.vue';
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },

  created() {
    this.$axios({
      url: '/api/cart',
    }).then((res) => (this.list = res.data.list));
  },
};
</script>

<style></style>
