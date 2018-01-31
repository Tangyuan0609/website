<template>
  <article>
  <div class="container">
    <h2 class="ctitle"><b>慢生活</b> <span>“慢生活”不是懒惰，放慢速度不是拖延时间，而是让我们在生活中寻找到平衡。 </span></h2>
    <div class="photowall">
      <ul class="wall_a">
        <li v-for="item in photo">
          <a href="/">
            <img :src="item.img">
            <figcaption>
              <h2>{{item.text}}</h2>
            </figcaption>
          </a>
        </li>
      </ul>
    </div>
    <ul class="cbp_tmtimeline">
      <li v-for="item in times">
        <time class="cbp_tmtime"><span>{{item.mouth}}</span><span>{{item.year}}</span></time>
        <div class="cbp_tmicon"></div>
        <div class="cbp_tmlabel" data-scroll-reveal="enter right over 1s" >
          <h2>{{item.tit}}</h2>
          <p>
            <span class="blogpic"><a href="#"><img :src="item.img"/></a></span>
            {{item.text}}
            <a href="/" target="_blank" class="readmore">{{item.btn}}</a>
          </p>
        </div>
      </li>
    </ul>
    <div class="page"><a title="Total record"><b>107</b> </a><b>1</b><a href="/news/index_2.html">2</a><a href="/news/index_3.html">3</a><a href="/news/index_4.html">4</a><a href="/news/index_5.html">5</a><a href="/news/index_2.html">&gt;</a><a href="/news/index_5.html">&gt;&gt;</a></div>
  </div>
  </aside>
</article>
</template>

<script>
import './life.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      times:[
          {
            mouth:'08-08',
            year:'2017',
            tit:'三步实现滚动条触动css动画效果',
            img:'/static/images/t01.jpg',
            text:'现很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...',
            btn:'阅读全文>>'
          },
          {
            mouth:'01-08',
            year:'2018',
            tit:'三步实现滚动条触动css动画效果',
            img:'/static/images/t01.jpg',
            text:'现很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...',
            btn:'阅读全文>>'
          },
          {
            mouth:'01-08',
            year:'2018',
            tit:'三步实现滚动条触动css动画效果',
            img:'/static/images/t01.jpg',
            text:'现很多网站都有这种效果，我就整理了一下，分享出来。利用滚动条来实现动画效果，ScrollReveal.js 用于创建和管理元素进入可视区域时的动画效果，帮助你的网站增加吸引力...',
            btn:'阅读全文>>'
          }
      ],
      photo:[
        {
          img:'/static/images/p01.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
        {
          img:'/static/images/p02.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
        {
          img:'/static/images/p03.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
        {
          img:'/static/images/p04.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
        {
          img:'/static/images/p05.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
        {
          img:'/static/images/p06.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
        {
          img:'/static/images/p01.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
        {
          img:'/static/images/p02.jpg',
          text:'不再因为别人过得好而焦虑，在没有人看得到你的时候依旧能保持节奏'
        },
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
