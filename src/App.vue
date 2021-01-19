<template>
      <div id="app">
        <Navbar/>
        <Content/>
      </div>
  
</template>

<script>
import Navbar from './components/layouts/Navbar'
import Content from './components/Content.vue'

export default{
  components:{
    Navbar,
    Content
  }
}

</script>


<style scoped>
/* @import './assets/styles.scss';  */
div{
  overflow: hidden;
  height: 100vh;
}

</style>