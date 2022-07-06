<template>
  <div id="container">
    <div class="title">
        <h1 @click="conName='PhoneRegister'">手机注册</h1>
        <h1 @click="conName='EmailRegister'">邮箱注册</h1>
    </div>
    <form>
        <p>选择所在地区(实名认证主体所在地)</p>
        <input type="radio" name="" id="" >中国大陆
        <input type="radio" name="" id="" >中国香港
        <br>
        <keep-alive>
          <component :is="conName"></component>
        </keep-alive>
        <p>登录密码</p>
        <input type="password" name="" id="" class="one"><br>
        <input type="password" name="" id="" class="one psd" placeholder="再次输入登录密码"><br>
        <p>邀请码(选填)</p>
        <input type="text" name="" id="" class="one">
    </form>
  </div>
</template>

<script>
import PhoneRegister from './components/PhoneRegister.vue'
import EmailRegister from './components/EmailRegister.vue'
export default {
    data() {
        return {
            conName: "PhoneRegister",
        }
    },
    components: {
        PhoneRegister,
        EmailRegister,
    }

}
</script>

<style>
#container {
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  height: 800px;
  border: 1px solid #999;
  /* background-color: pink; */
}
.title {
  margin-bottom: 20px;
    width: 100%;
    height: 60px;
    /* background-color: lawngreen; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.title h1 {
  /* background-color: #fff; */
    padding: 5px;
    text-align: center;
    /* color: #0f57ee; */
}
.current {
    color: #0f57ee;
    border-bottom: 3px solid #0f57ee;
}
p {
  color: #666;
}
input.one{
  padding-left: 10px;
  width: 320px;
  height: 30px;
  border-radius: 5px;
}
input.text {
  margin-top: 15px;
  width: 200px;
  height: 30px;
}
input.psd {
  margin-top: 15px;
}
button{
  width: 100px;
  height: 35px;
  margin-left: 12px;
  background-color: #0f57ee;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
}
</style>