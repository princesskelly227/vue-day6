<template>
  <div>
    
    <p>选择所在地区（实名认证主体所在地）</p>
    <input type="checkbox" >中国大陆
    <input type="checkbox">中国香港
    <p>邮箱账户</p>
    <input type="text" placeholder="请输入邮箱账户"><br>
    <input type="text" placeholder="输入验证码"><button>发送验证码</button>
    <slot name="yzm2"></slot>
    <slot name="psd2"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>