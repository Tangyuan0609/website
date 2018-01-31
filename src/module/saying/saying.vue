<template>
  <article>
  <div class="container">
    <h2 class="ctitle"><b>留言板</b> <span>你，生命中最重要的过客，之所以是过客，因为你未曾为我停留。</span></h2>
    <div class="gbook">
      <div class="about">
        <div id="fountainG">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div class="about_girl">
          <ul>
            <li v-for="item in about">
              <span>
                <a href="/"><img :src="item.img"></a>
              </span>
              <p>{{item.text}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </aside>
</article>
</template>

<script>
import './saying.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      about:[
        {
          img:'/static/images/girl.jpg',
          text:'当您驻足停留过，从此便注定我们的缘分。站在时间的尽头，我们已是朋友，前端的路上我再也不用一个人独自行走。'
        },
        {
          img:'/static/images/girl.jpg',
          text:'当您驻足停留过，从此便注定我们的缘分。站在时间的尽头，我们已是朋友，前端的路上我再也不用一个人独自行走。'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
