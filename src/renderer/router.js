import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        meta: {
            index: 1
        },
        component: () => import("./components/pages/Home.vue"),
    },
    {
        path: "/users",
        name: "users",
        meta: {
            index: 1
        },
        component: () => import("./components/pages/Users.vue"),
    },

    {
        path: "/users/:id/edit",
        name: "user-edit",
        meta: {
            index: 2
        },
        component: () => import("./components/pages/UserEdit.vue"),
    },

    {
        path: "/users/create",
        name: "user-create",
        meta: {
            index: 2
        },
        component: () => import("./components/pages/UserCreate.vue"),
    },

    {
        path: "/cars",
        name: "cars",
        meta: {
            index: 1
        },
        component: () => import("./components/pages/Cars.vue"),
    },

    {
        path: "/cars/:id/edit",
        name: "car-edit",
        meta: {
            index: 2
        },
        component: () => import("./components/pages/CarEdit.vue"),
    },

    {
        path: "/profile",
        name: "profile",
        meta: {
            index: 1
        },
        component: () => import("./components/pages/Profile.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;