<template>
<header>
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PORTFOLIO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" v-for="(item,index) in menuItems" :key="index">
          <router-link :to="{name : item.route}" active-class="active" class="nav-link">
            {{ item.label }}
          </router-link>
        </li>
        <li class="nav-item">
          <a href="http://localhost:8000" class="nav-link">Accedi</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
</template>
  
  
<script>

  export default {
    name: 'AppHeader',
    data(){
    return {
      menuItems: [
        {
          label:'Home',
          route:'home'
        },
        {
          label:'Posts',
          route:'posts'
        },
        {
          label:'Chi Siamo',
          route:'about'
        },
        {
          label:'Contatti',
          route:'contact'
        },
      ]
    }
  },
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>