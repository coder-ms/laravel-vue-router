<template>
    <h1>PostList</h1>
    
   </template>
     
     
   <script>
    import axios from 'axios';
    import { store } from '../store';
   
     export default {
        name: 'PostList',
        data(){
          return{
            store,
            posts:[]
          }
        },
        methods:{
          getPosts(){
            axios.get(`${this.store.apiBaseUrl}/posts`).then((response)=>{
              // console.log(response.data);
              this.posts = response.data.results.data;
            });
          }
        },
        mounted(){
          this.getPosts();
        }
     }
     </script>
     
     <style lang="scss" scoped>
     
     </style>