/*
 * @Descripttion: 
 * @Author: zxy
 * @Date: 2020-08-27 23:34:32
 * @LastEditTime: 2020-08-28 11:31:16
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Home,
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("../views/user/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
