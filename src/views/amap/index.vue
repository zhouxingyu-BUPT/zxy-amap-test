<!--
 * @Descripttion: 
 * @Author: zxy
 * @Date: 2020-08-28 10:16:51
 * @LastEditTime: 2020-08-28 10:18:36
-->
<template>
  <div class="amap-wrap">
    <el-amap
      vid="amapContainer"
      class="amap-demo"
      :events="events"
    >
    </el-amap>
  </div>
</template>
<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap",
  data() {
    return {
      map: null,
      zoom: 12,
      events: {
        // init(o) {
        //   let marker = new AMap.Marker({
        //     position: [116.284282, 39.948071],
        //   });
        //   marker.setMap(o);
        // },
      },
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...
      this.map = new AMap.Map("amapContainer", {
        center: [116.284282, 39.948071],
        zoom: this.zoom, //初始化地图层级
      });
    });
  },
};
</script>
<style lang="scss">
.amap-wrap {
  height: 100vh;
}
</style>
