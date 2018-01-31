<template>
  <article>
  <div class="container">
    <h2 class="ctitle"><b>模板分享</b> <span>好咖啡要和朋友一起品尝，好“模板”也要和同样喜欢它的人一起分享。</span></h2>
    <div class="blog" data-scroll-reveal="enter top" >
      <figure v-for="item in imgs">
        <ul>
          <a href="#"><img :src="item.img"/><span>{{item.name}}</span></a>          
        </ul>
        <p><a href="#">{{item.href}}</a></p>
        <figcaption>{{item.text}}</figcaption>
      </figure>
    </div>
    <div class="page"><a title="Total record"><b>107</b> </a><b>1</b><a href="/news/index_2.html">2</a><a href="/news/index_3.html">3</a><a href="/news/index_4.html">4</a><a href="/news/index_5.html">5</a><a href="/news/index_2.html">&gt;</a><a href="/news/index_5.html">&gt;&gt;</a></div>
  </div>
  </aside>
</article>
</template>

<script>
import './share.css'
export default {
  name: 'HelloWorld',
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
