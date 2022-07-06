<template>
  <div>
    <button @click="comName = 'MyIponeReg'">手机注册</button>
    <button @click="comName = 'MyEmail'">邮箱注册</button>
    <br />

    <keep-alive>
      <component :is="comName">
        <!-- 地址 -->
        <template v-slot:radio>
          <input type="radio" name="sex" /><span>中国大陆</span>
          <input type="radio" name="sex" /><span>中国香港</span><br />
        </template>
        <!-- 密码 -->
        <template #pass>
          <span>登陆密码</span><br />
          <input type="password" placeholder="请输入登录密码" /> <br />
          <input type="password" placeholder="请再次输入密码" /><br />
        </template>
        <!-- 邀请 -->
        <template #invitation>
          <span>邀请码(选填)</span><br />
          <input type="text" placeholder="输入客户经理邀请码" /> <br />
        </template>

        <MyEmail></MyEmail>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import MyEmail from '../components/MyRegister/MyEmail.vue';
import MyIponeReg from '../components/MyRegister/MyIponeReg.vue';
export default {
  data() {
    return {
      comName: 'MyIponeReg',
    };
  },
  components: {
    MyEmail,
    MyIponeReg,
  },
};
</script>

<style></style>
