import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/pages/Home.vue"),
    },
    {
        path: "/user",
        name: "user",
        component: () => import("./components/pages/User.vue"),
    },

    {
        path: "/cars",
        name: "cars",
        component: () => import("./components/pages/Cars.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;