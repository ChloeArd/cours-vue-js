<!-- Slot -->
<template>
  <div>
    <button type="button" class="btn btn-primary">
<!--      <slot/> &lt;!&ndash; Permet de distribuer du contenu. &ndash;&gt;-->
      <slot>Envoyer</slot> <!-- Texte par défaut -->
    </button>
  </div>
</template>

<script>

export default {
  name: "SuperButton"
}
</script>

<style scoped>

</style>