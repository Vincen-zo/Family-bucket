<template>
  <div>
    <!-- 自定义组件双向数据绑定 :value @input -->
    <!-- v-bind="$attrs 展开$attrs -->
    <input :type="type" :value="value" @input="onInput" v-bind="$attrs"/>
  </div>
</template>
<script>
export default {
  inheritAttrs: false, // 设置为false避免到根元素上
  props:{
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
    }
  },
  methods: {
     onInput(e){
        // 派发一个input事件
        this.$emit('input', e.target.value)
        // 通知父级执行校验

        this.$parent.$emit('validate')
      }
  }
}
</script>