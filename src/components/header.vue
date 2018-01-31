<template>
  <div>
  <header>
    <div class="logo" data-scroll-reveal="enter right over 1s"><a href="#"><img src="../assets/images/name.png"></a></div>
    <nav class="topnav" data-scroll-reveal="enter bottom over 1s after 1s">
      <router-link to='/index'><span>首页</span><span class="en">Home</span></router-link>
      <router-link to='/about'><span>关于我</span><span class="en">About</span></router-link>
      <router-link to='/life'><span>慢生活</span><span class="en">Life</span></router-link>
      <router-link to='/doing'><span>碎言碎语</span><span class="en">Doing</span></router-link>
      <router-link to='/share'><span>模板分享</span><span class="en">Share</span></router-link>
      <router-link to='/doing'><span>学无止境</span><span class="en">Learn</span></router-link>
      <router-link to='/saying'><span>留言板</span><span class="en">Saying</span></router-link>
    </nav>
  </header>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
