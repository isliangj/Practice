<template>
  <div id="app">
    <img src="./assets/vue.png">
    <h1> {{ msg }} </h1>
    <firstcomponent></firstcomponent>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent'
export default {
  data (){
    return{
      msg: 'Hello Vue!'
    }
  },
  component:{
    firstcomponent
  }
}
</script>

<style>
body{
  font-family: Helvetica, sans-serif;
}
</style>
