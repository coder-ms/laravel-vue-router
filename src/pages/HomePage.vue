<template>

  <div class="col-12 d-flex">
    <div class="info col-6 py-5 px-5 bg-black mt-4">
      <h1 class="text-white">HOME PAGE</h1>
      <h3 class="mt-3 mb-3">Boolean Programmer</h3>
      <h5><i>Boolean</i></h5>
      <p class="mt-4 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, harum blanditiis! Blanditiis sint obcaecati asperiores id, beatae eaque eveniet dicta exercitationem natus ratione nesciunt facilis, aperiam unde aliquam, magni architecto repellat perspiciatis! Recusandae tempora culpa omnis perferendis ex. Deleniti ea totam blanditiis quo et harum quibusdam cum beatae enim?</p>
      <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque corporis autem illo in, id, blanditiis, qui numquam nobis exercitationem at earum perferendis. Pariatur magni sit ab et laudantium nesciunt eius porro, qui repellat aliquam quo at, neque repudiandae doloribus! Natus explicabo ea et cupiditate dolorem incidunt odio necessitatibus illo maiores.</p>
      <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque corporis autem illo in, id, blanditiis, qui numquam nobis exercitationem at earum perferendis. Pariatur magni sit ab et laudantium nesciunt eius porro, qui repellat aliquam quo at, neque repudiandae doloribus! Natus explicabo ea et cupiditate dolorem incidunt odio necessitatibus illo maiores.</p>
      <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque corporis autem illo in, id, blanditiis, qui numquam nobis exercitationem at earum perferendis. Pariatur magni sit ab et laudantium nesciunt eius porro, qui repellat aliquam quo at, neque repudiandae doloribus! Natus explicabo ea et cupiditate dolorem incidunt odio necessitatibus illo maiores.</p>
      <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque corporis autem illo in, id, blanditiis, qui numquam nobis exercitationem at earum perferendis. Pariatur magni sit ab et laudantium nesciunt eius porro, qui repellat aliquam quo at, neque repudiandae doloribus! Natus explicabo ea et cupiditate dolorem incidunt odio necessitatibus illo maiores.</p>
      <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque corporis autem illo in, id, blanditiis, qui numquam nobis exercitationem at earum perferendis. Pariatur magni sit ab et laudantium nesciunt eius porro, qui repellat aliquam quo at, neque repudiandae doloribus! Natus explicabo ea et cupiditate dolorem incidunt odio necessitatibus illo maiores.</p>
      <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque corporis autem illo in, id, blanditiis, qui numquam nobis exercitationem at earum perferendis. Pariatur magni sit ab et laudantium nesciunt eius porro, qui repellat aliquam quo at, neque repudiandae doloribus! Natus explicabo ea et cupiditate dolorem incidunt odio necessitatibus illo maiores.</p>
      <router-link class="btn btn-primary mt-3"  :to="{name: 'about'}">
        CHI SONO
      </router-link>

      <router-link class="btn btn-primary ms-3 mt-3"  :to="{name: 'posts'}">
          Guarda i posts
      </router-link>
    </div>
    <div class="col-6 p-5 d-flex">
      <div class="col-8"> 
        <img class="mt-2 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Development_Stages.svg" alt="Flow Chart">
        <img class="mt-2 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/0/06/For-loop-diagram.png" alt="Flow Chart">
      </div>
      <div class="col-4">
          <img class="mt-2 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Ada_Lovelace_color.svg" alt="Ada Lovelace Byron">
          <img class="mt-2 mb-2" src="https://upload.wikimedia.org/wikipedia/commons/8/82/CharlesBabbage.jpg" alt="Charles babbage">
      </div>
    </div>
  </div>




</template>
     
     
<script>

  export default {
    name: 'HomePage',

  }
  </script>

<style lang="scss" scoped>

</style>