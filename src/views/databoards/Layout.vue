<template>
  <!-- <div class="main">
    <div>
      <Nav />
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div> -->
  <div>
    <Layout class="main">
      <LayoutHeader>
        <Nav />
      </LayoutHeader>
      <LayoutContent class="body">
        <router-view></router-view>
      </LayoutContent>
    </Layout>
  </div>
</template>

<script>
import { Layout, LayoutHeader, LayoutContent } from 'ant-design-vue'

import Nav from '@/components/Nav.vue'

export default {
  name: 'Dashboard-Home',
  components: {
    Nav,

    Layout, LayoutContent, LayoutHeader
  },
  data() {
    return { }
  }
}
</script>

<style lang="less">
@mheight: 100vh;
@mwidth: 100vw;

.main {
  height: @mheight;
  width: @mwidth;
  min-height: @mheight;
  min-width: @mwidth;

  display: flex;
  flex-direction: column;

  overflow: hidden;
}

.body {
  flex: 1;
  max-height: 100%;
  overflow-y: scroll;
}
</style>