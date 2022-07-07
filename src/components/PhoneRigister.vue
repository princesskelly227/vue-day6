<template>
  <div>
    
    <p>选择所在地区（实名认证主体所在地）</p>
    <input type="checkbox" >中国大陆
    <input type="checkbox">中国香港
    <p>手机号码</p>
    <input type="text" placeholder="请输入手机号码"><br>
    <slot name="yzm"></slot>
    <slot name="psd"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>