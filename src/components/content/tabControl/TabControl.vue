<template>
  <div class = "tab-control">
    <div class = "tab-control-item" 
    v-for="(item,index) in titles" :key="index" 
    :class="{active: index === currentIndex}" 
    @click = handleClick(index)>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type: Array,
        deault() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      handleClick(i) {
        this.currentIndex = i
      }
    },
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control .tab-control-item {
    flex: 1;
  }
  .tab-control .tab-control-item span {
    padding: 4px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>