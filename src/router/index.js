import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("@/components/homePage")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/modules/Login")
    },
    {
      name: "news",
      path: "/news",
      component: () => import("@/modules/News")
    },
    {
      name: "todolist",
      path: "/to-do-list",
      component: () => import("@/modules/ToDoList"),
    },
    {
      name: "counter",
      path: "/counter",
      component: () => import("@/modules/Counter"),
    }
  ]
});