<template>
  <section>
    <div class="row">
        <div class="col-12">
          <h1 class="text-center mb-3 mt-5">Contatti</h1>
          <ContactForm />
        </div>
    </div>
  </section>
</template>
  
  
<script>

import ContactForm from '../components/ContactForm.vue'
  export default {
    name: 'ContactUs',
    components:{
            ContactForm
        }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>