import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue"
import WeatherForecast from "@/components/WeatherForecast.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/previsao",
    name: "WeatherForecast",
    component: WeatherForecast,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;