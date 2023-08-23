import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

import Layout from '@/views/Layout.vue';
import ArticleDetail from '@/views/ArticleDetail.vue';
import Article from '@/views/Article.vue';
import Collect from '@/views/Collect.vue';
import Like from '@/views/Like.vue';
import User from '@/views/User.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/like',
          component: Like
        },
        {
          path: '/user',
          component: User
        },
      ]
    },
    {
      path: '/detail',
      component: ArticleDetail
    }
  ]
})

export default router