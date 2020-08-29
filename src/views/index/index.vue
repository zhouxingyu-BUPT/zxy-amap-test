<!--
 * @Descripttion: 
 * @Author: zxy
 * @Date: 2020-08-27 23:40:18
 * @LastEditTime: 2020-08-28 20:44:47
-->
<template>
  <div>
    <!-- cars data渲染 -->
    <cars />
    <!-- 地图 -->
    <Map />
    <!-- 导航 -->
    <NavBar />
    <!-- 会员 -->
    <!-- <div id="children-view" :class="[show ? 'open' : '']"> -->
    <div id="children-view" :class="{open: show}">
      <router-view />
    </div>
  </div>
</template>
<script>
import Map from "../amap/index.vue";
import Cars from "../cars/index.vue";
import NavBar from  "@c/navbar";
export default {
  name: "Index",
  components: { Map, Cars, NavBar },
  data() {
    return {
        // show: false
    };
  },
  computed: {
      show() {
          const router = this.$route
          return router.name === "Index" ? false : true
      }
  },
  watch: {
    //   "$route": {
    //       handler(newValue) {
    //           const routerName = newValue.name
    //           this.show = routerName === "Index" ? false : true
    //           console.log(newValue)
    //       }
    //   } 
  }
};
</script>
<style lang="scss">
#children-view {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -600px;
    width: 410px;
    background-color: #34393f;
    z-index: 200;
    -webkit-transition: all .3s ease 0s;
    -moz-transition: all .3s ease 0s;
    -ms-transition: all .3s ease 0s;
    -o-transition: all .3s ease 0s;
    transition: all .3s ease 0s;
    &.open {
        right: 0;
    }
}
</style>
