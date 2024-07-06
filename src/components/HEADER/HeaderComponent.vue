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
  <div class="container">
  <header>
    <ul>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
      <li><a href="#">link</a></li>
    </ul>
  </header>

  </div>
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