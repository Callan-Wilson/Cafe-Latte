import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Contact from "../views/Contact.vue";
import Functions from "../views/Functions.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/" || '/home',
      name: "home",
      component: Home,
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
    },
    {
      path: "/contact-us",
      name: "contact us",
      component: Contact,
    },
    {
      path: "/functions",
      name: "functions",
      component: Functions,
    },
   
 
  ],
});

export default router;
