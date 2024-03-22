<template>
  <div class="main">
    <div>
      <Nav />
    </div>
    <div class="body uk-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Dashboard-Home',
  components: {
    Nav,
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
}
</style>