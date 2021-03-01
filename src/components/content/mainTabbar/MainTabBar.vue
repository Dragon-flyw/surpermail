<template>
  <div>
    <tab-bar>
        <!-----src路径加波浪符号是因为路径起别名在使用import导入时没事但是src引用必须加~符号  ------>
        <tab-bar-item path="/home" >  <!-- activeColor="pink" -->
        <img slot = "item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot = "item-icon-active" src="~assets/img/tabbar/home_active.svg" alt=""> 
        <div slot = "item-text">首页</div> 
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot = "item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot = "item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot = "item-text">分类</div> 
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot = "item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot = "item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot = "item-text">购物车</div> 
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot = "item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot = "item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot = "item-text">我的</div> 
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar"
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
  export default {
    name: "MainTarBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>