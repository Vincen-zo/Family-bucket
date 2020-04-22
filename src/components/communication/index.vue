<template>
  <div>
      <h2>组件通信</h2>
      <!-- props 自定义事件 -->
      <Child1 msg="some msg from parent111" @some-event="onSomeEvent"></Child1>
      <!-- 事件总线 -->
      <Child2 msg="some msg from parent222" @click="onClick"></Child2>
      <!-- $children -->
      <button @click="goHome">回家吃饭</button>
  </div>
</template>
<script>
import Child1 from './Child1'
import Child2 from './Child2'
export default {
     provide() {
      return {
        foo: 'foooooooooo'
      }
    },
  components: {
    Child1, Child2
  },
  methods: {
    onSomeEvent(msg) {
      console.log('Communition:', msg);
    },
    goHome() {
      // $children
      this.$children[0].eat()
    },
    onClick() {
        console.log('来自父组件的回调函数处理', this);
      }
  }
}
</script>