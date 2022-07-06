<template>
  <div>
      <table border="1" rules="all" cellpadding='15'>
          <thead>
              <tr>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>头像</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in arr" :key="index">
                  <td>
                    <slot name="index">
                        {{index+1}}
                    </slot>
                  </td>
                  <td>
                    <slot name="name">
                        {{item.name}}
                    </slot>
                  </td>
                  <td>
                    <slot name="age">
                        {{item.age}}
                    </slot>
                  </td>
                  <td>
                    <slot name="type" :row="item">
                        {{item.headImgUrl}}
                    </slot>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
    props: {
        arr: {
            type: Array,
            default: () => {[]}
        }
    }

}
</script>
<style>
table{
    margin: 0 auto;
}
tbody{
    text-align: center;
}
    
</style>