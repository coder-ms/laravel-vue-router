<template>
  <section>
    <h1>PostList</h1>
    <div class="row">
      <div class="col-12 col-md-3" v-for="(post, index) in posts" :key="index"> 
        <div class="card">
          <img :src="`${store.imageBasePath}${post.cover_image}`" :alt="post.title" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{ truncateContent(post.content) }}</p>
            <router-link class="btn btn-primary"  :to="{name: 'single-post', params:{slug: post.slug}}">
              Vedi il post
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
     
     
   <script>
    import axios from 'axios';
    import { store } from '../store';
   
     export default {
        name: 'PostList',
        data(){
          return{
            store,
            posts:[],
            currentPage: 1,
            latPage:null,
            contentMaxLen: 100
          }
        },
        methods:{
          getPosts(){
            axios.get(`${this.store.apiBaseUrl}/posts`).then((response)=>{
              // console.log(response.data);
              this.posts = response.data.results.data;
            })
          },
          truncateContent(text){
            if(text.length > this.contentMaxLen){
              return text.substr(0, this.contentMaxLen) + '...';
            }
            return text;
          }
        },
        mounted(){
          this.getPosts();
        }
     }
     </script>
     
     <style lang="scss" scoped>
     
     </style>