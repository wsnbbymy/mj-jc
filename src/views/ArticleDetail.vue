<template>
  <div class="article-detail-page" v-if="detail.id">
    <nav class="nav"> <span class="back" @click="$router.back()">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{ detail.stem }}</h1>
      <p>{{detail.createdAt}} | {{ detail.views }} 浏览量 | {{ detail.likeCount }} 点赞数</p>
      <p>
        <img :src="detail.creatorAvatar" alt=""> 
        <span>{{ detail.creatorName }}</span> 
      </p>
    </header>
    <main class="body">  
      {{ detail.content }}
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleDetailPage',
  data () {
    return {
      detail: ''
    }
  },
  async created () {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles/'+this.$route.query.id);
    this.detail = res.data.result
    console.log(this.detail);
  }
};
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
     padding: 0 15px;
     p {
       color: #999;
       font-size: 12px;
       display: flex;
       align-items: center;
     }
     img {
       width: 40px;
       height: 40px;
       border-radius: 50%;
       overflow: hidden;
     }
  }
  .body {
     padding: 0 15px;
  }
}
</style>