<script>
 //importo store
import { store } from './components/data/store';
//importiamo alcuni dati da data js <- se il file da importare non ha "export default" importo tra le graffe gli elementi che mi servono
import {code, getRandomNumber} from './components/data/data';
//importo il js colori <- se il file da importare ha "export default" il nome attributo è arbitrario
import color from './components/data/color';
import HeaderComponent from './components/HEADER/HeaderComponent.vue';
import Emit from './components/HEADER/Emit.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      Emit
    },
    //qui vanno anche i nostri vecchi amici: data, metods, mounted...
    data() {
      return {
        msg: 'Ciao vue-vite da data',
        //inseriamo delle immagini dinamicamente all'interno di vite
        immagine: '03.jpg',
        store,
        //richiamo nei data il js colori
        color,
        //richiamo ciò che ho importato da data js
        code,
        getRandomNumber,
        count: 0,
        // #1 Creiamo una computed che mi restituisca solo una lista di numeri pari da un array di numeri
        numeri: [1,2,3,4,5,6,7,8,9,10],
      }
    },
    methods: {
      //creiamo un metodo per inserire le immagini
      getPathImage(image) {
        return new URL(`./assets/img/${image}`, import.meta.url).href
      },
      //creiamo un metodo per emettere mioEvento
      miaFunzione(saluto) {
        console.log(saluto);
        store.count++
      },
      altraFunzione() {
        console.log('altra funzione');
      }
    },
    computed: {
      // #2 Creiamo una computed che mi restituisca solo una lista di numeri pari da un array di numeri
      numeriPari() {
        return this.numeri.filter(num => num % 2 === 0)
      }
  }
}  
</script>

<template>
  <div class="contain">
    <!-- Per vedere la props creata in header, la passiamo come proprietà.
  (INIZIA IN HEADER.VUE)... E QUI, NEL COMPONENTE FIGLIO UTILIZZIAMO LE PROPS COME ATTRIBUTI-->
    <HeaderComponent saluto="Props: Ciao, sono header"/>
    
    <div class="container">
      <h2>Immagini</h2>
      <img src="./assets/img/01.jpg" alt="">
      <img src="./assets/img/02.jpg" alt="">
      <!-- questa modalità è errata
      <img src="./assets/{{ immagine }}" alt="">
      la sintassi giusta è questa, data dal metodo -->
      <img :src="getPathImage(immagine)" alt="">
    </div>
    <!-- qui resta in ascolto l'evento personalizzato di emit e lo riportiamo così-->
    <Emit @mioEvento="miaFunzione" @altroEvento="altraFunzione" /><!-- <- con mioEvento parte miaFunzione--> 
    <h2>{{ msg }}</h2>

  </div>
  <!-- test colori js -->
  <div v-for="(colore, index) in color" :key="index">{{ colore }}</div>
  <!-- test data js-->
  <h5>{{ code }} <span>ecco il codice importato da data</span></h5>
  <h5>{{ getRandomNumber(1,40) }} <span>ecco il numero della funzione random importata da data</span></h5>
  <div class="container">
      <p>contatore: {{ store.count }}</p>
  </div>
  <!--#3 Creiamo una computed che mi restituisca solo una lista di numeri pari da un array di numeri-->
  <div class="container">
    <ul>
      <li v-for="(num, index) in numeriPari" :key="index">{{ num }}</li>
    </ul>
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
    min-height: 80vh;
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
