<template>
  <div>
     <!-- $listeners会被展开并监听 -->
    <h3 v-on="$listeners">child2</h3>
    <button @click="sendToChild1">给child1发送消息</button>
    <!-- $attrs -->
    <p>{{$attrs.msg}}</p>
    <!-- progvide/inject -->
    <!-- <p>{{foo}}</p> -->
    <p>{{bar}}</p>
  </div>
</template>
<script>
export default {
  // inject: ['foo'],
  inject: {bar: {from: 'foo'}}, // 取别名 
  methods: {
    sendToChild1() {
      // 利用事件总线发送事件
      // this.$bus.$emit('event-from-child2', 'some msg from child33')
       this.$parent.$emit('event-from-child2', 'some msg from child33')
    }
  }
}
</script>