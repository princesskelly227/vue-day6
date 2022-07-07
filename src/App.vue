<template>
  <div class="center">
    <h1 @click='comName="EmailRigister"'>手机注册</h1>
    <h1 @click='comName="PhoneRigister"'>邮箱注册</h1>
    <keep-alive><component :is="comName">
      <template v-slot:yzm>
        <p>邮箱账户</p>
        <input type="text" placeholder="请输入邮箱账户" /><br />
        <input type="text" placeholder="输入验证码" /><button>
          发送验证码
        </button>
      </template>
      <template v-slot:psd>
        <p>登陆密码</p>
        <input type="password" /><br />
        <input type="password" placeholder="再次输入登陆密码" />
      </template>
       <template v-slot:yzm2>
        <p>邮箱账户</p>
        <input type="text" placeholder="请输入邮箱账户" /><br />
        <input type="text" placeholder="输入验证码" /><button>
          发送验证码
        </button>
      </template>
      <template v-slot:psd2>
        <p>登陆密码</p>
        <input type="password" /><br />
        <input type="password" placeholder="再次输入登陆密码" />
      </template>
    </component></keep-alive>
    <UseTable></UseTable>
  </div>
</template>

<script>
import PhoneRigister from "./components/PhoneRigister.vue";
import EmailRigister from "./components/EmailRigister.vue";
import UseTable from "./components/UseTable.vue"
export default {
  data() {
    return {
      comName: "PhoneRigister",
    };
  },
  components: {
    EmailRigister,
    PhoneRigister,
    UseTable,
  },
};
</script>

<style>
.center{
  margin:100px 100px;
}
</style>
