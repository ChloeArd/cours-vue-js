<template>
  <div>
    <a href="#" class="btn btn-primary">{{ label }}</a>
  </div>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    label: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>

</style>