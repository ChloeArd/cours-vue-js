<template>
  <div class="container" id="app">
<!--    <h1 class="mt-5">{{ title.toUpperCase() }}</h1>-->
<!--    <p>{{ body }}</p>-->
<!--    <p>Le post {{ id }} a été crée par l'utilisateur d'id {{ userId }}</p>-->

    <!-- API AXIOS VUE / CREATE / UPDATE / DELETE -->
<!--    <PhotosRow/>-->
<!--    <PostStore/>-->
<!--    <PostUpdate/>-->
    <PostDelete/>
    <br><br>

    <ComponentA @listen-change="alertValue"/>
    <SuperButton>Submit</SuperButton>
    <br>
    <super-button></super-button>
    <br>
    <SuperButton>
      <span style="background-color: red">OK</span>
      <IconButton/>
    </SuperButton>
    <br>
    <HeaderMenu>
<!--      <template v-slot:alert>-->
      <template #alert>
        <div class="alert alert-success">
          Message de succès
        </div>
      </template>
    </HeaderMenu>

    <ComputedComponent/>

    <ImageCard v-for="(card, index) in 3" :key="index"/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import ImageCard from "./components/ImageCard.vue";
import ComponentA from "@/components/ComponentA.vue";
import SuperButton from "./components/SuperButton.vue";
import IconButton from "@/components/IconButton.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import ComputedComponent from "@/components/ComputedComponent.vue";
import axios from "axios";
import PostDelete from "@/components/PostDelete.vue";
// import PostUpdate from "@/components/PostUpdate.vue";
// import PostStore from "@/components/PostStore.vue";
// import PhotosRow from "@/components/PhotosRow.vue";

// API JsonPlaceholder

export default defineComponent({
  components: {
    PostDelete,
    // PostUpdate,
    // PostStore,
    //PhotosRow,
    ComputedComponent, HeaderMenu, IconButton, ComponentA, ImageCard, SuperButton},
  methods: {
    alertValue(event) {
      alert(event);
    }
  },
  data() {
    return {
      apiUrl: "https://jsonplaceholder.typicode.com/posts/1",
      id: "",
      title: "",
      body: "",
      userId: ""
    }
  },
  mounted() {
    axios.get(this.apiUrl)
        .then(response => {
          console.log(response);
          this.title = response.data.title;
          this.body = response.data.body;
          this.userId = response.data.userId;
          this.id = response.data.id;
        });
  }
})
</script>

<style>
/*@import("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css");*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
