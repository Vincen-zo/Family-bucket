export default {
  render(h) {
    //获取path对应的component
    const {routeMap, current} = this.$router;
    console.log(routeMap,current, 'jkfuy');
    
    const component = routeMap[current].component || null;
    return h(component)
  }
}