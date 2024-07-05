<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: 'Ciao, sono il titolo del componente'
    }
  }
}
</script>

<template>
  <h2>{{ title }}</h2>
</template>

<style scoped>
  h2{
    color: red;
    font-size: 2.3 rem;
  }
</style>