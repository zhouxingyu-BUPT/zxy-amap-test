/*
 * @Descripttion: 
 * @Author: zxy
 * @Date: 2020-08-28 00:26:28
 * @LastEditTime: 2020-08-28 00:32:20
 */
import Vue from "vue"

//高德地图
//高德离线地图 
import VueAMap from 'vue-amap';
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  //高德key
  key: '4a51f650a499290a1dc3b7bf2af2caec',
  //插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.Circle'],
  v: '1.4.15',
  uiVersion: '1.0.11'
})