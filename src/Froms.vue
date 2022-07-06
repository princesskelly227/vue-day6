<template>
  <div>
    <FromsData>
      <template v-slot:xh="scope">
        {{ scope.xh.id }}
      </template>
      <template v-slot:xm="scope">
        {{ scope.xm.name }}
      </template>
      <template v-slot:nl="scope">
        {{ scope.nl.age }}
      </template>
      <template v-slot:tx="scope">
        <a v-if="scope.tx.type == 0" :href="scope.tx.headImgUrl">{{
          scope.tx.headImgUrl
        }}</a>
        <img v-if="scope.tx.type == 1" :src="scope.tx.headImgUrl" />
        <p v-if="scope.tx.type == 2">{{ scope.tx.headImgUrl }}</p>
      </template>
    </FromsData>
  </div>
</template>

<script>
import FromsData from "./components/FromsData.vue";
export default {
  data() {
    return {
    };
  },
  components: {
    FromsData,
  },
};
</script>

<style>
#app {
  margin: 100px 400px;
}
</style>
