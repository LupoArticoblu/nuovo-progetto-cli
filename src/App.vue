<script>

  import HeaderComponent from './components/HEADER/HeaderComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent
    },
    //qui vanno anche i nostri vecchi amici: data, metods, mounted...
    data() {
      return {
        msg: 'Ciao vue-vite da data'
      }
    },

  }
</script>

<template>
  <HeaderComponent/>
  <h1>SALVI</h1>
  <h2>{{ msg }}</h2>
</template>


<style>

</style>
