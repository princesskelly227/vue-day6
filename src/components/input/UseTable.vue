<template>
  <table border="1">
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>头像</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in list" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          <slot name="uname" :row="item">name </slot>
        </td>
        <td>
          <slot name="age" :row="item">age</slot>
        </td>
        <td>
          <slot name="img" :row="item">img</slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 100,
          name: '小传同学',
          age: 18,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg',
          type: 0, // 0 显示成a标签
        },
        {
          id: 101,
          name: '小黑同学',
          age: 25,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg',
          type: 1, // 1 显示成图片
        },
        {
          id: 102,
          name: '智慧同学',
          age: 21,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg',
          type: 1, // 1 显示成图片
        },
        {
          id: 103,
          name: '智慧同学',
          age: 21,
          headImgUrl:
            'http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg',
          type: 2, // 2 显示成文本
        },
      ],
    };
  },
};
</script>

<style></style>
