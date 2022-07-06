<template>
  <div>
    <form>
      <slot name="radio"></slot>
      <span>邮箱账号</span><br />
      <input type="text" placeholder="输入邮箱" /><br />
      <input type="text" placeholder="邮箱验证码" />
      <button @click.prevent>发送验证码</button> <br />
      <slot name="pass"></slot>
      <slot name="invitation"></slot>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
input {
  margin-top: 10px;
}
</style>
