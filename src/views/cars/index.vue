<!--
 * @Descripttion: vue-amap
 * @Author: zxy
 * @Date: 2020-08-28 10:23:56
 * @LastEditTime: 2020-08-29 11:02:11
-->
<template>
  <div class="index-wrap">
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img
            src="../../assets/images/icon/cars-logo.png"
            alt="Mustang 2019"
          />
          <span class="name">Mustang 2019</span>
        </h4>
        <p class="cars-attr">新能源汽车</p>
      </header>
      <div class="cars-content">
        <div class="info">
          <div>
            <h4 class="cars-number">粤B88888</h4>
            <div>
              <!-- <ul class="cars-electric">
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li class="active"></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul> -->
              <ul class="cars-electric active-li-5">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="distance">
                <sub>约</sub> 
                <strong>600</strong>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="../../assets/images/icon/car1.png" alt="" />
      </div>
      <footer>
        <a href="javscript: void(0);" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <span @click="user">汽车列表</span>
  </div>
</template>
<script>
export default {
  name: "Cars",
  data() {
    return {};
  },
  methods: {
    user() {
      this.$router.push({
        name: "User",
      });
    },
  },
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
