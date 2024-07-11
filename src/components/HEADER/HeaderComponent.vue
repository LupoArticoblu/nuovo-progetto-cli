<script>
//importo store
import {store} from '../data/store';
export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: 'Ciao, sono il titolo del componente',
      store
    }
  },
   //nello script inseriamo props, le props possono essere di qualsiasi tipo e dimensione
   props: {
    //key : value (imposto l'elemento figlio a ricevere il dato) QUINDI DEFINIAMO NEL COMPONENTE PADRE(HEADER) IL DATO CHE VOGLIAMO TRASMETTERE...(CONTINUA IN aPP.vue)
    saluto : String,
  },
  //ATTENZIONE LE PROPS SONO READONLY:qundi non posso modificarle
  //created() { this.saluto = 'nuovo testo'} <- questo tornerebbe un errore
}
</script>

<template>
  <div class="container">
  <header>
    <ul>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
    </ul>
    <!--  INTRODUCIAMO LE PROPS: il concetto di props è quello che un informazione deve esser passara dinamicamente ma dal tag/componente padre (per vederlo passiamo in APP.vue)-->
    <span>{{ saluto }}</span>
  </header>

  </div>
  <button @click="store.count++" style="background-color: #adb210"> incrementa il contatore store esportato in App.vue</button>
  <!-- MA COSA SUCCEDE SE VOGLIAMO EMETTRE EVENTI DA FIGLIO A PADRE? (EMIT.vue) -->
  
</template>

<style lang='scss' scoped>
  @use '../../Styles/partials/mixin' as *;
header{
  background: #ff12f1;
  width: 100%;
  ul{
    list-style: none;
    @include center('horizontal');
    li{
      a{
        display: inline-block;
        margin: 10px;
        text-decoration: none;
        &:hover{
          color: #0f23f0;
          text-decoration: underline; 
        }
      }
    }
  }
}  
</style>