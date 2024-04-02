<template>
  <div class="map-container uk-container">
    <!-- <remote-script src="https://map.qq.com/api/gljs?v=1.exp&key=2YKBZ-SVEWA-QL5KF-CHNTT-YBXAT-36FOZ" /> -->
    <div id="main-map"></div>
    <div class="main-map-search">
      <AutoComplete
        v-model:value="search_keyword"
        style="width: 200px"
        size="large"
        placeholder="键入回车以搜索"
        :options="ad_data"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { h, ref, type Ref } from "vue";
import { AutoComplete } from "ant-design-vue";
import type { BaseOptionType } from 'ant-design-vue/es/select';

declare const TMap: any; // 声明腾讯地图API全局变量

interface Address extends BaseOptionType {
  value: string;
  id: string;
  name: string;
  location: string;
  address: string;
  price: string;
  vendor: string;
  management: string;
}

let map: any
let markLayers: any

export default {
  name: "Dashboard-Home",
  components: {
    // 'remote-script': {
    //   render() {
    //     return h('script', {
    //       type: 'text/javascript', src: this.src
    //     })
    //   },
    //   props: {
    //     src: { type: String, required: true },
    //   },
    // }
    AutoComplete,
  },
  data() {
    const search_keyword: Ref<string> = ref("");
    const ad_data: Ref<Address[]> = ref([]);
    return {
      ad_data,
      search_keyword,
    };
  },
  methods: {
    _mockFetchData(): { status: string; data: Address[] } {
      return {
        status: "success",
        data: [
          {
            id: "1",
            value: "大众新城",
            name: "大众新城",
            location: "45.694857, 126.632442",
            address: "民吉街63号",
            price: "8452",
            vendor: "黑龙江大众新城房地产开发有限公司",
            management: "厦门市住总物业管理有限公司",
          },
          {
            id: "2",
            value: "永吉家园",
            name: "永吉家园",
            location: "45.731941, 126.69399",
            address: "征仪路436号",
            price: "7647",
            vendor: "哈尔滨房地产开发有限公司",
            management: "金豪斯物业公司",
          },
        ],
      };
    },
    mountAPI(url: string, callback?: Function) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = url;
      document.head.appendChild(script);

      script.onload = () => {
        if (callback) callback();
      };
    },
    initMap() {
      var center = new TMap.LatLng(45.773816, 126.618839)
      map = new TMap.Map(document.getElementById("main-map"), {
        center: center, // 设置地图中心点坐标
        zoom: 13.2, // 设置地图缩放级别
        pitch: 43.5, // 设置俯仰角
        rotation: 45, // 设置地图旋转角度
      })
      markLayers = new TMap.MultiMarker({
        map: map,
        styles: {
          markStyle: new TMap.MarkerStyle({
            width: 25,
            height: 35,
            anchor: { x: 16, y: 32 },
          }),
        },
        geometries: [],
      });
      markLayers.add(
        this.ad_data.map((item) => ({
          id: item["id"],
          styleId: "markStyle",
          position: new TMap.LatLng(
            // @ts-ignore
            ...item["location"].match(/[\d\.]+/g).map((x) => Number(x))
          ),
        }))
      );
      //初始化infoWindow
      var infoWindow = new TMap.InfoWindow({
        map: map,
        position: new TMap.LatLng(39.984104, 116.307503),
        offset: { x: 0, y: -32 }, //设置信息窗相对position偏移像素，为了使其显示在Marker的上方
      });
      infoWindow.close(); //初始关闭信息窗关闭
      markLayers.on("click", (evt: any) => {
        let target = this.ad_data.find((tg) => tg["id"] === evt.geometry.id);
        if (!target) throw new Error("target not found");
        //设置infoWindow
        infoWindow.open(); //打开信息窗
        infoWindow.setPosition(evt.geometry.position); //设置信息窗位置
        infoWindow.setContent(`
      <div class="main-map-info-window">
        <h4>${target["name"]} <span style="color: red" font-size="large">${target["price"]}</span> <span style="font-size: middle">元/㎡</span></h4>
        <div><span>小区地址:</span> <span>${target["address"]}</span></div>
        <div><span>开发商:</span> <span>${target["vendor"]}</span></div>
        <div><span>物业公司:</span> <span>${target["management"]}</span></div>
      </div>
    `); //设置信息窗内容
      });
      console.info("complete import map");
    },
    onSearch(search_text: string) {},
    onSelect(value: any, option: BaseOptionType) {
      // console.debug(option.location)
      // @ts-ignore
      this.mapSkip(...(option as Address).location.match(/[\d\.]+/g).map(x => Number(x)))
    },
    mapSkip (lat: number, lng: number) {
      map.setCenter(new TMap.LatLng(lat, lng))
    }
  },
  mounted() {
    this.ad_data = this._mockFetchData()["data"];
    this.mountAPI(
      "https://map.qq.com/api/gljs?v=1.exp&key=2YKBZ-SVEWA-QL5KF-CHNTT-YBXAT-36FOZ",
      this.initMap
    )
  },
};
</script>

<style lang="less" scoped>
@mheight: 100%;
@mwidth: 100%;
@base-margin: 8px;

.map-container {
  height: @mheight;
  width: @mwidth;
  // margin: 0;
}

#main-map {
  height: @mheight;
  width: @mwidth;

  z-index: 0;
}

.main-map-search {
  position: absolute;
  top: 80px;
  padding: @base-margin @base-margin;
  z-index: 999;
}
</style>