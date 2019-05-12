<template>
  <div class="step-warpper">
    <div class="sec" v-for="(sec, secIndex) in step1" :key="secIndex">
      <div class="sec-title">
        {{sec.title}}
      </div>
      <div class="sec-item" v-for="(item, index) in sec.items" :key="index" @click="toggle(item, secIndex)">
        <div v-if="item.type==='radio'" class="radio" :class="{'checked': item.checked}"></div>
        <div v-if="item.type==='checkbox'" class="checkbox" :class="{'checked': item.checked}"></div>
        <div class="item-text">{{item.label}}</div>
      </div>
    </div>
    <div class="next" @click="toNext">
      下一页
    </div>
  </div>
</template>

<script>
import {step1} from '@/mock/mock'
export default {
  name: 'step1',
  data () {
    return {
      step1
    }
  },
  methods: {
    toggle(item, secIndex) {
      if (item.type === 'checkbox') {
        item.checked = !item.checked
      } else {
        this.step1[secIndex].items.forEach(_ => _.checked = false)
        item.checked = true
      } 
    },
    toNext () {
      this.$router.push('/step2')
    }
  }
}
</script>

<style>

</style>
