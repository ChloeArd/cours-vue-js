<!-- $emit -->

<template>
  <div class="hello">
    <!--    Emettre une fonction / évenements personnalisée directement dans des expressions de modèle-->
    <input type="text" placeholder="Tape du texte" @change="listenChange">
  </div>
</template>

<script>

export default {
  methods: {
    listenChange(event) {
      this.$emit("listenChange", event.target.value) // Récupère la valeur dans l'input
    }
  }
}
</script>

<style scoped>

</style>