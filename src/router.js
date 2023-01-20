import { createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import NotFound from './pages/NotFound.vue';
import SinglePost from './pages/SinglePost.vue';
import AboutUs from './pages/AboutUs.vue';
import ContactUs from './pages/ContactUs.vue';


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
            path: "/posts/:slug",
            name: "single-post",
            component: SinglePost
        },
        {
            path: "/about",
            name: "about",
            component: AboutUs
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactUs
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound
        },
    ]
});

export {router};