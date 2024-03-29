<template>
  <nav class="uk-navbar-container">
    <div class="uk-container">
      <div uk-navbar>
        <div class="uk-navbar-left">
          <a class="uk-navbar-item uk-logo" @click="go2('')">
            <img src="/favicon.ico" style="width: 90px; " />
            WY Data
          </a>
        </div>
        <!-- <div class="uk-navbar-center">
          <span class="navbar-tagline">
            It's not just data,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's wy data.
          </span>
        </div> -->
        <div class="uk-navbar-right">
          <span class="navbar-tagline">
            It's not just data,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's wy data.
          </span>
          <ul class="uk-navbar-nav navbar">
            <li :class="{ 'uk-active': current_page === '/databoard/' }"><a @click="go2('')">首页</a></li>
            <li><a @click="() => { }">自动估值</a></li>
            <li :class="{ 'uk-active': current_page === '/databoard/price-indices' }"><a
                @click="go2('price-indices')">价格指数</a></li>
            <li>
              <a>热力分析</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li :class="{ 'uk-active': current_page === '/databoard/thermal-map/volume-price' }"><a @click="go2('thermal-map/volume-price/')">量价分析</a></li>
                  <li :class="{ 'uk-active': current_page === '/databoard/thermal-map/housing-resource' }"><a @click="go2('thermal-map/housing-resource/')">房源热力分析</a></li>
                </ul>
              </div>
            </li>
            <li><a @click="() => { }">分析报告</a></li>
            <li><a @click="go2('datasets')">网裕数据库</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  name: "Nav",
  // beforeRouteEnter(to, from, next) {
  //   next((vm: any) => {
  //     vm.initActive()
  //   })
  // },
  data() {
    return {
      current_page: ''
    }
  },
  methods: {
    go2(target: string) {
      this.$router.replace(`/databoard/${target}`)
    },
    initActive() {
      let path = this.$route.path
      this.current_page = path
      console.log(path)
    },
  },
  watch: {
    $route(to, from) {
      this.initActive()
    }
  },
  mounted() {
    this.initActive()
  }
}
</script>

<style lang="less" scoped>
.navbar > li > a {
  font-size: 1.2rem;
}

.navbar-tagline {
  // text-align: center;
  font-size: smaller;
  padding-inline-end: 20px;
}

@media (max-width: 1050px) {
  .navbar-tagline {
    display: none;
  }
}
</style>