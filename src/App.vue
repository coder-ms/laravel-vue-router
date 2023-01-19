<template>
  <!-- <h1>{{ title }}</h1>
  <ul>
    <li v-for="post in posts">
      {{ post.title }}
    </li>
  </ul> -->
  <AppHeader></AppHeader>
  <main class="container">
    <router-view></router-view>
  </main>
  
</template>


<script>
import axios from 'axios';
import AppHeader from './components/HeaderComponent.vue';
export default {
  name: "App",
  components:{
        AppHeader
  },
  data(){
    return {
      title: "hello world",
      apiURL: "http://localhost:8000/api",
      posts: [],
    }
  },
  methods: {
    getPosts(){
      axios.get(`${this.apiURL}/posts`).then((response)=>{
        console.log(response);
        this.posts=response.data.results.data;
        console.log(this.posts);
        console.log(response.data.results);
      });
    }
  },

  mounted(){
    this.getPosts();
  },
};
</script>

<style lang="scss" scoped>

</style>
