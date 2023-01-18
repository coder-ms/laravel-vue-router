import { createRouter, createWebHistory} from 'vue-router'

import HomePage from './pages/HomePage.vue'
import PostList from './pages/PostList.vue'
import NotFound from './pages/NotFound.vue'
// import AppHome from './pages/AppHome.vue'
// import AppHome from './pages/AppHome.vue'
// import AppHome from './pages/AppHome.vue'
// import AppHome from './pages/AppHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/posts",
            name: "posts",
            component: PostList
        },
        {
            path: "/*",
            name: "not-found",
            component: NotFound
        },
    ]

});

export {router};