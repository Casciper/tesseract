import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/pages/Home.vue"),
    },
    {
        path: "/news",
        name: "news",
        component: () => import("./components/pages/News.vue"),
    },

    {
        path: "/characters",
        name: "characters",
        component: () => import("./components/pages/Characters.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;