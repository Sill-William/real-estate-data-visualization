<template>
  <div class="nav">
    <div class="logo-title">
      <img src="/favicon.ico" style="width: 36px; height: 36px;" />
      <span>WY·Data</span>
    </div>
    <div class="tagline">
      <span>It's not just data,</span>
      <span>It's wy data.</span>
    </div>
    <div class="menu">
      <Menu v-model:selectedKeys="current_page" mode="horizontal" :items="menu_items" @click="handleClick"
        theme="dark" />
    </div>
  </div>
</template>

<script lang="ts">
import { h } from 'vue'
import { HomeOutlined, AccountBookOutlined, LineChartOutlined, PieChartOutlined, AuditOutlined, DatabaseOutlined, FundViewOutlined, LikeOutlined } from '@ant-design/icons-vue'
import { Menu, MenuItem, type MenuProps } from 'ant-design-vue'

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
    LikeOutlined,
    FundViewOutlined,

    // Components
    Menu, MenuItem,
  },
  data() {
    const menu_items: MenuProps['items'] = [
      {
        label: '楼盘词典',
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
      },
      {
        label: '案例库',
        key: 'instances',
        icon: () => h(FundViewOutlined)
      },
      {
        label: '关于我们',
        key: 'about',
        icon: () => h(LikeOutlined)
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
      this.$router.replace(`/databoard/${new Map([
        ['home', ''],
        ['valuation', 'auto-valuation'],
        ['price-indices', 'price-indices'],
        ['thermal-map', 'thermal-map'],
        ['volume-price', 'thermal-map/volume-price'],
        ['housing-resource', 'thermal-map/housing-resource'],
        ['report', 'analysis-reports'],
        ['datasets', 'datasets'],
        ['instances', 'instances-repository'],
        ['about', 'about'],
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
@standard-margin: 8px;

.nav {
  display: flex;
  height: 100%;
}

.logo-title {
  display: flex;
  align-items: center;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-inline-start: @standard-margin;
  }
}

.tagline {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  margin-inline: auto;
  // flex: 1;
  width: 250px;

  span {
    line-height: 100%;
    font-size: 1.3rem;
    text-align: start;
  }

  span:last-child {
    text-align: end;
  }
}

.menu {
  margin-inline-start: auto;
}

@media (max-width: 1170px) {
  .tagline {
    display: none;
  }
}

@media (max-width: 900px) {
  .logo-title {
    span {
      display: none;
    }
  }
}

@media (max-width: 805px) {
  .logo-title {
    img {
      display: none;
    }
  }
}
</style>