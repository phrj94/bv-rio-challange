import { createWebHistory, createRouter } from "vue-router";
import WeatherForecast from "../components/WeatherForecast.vue";
const baseURL = process.env.NODE_ENV === "production" ? "/bv-rio/" : "/";
const routes = [
  {
    path: "/",
    name: "WeatherForecast",
    component: WeatherForecast,
  },
];

const router = createRouter({
  history: createWebHistory(baseURL),
  routes,
});

export default router;
