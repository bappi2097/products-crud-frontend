import Vue from "vue";
import VueRouter from "vue-router";
import store from  "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/SignIn.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/SignUp.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
          return next({
            name: 'SignIn'
          })
        }
        next();
      }
  },
  {
    path: "/product-add",
    name: "ProductAdd",
    component: () =>
      import(/* webpackChunkName: "productAdd" */ "../views/ProductAdd.vue"),
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
          return next({
            name: 'SignIn'
          })
        }
        next();
      }
  },
  {
    path: "/product-edit/:id",
    name: "ProductEdit",
    component: () =>
      import(/* webpackChunkName: "productEdit" */ "../views/ProductEdit.vue"),
      beforeEnter: (to, from, next) => {
        if(!store.getters['auth/authenticated']){
          return next({
            name: 'SignIn'
          })
        }
        next();
      }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
