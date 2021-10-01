<template>
  <div id="app">

    <h3> {{ title }}</h3>
   
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){

    return {
        title:'United Hospital,Dhaka'
    }

  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#003366;
  margin-top: 60px;
}
</style>
