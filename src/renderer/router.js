import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./components/pages/Home.vue"),
    },
    {
        path: "/users",
        name: "users",
        component: () => import("./components/pages/Users.vue"),
    },

    {
        path: "/cars",
        name: "cars",
        component: () => import("./components/pages/Cars.vue"),
    },

    {
        path: "/cars/:id/edit",
        name: "car-edit",
        component: () => import("./components/pages/CarEdit.vue"),
    },

    {
        path: "/profile",
        name: "profile",
        component: () => import("./components/pages/Profile.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;