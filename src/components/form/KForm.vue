<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data() {
    return {

    }
  },
  methods: {
    validate(cb){
      // 获取所有的KFormItrm
      const tasks = this.$children
      .filter(item => item.prop) // 过滤掉没有prop属性的Item
      .map(item => item.validate())
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>