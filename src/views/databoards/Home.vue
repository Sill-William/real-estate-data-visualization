<template>
  <div class="map-container">
    <remote-script src="https://map.qq.com/api/gljs?v=1.exp&key=2YKBZ-SVEWA-QL5KF-CHNTT-YBXAT-36FOZ" />
    <div id="main-map"></div>
  </div>
</template>

<script lang="ts">
import { h, ref, type Ref } from 'vue'

declare const TMap: any; // 声明腾讯地图API全局变量
let map, markLayers;

export default {
  name: 'Dashboard-Home',
  components: {
    'remote-script': {
      render() {
        return h('script', {
          type: 'text/javascript', src: this.src
        })
      },
      props: {
        src: { type: String, required: true },
      },
    }
  },
  data() {
    
    return {
      
    }
  },
  methods: {
    mountAPI(url: string, callback?: Function) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url
      document.head.appendChild(script)

      script.onload = () => {
        if (callback) callback()
      }
    },
    initMap() {

      var center = new TMap.LatLng(45.773816, 126.618839)
      map = new TMap.Map(document.getElementById('main-map'), {
        center: center,  // 设置地图中心点坐标
        zoom: 13.2,   // 设置地图缩放级别
        pitch: 43.5,  // 设置俯仰角
        rotation: 45     // 设置地图旋转角度
      })
      markLayers = new TMap.MultiMarker({
        map: map,
        styles: {
          "markStyle": new TMap.MarkerStyle({
            "width": 25,
            "height": 35,
            "anchor": { x: 16, y: 32 },
          })
        },
        geometries: []
      })
      console.info('complete import map')
    },
  },
  mounted() {
    this.mountAPI('https://map.qq.com/api/gljs?v=1.exp&key=2YKBZ-SVEWA-QL5KF-CHNTT-YBXAT-36FOZ', this.initMap)
  }
}
</script>

<style lang="less" scoped>
@mheight: 100%;
@mwidth: 100%;

.map-container {
  height: @mheight;
  width: @mwidth;
}

#main-map {
  height: @mheight;
  width: @mwidth;

  z-index: 0;
}
</style>