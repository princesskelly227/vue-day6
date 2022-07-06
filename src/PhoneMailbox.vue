<template>
  <div id="app">
    <a href="javascript:" @click="Name = 'Phone'">手机号注册</a>
    <a href="javascript:" @click="Name = 'Mailbox'">邮箱注册</a>
    <keep-alive>
      <component :is="Name">
        <template v-slot:yzm>
          <input type="text" placeholder="请输入验证码" style="width: 80px" />
          <button>发送验证码</button>
        </template>
        <template v-slot:yx>
          <input type="text" placeholder="邀请码" />
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Phone from "./components/Phone.vue";
import Mailbox from "./components/Mailbox.vue";
export default {
  data() {
    return {
      Name: "Phone",
    };
  },
  components: {
    Phone,
    Mailbox,
  },
};
</script>

<style>
#app {
  width: 200px;
  margin: 10px auto;
}
a {
  text-decoration: initial;
  margin: 5px;
  color: hotpink;
}
</style>
