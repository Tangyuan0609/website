<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script> 
import scrollreveal from './assets/js/scrollreveal.js'
import myHeader from './components/header'
//import myIndex from './module/index/index'
import myFooter from './components/footer'
export default {
  name: 'App',
  components: {
     myHeader,
     myFooter
  },
  mounted:function(){
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
      (function(){
        window.scrollReveal = new scrollReveal({reset: true});
      })();
    };
  }
}
</script>

<style>

</style>
