<template>

    <!-- <div class="row">
        <div class="col-12">
        <h1 class="mt-5 mb-3">Contatti</h1>
        
        </div>
    </div> -->
    <div>
        ContactForm
    </div>

  </template>
    
    
<script>
    import axios from 'axios';
    import { store } from '../store';
     
    export default {
      name: 'ContactForm',
      data(){
        return{
            store,
            name: '',
            email: '', 
            message: '',
            success: false,
            errors: {}
        }
      },
      methods:{
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((response)=>{
                console.log(response.data);
            });
        }
      }
    }
    </script>
    
    <style lang="scss" scoped>
    
    </style>