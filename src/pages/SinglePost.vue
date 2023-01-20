<template>
  <section v-if="post">
    <h1 class="text-center">{{ post.title }}</h1> 
    <div class="cardShow">
      <div class="cardImageShow">
        <img :src="`${store.imageBasePath}${post.cover_image}`" :alt="post.title" class="card-img-top">
      </div>
        <div class="cardDescriptionShow">
          <h4 class="mt-3">Descrizione: </h4>
          <p>{{ post.content }}</p>
          <div v-if="post.category">
            <h5>Category: {{ post.category.name }}</h5>
          </div>
          <div v-if="post.tags && post.tags.length">
            <h5>Tags</h5>
            <div>
              <span v-for="(tag,index) in post.tags" :key="index" class="badge text-bg-info">{{ tag.name }}</span>
            </div>
          </div>
          <router-link class="btn btn-primary"  :to="{name: 'posts'}">
              Torna all lista
          </router-link>
        </div>
    </div>
  </section>
  <section v-else>Loading...</section>
</template>
     
     
<script>
import axios from 'axios';
import { store } from '../store';
export default {
  name: 'SinglePost',
  data(){
    return{
      store,
      post:null,
    }
   },
   methods:{
      getPost(){
        console.log(this.$route);
        axios.get(`${this.store.apiBaseUrl}/posts/${this.$route.params.slug}`).then((response)=>{
          console.log(response.data.results);
          if(response.data.success){
            console.log(response.data.results);
            this.post = response.data.results;
          }
          else{
            console.log(this.$router);
            this.$router.push({name: 'not-found'});
          }
          this.post = response.data.results;
        });
      }
    },
    mounted(){
      this.getPost();
    }
}
</script>

<style lang="scss" scoped>

</style>