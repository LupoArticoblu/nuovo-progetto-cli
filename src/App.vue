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
        msg: 'Ciao vue-vite da data',
        //inseriamo delle immagini dinamicamente all'interno di vite
        immagine: '03.jpg'
      }
    },
    methods: {
      //creiamo un metodo per inserire le immagini
      getPathImage(image) {
        return new URL(`./assets/img/${image}`, import.meta.url).href
      }
    }
  }
</script>

<template>
  <div class="contain">
    <HeaderComponent/>
    
    <div class="container">
      <h2>Immagini</h2>
      <img src="./assets/img/01.jpg" alt="">
      <img src="./assets/img/02.jpg" alt="">
      <!-- questa modalità è errata
      <img src="./assets/{{ immagine }}" alt="">
      la sintassi giusta è questa, data dal metodo -->
      <img :src="getPathImage(immagine)" alt="">
    </div>

    <h2>{{ msg }}</h2>

  </div>
</template>

<!-- per utilizzare la sintassi sass uso la chiave valore "lang='scss'" in style-->
<style lang="scss">
//utilizziamo @use per importare e utilizzare i nostri file scss(prima si usava import ma a differenza di import use condivide il suo codice solo in locale senza far ereditare i stili globali ad altri componenti)
@use './Styles/partials/variabili' as *;//a _variabili.scss non serve usare _ o l'estensione mentre lo si richiama

//qui oltre alle variabili e general, importo le mixin
@use './Styles/partials/mixin' as *;

@use './Styles/general' as *;

/* ma la vera rivoluzione di sass la fanno le variabili! */
  //$red: red;
  /* posso dare un nome ad un qualsiasi stile o gruppo di stili ed assegnarlo ad una variabile col simbolo $ */
  .contain{
    background: grey;
    min-height: 100vh;
  }
  .container{
    //inserisco la mixin con include
    @include center();
    
    //questi li uso in general.scss
    //width: 60%;
    //margin: 30px auto;

    /* posso fare il nesting delle varie classi o tag contenuti senza usare gli attributi speciali*/
    h2{
      color: green;
    }
    img{
      width: 300px;

      /* e tale variabile posso usarla ovunque nel mio css */
      border: 1px solid $red;
      margin: 10px;
      transition: 0.5s;

      /* col simbolo & ci riferiremo al padre del nostro annidamento, un po' come per this in vue*/
      &:hover{
        transform: scale(1.1);
      }
    }
  }
    /* una volta creato il progetto si usa il comando 'npm run build' da terminale e mi si creerà la cartella dist, ovvero la cartella che a fine progetto verrà consegnata e messa sul server con tutte le sue dipendenze e asset */
</style>
