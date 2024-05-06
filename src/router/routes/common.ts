import type { RouteRecordRaw } from "vue-router"

export const commonRoutes: RouteRecordRaw[] = [
  {
    // -- 首页地图
    path: "",
    name: "DataBoard-Home",
    component: () => import("@/views/databoards/Home.vue"),
  },
  {
    // -- 自动估值
    path: "auto-valuation/",
    name: "DataBoard-AutoValuation",
    component: () => import("@/views/databoards/AutoValuation.vue"),
  },
  {
    // -- 租赁估值
    path: "lease-valuation/",
    name: "DataBoard-LeaseValuation",
    component: () => import("@/views/databoards/LeaseValuation.vue"),
  },
  {
    // -- 价格指数
    path: "price-indices/",
    name: "DataBoard-PriceIndices",
    component: () => import("@/views/databoards/PriceIndices.vue"),
  },
  {
    // -- 热力图
    path: "thermal-map/",
    name: "DataBoard-ThermalMap",
    children: [{
      // -- 成交量价
      path: "volume-price/",
      name: "DataBoard-ThermalMap-VolumePrice",
      component: () => import("@/views/databoards/thermalmap/VolumePrice.vue"),
    }, {
      // -- 住宅资源
      path: "housing-resource/",
      name: "DataBoard-ThermalMap-HousingResource",
      component: () => import("@/views/databoards/thermalmap/HousingResource.vue"),
    }],
    component: () => import("@/views/databoards/ThermalMap.vue"),
  },
  {
    // -- 分析报告
    path: "analysis-reports/",
    name: "DataBoard-AnalysisReports",
    component: () => import("@/views/databoards/AnalysisReports.vue")
  },
  {
    // -- 数据看板
    path: "datasets/",
    name: "DataBoard-Datasets",
    component: () => import("@/views/databoards/Datasets.vue"),
  }
]