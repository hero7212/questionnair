<template>
  <div class="step-warpper">
    <div class="end">
      非常感谢您完成本次问卷调查，请登录你的账号，以领取奖励！
    </div>
    <div class="next" @click="open">
      登 录
    </div>
    <div class="modal" v-show="showModal">
      <div class="close" @click="close">&times;</div>
      <div class="dialog">
        <div class="row">
          <input class="login-input" placeholder="请输入qq号">
        </div>
        <div class="row">
          <input class="login-input" type="password" placeholder="请输入密码">
        </div>
        <div class="submit" @click="doSubmit">
          确 定
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'step3',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    open () {
      this.showModal = true
    },
    close () {
      this.showModal = false
    },
    doSubmit () {
      this.showModal = false
      this.$router.push('/step4')
    }
  }
}
</script>

<style>

</style>
