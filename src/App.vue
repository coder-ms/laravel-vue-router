<template>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="post in posts">
      {{ post.title }}
    </li>
  </ul>
</template>


<script>
import axios from 'axios';
export default {
  name: "App",
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

<style>

</style>
