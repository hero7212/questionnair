<template>
  <div id="app">
    <div class="logo-warpper">
      <img src="@/assets/img/laptop.png" alt="">
    </div>
    <div class="title">
      qq空间满意度问卷
    </div>
    <div class="tip">
      为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  max-width: 990px;
  margin: 0 auto;
  padding-bottom: .4rem;
}

.title {
  margin-top: .2rem;
  font-size: .3rem;
}

.tip {
  margin-top: .1rem;
  font-size: .15rem;
  line-height: .3rem;
  color: #999;
}

.step-warpper{
  background: #fff;
  margin-top: .3rem;
  border-radius: 4px;
  padding-top: .2rem;
  padding-bottom: .2rem;
}

.sec {
  margin-top: .6rem;
  text-align: left;
  padding-left: .6rem;
}

.sec-title {
  font-size: .2rem;
}

.sec-item {
  font-size: .15rem;
  margin-top: .2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.radio {
  width: .2rem;
  height: .2rem;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;
  border-radius: 50%;
}

.radio.checked {
  border: .05rem solid #2863F3;
}

.checkbox {
  width: .2rem;
  height: .2rem;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;
  border-radius: .04rem;
}

.checkbox.checked{
  background: url('./assets/img/checked.png') center center no-repeat;
  background-size: .2rem .2rem;
  border: 0
}

.item-text {
  margin-left: .15rem;
}

.next {
  background:#2863F3;
  font-size: .18rem;
  height: .36rem;
  line-height: .36rem;
  text-align: center;
  width: 2rem;
  margin: .3rem auto;
  color: #fff;
  border-radius: .04rem;
  cursor: pointer;
}

.end {
  font-size: .3rem;
  color: #999;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.close {
  font-size: .4rem;
  color: #eee;
  position: absolute;
  top: 1vmin;
  right: 1vmin;
  z-index: 2;
  cursor: pointer;
}

.dialog {
  height: 5rem;
  width: 7rem;
  background: #fff;
  border-radius: .04rem;
  border: 1px solid #eee;
  font-size: .24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.row {
  width: 100%;
  margin: .2rem;
}

.login-input {
  width: 80%;
  height: 50px;
  border-radius: .04rem;
  outline: none;
  padding-left: .2rem;
}

.submit {
  background:#2863F3;
  font-size: .18rem;
  height: .36rem;
  line-height: .36rem;
  text-align: center;
  width: 2rem;
  margin: .3rem auto;
  color: #fff;
  border-radius: .04rem;
  cursor: pointer;
}
</style>
