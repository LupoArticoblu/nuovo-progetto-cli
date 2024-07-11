<!--$EMIT: lancia un evento dal componente figlio al componente padre che resta in ascolto, ecco come funziona-->
<template>
  <div class="container">
    <!-- oltre agli eventi conosciuti e predefiniti, possiamo creare degli eventi personalizzati nel componente figlio con $emit
    Ricorda: come primo elemento passo il nome dell'evento, come secondo, terzo ecc... passo dei parametri per quell'evento-->
    <button @click="$emit('mioEvento', 'ciao emit')" class="btn btn-primary">invio un emit</button>
    <!-- spostiamoci nel componente emit che si trova all'interno del genitore App.vue
    ATTENZIONE: scrivendo in camelCase il componente figlio e riportarlo nel genitore con 'kebab-case' è lecito e non è visto come errore-->
  </div>
</template>

<script>
export default {
  name: 'Emit',
}
</script>

<style lang="scss" scoped>
  @use '/node_modules/bootstrap/scss/bootstrap.scss';
</style>