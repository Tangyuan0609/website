<template>
  <article>
  <div class="container">
    <div class="blog" data-scroll-reveal="enter top" >
      <figure v-for="item in imgs">
        <ul>
          <a href="#"><img :src="item.img"/><span>{{item.name}}</span></a>          
        </ul>
        <p><a href="#">{{item.href}}</a></p>
        <figcaption>{{item.text}}</figcaption>
      </figure>
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
  </div>
</article>
</template>

<script>
import './index.css'
export default {
 // name: 'HelloWorld',
  data () {
    return {
      imgs:[
          {
            img:'/static/images/t01.jpg',
            name:'下载个人博客模板',
            href:'灯具公司复古风格PSD设计稿',
            text:'此模板为PSD设计稿，复古风格。首页主要突出产品，以及公司简介。手绘灯作为头部背景图片，这个比较特别。html可以做出灯一闪一闪的效果，或者说旁边有个按钮...'
          },
          {
            img:'/static/images/t02.jpg',
            name:'下载个人博客模板',
            href:'个人博客模板古典系列之――江南墨..',
            text:'一共是四个页面，首页，图文列表，图片列表，文字内容。此模板风格为中国古典风格，山水画墨迹成就一幅江南墨卷。页面首页设计较为简单，突出文章重点。图文列表显示...'
          },
          {
            img:'/static/images/t03.jpg',
            name:'下载个人博客模板',
            href:'灯具公司复古美丽的茧',
            text:'让世界拥有它的脚步，让我保有我的茧。当溃烂已极的心灵再不想做一丝一毫的思索时，就让我静静回到我的茧内，以回忆为睡榻，以悲哀为覆被，这是我唯一的美丽。'
          }
      ],
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
