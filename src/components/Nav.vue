<template>
  <nav class="uk-navbar-container">
    <div class="uk-container">
      <div uk-navbar class="main-bar">
        <div class="uk-navbar-left navbar-left">
          <a class="uk-navbar-item uk-logo" @click="go2('')" style="font: 1.8rem sans-serif;">
            <img src="/favicon.ico" style="width: 36px; " />
            WY·Data
          </a>
          <!-- <div>
            <span class="navbar-tagline">
            It's not just data,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's wy data.
          </span>
          </div> -->

        </div>
        <!-- <div class="uk-navbar-center">
          <span class="navbar-tagline">
            It's not just data,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's wy data.
          </span>
        </div> -->
        <!-- <div class="uk-navbar-right navbar-right">
          <span class="navbar-tagline">
            It's not just data,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's wy data.
          </span>
          <ul class="uk-navbar-nav navbar">
            <li :class="{ 'uk-active': current_page === '/databoard/' }"><a @click="go2('')">
                <HomeOutlined />首页
              </a></li>
            <li><a @click="() => { }">
                <AccountBookOutlined />自动估值
              </a></li>
            <li :class="{ 'uk-active': current_page === '/databoard/price-indices' }"><a @click="go2('price-indices')">
                <LineChartOutlined />价格指数
              </a></li>
            <li>
              <a>
                <PieChartOutlined />热力分析
              </a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li :class="{ 'uk-active': current_page === '/databoard/thermal-map/volume-price' }"><a
                      @click="go2('thermal-map/volume-price/')">量价分析</a></li>
                  <li :class="{ 'uk-active': current_page === '/databoard/thermal-map/housing-resource' }"><a
                      @click="go2('thermal-map/housing-resource/')">房源热力分析</a></li>
                </ul>
              </div>
            </li>
            <li><a @click="() => { }">
                <AuditOutlined />分析报告
              </a></li>
            <li><a @click="go2('datasets')"><DatabaseOutlined />网裕数据库</a></li>
          </ul>
        </div> -->
        <div class="uk-navbar-right navbar-right">
          <!-- <Menu mode="horizontal" class="inner-menu" >
            <MenuItem v-for="item in menu_items" :key="item.key" :item="item" :icon="item.icon" :children="item.children ? item.children : []">
              {{ item.label }}
            </MenuItem>
          </Menu> -->
          <!-- <span class="navbar-tagline">
            It's not just data,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;it's wy
            data.
          </span> -->
          <div class="navbar-tagline">
            <span>It's not just data,</span>
            <span>it's wy data.</span>
          </div>
          <Menu v-model:selectedKeys="current_page" mode="horizontal" class="inner-menu" :items="menu_items" @click="handleClick" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { h } from 'vue'
import { HomeOutlined, AccountBookOutlined, LineChartOutlined, PieChartOutlined, AuditOutlined, DatabaseOutlined } from '@ant-design/icons-vue'
import { Menu, MenuItem, MenuProps } from 'ant-design-vue'

export default {
  name: "Nav",
  // beforeRouteEnter(to, from, next) {
  //   next((vm: any) => {
  //     vm.initActive()
  //   })
  // },
  components: {
    // Icons
    HomeOutlined,
    AccountBookOutlined,
    LineChartOutlined,
    PieChartOutlined,
    AuditOutlined,
    DatabaseOutlined,

    // Components
    Menu, MenuItem,
  },
  data() {
    const menu_items: MenuProps['items'] = [
      {
        label: '首页',
        key: 'home',
        icon: () => h(HomeOutlined),
      }, {
        label: '自动估值',
        key: 'valuation',
        icon: () => h(AccountBookOutlined),
      },
      {
        label: '价格指数',
        key: 'price-indices',
        icon: () => h(LineChartOutlined),
      },
      {
        label: '热力分析',
        key: 'thermal-map',
        icon: () => h(PieChartOutlined),
        children: [
          {
            label: '量价分析',
            key: 'volume-price',
          },
          {
            label: '房源热力分析',
            key: 'housing-resource',
          },
        ]
      },
      {
        label: '分析报告',
        key: 'report',
        icon: () => h(AuditOutlined),
      },
      {
        label: '网裕数据库',
        key: 'datasets',
        icon: () => h(DatabaseOutlined),
      }
    ]
    return {
      current_page: ['home'],
      menu_items,
    }
  },
  methods: {
    // go2(target: string) {
    //   this.$router.replace(`/databoard/${target}`)
    // },
    // initActive() {
    //   let path = this.$route.path
    //   this.current_page = path
    //   console.log(path)
    // },
    handleClick(e: any) {
      // console.log('click ', e)
      this.$router.replace(`/databoard/${
        new Map([
          ['home', ''], 
          ['valuation', 'auto-valuation'],
          ['price-indices', 'price-indices'],
          ['thermal-map', 'thermal-map'],
          ['volume-price', 'thermal-map/volume-price'],
          ['housing-resource', 'thermal-map/housing-resource'],
          // ['report', 'report'],
          ['datasets', 'datasets'],
        ]).get(e.key)
      }`)
    }
  },
  watch: {
    // $route(to, from) {
    //   this.initActive()
    // }
  },
  mounted() {
    // this.initActive()
  }
}
</script>

<style lang="less" scoped>
.navbar>li>a {
  font-size: 1.2rem;
}

.navbar-left {
  // flex: 1;
  display: flex;
  // justify-content: space-around;
}

.navbar-left div {
  margin-inline: auto 20%;
}

.inner-menu {
  background-color: rgb(248, 248, 248);
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: large;
  margin-inline-start: auto;
}

.main-bar {
  justify-content: space-between;
  display: flex;
}

.navbar-tagline {
  // text-align: center;
  font-size: larger;
  // padding-inline-end: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-inline: 20px;
}

.navbar-tagline :nth-child(1) {
  vertical-align: bottom;
}

.navbar-tagline :nth-child(2) {
  // padding-inline: 20%;
  text-align: right;
  vertical-align: top;
}

.navbar-right {
  margin: 0;
  flex: 1;
}

@media (max-width: 1050px) {
  .navbar-tagline {
    display: none;
  }
}
</style>