<template>
  <div class="price-indices-container uk-container">
    <div></div>
    <div class="buttons">
      <Select :options="city_options" v-model:value="data_query_conditional.city"
        @change="changeIndicesViews({ city: $event?.toString() })" class="buttons-select"></Select>
      <Select :options="type_options" v-model:value="data_query_conditional.type"
        @change="changeIndicesViews({ type: $event ? 1 : 0 })" class="buttons-select"></Select>
      <RangePicker v-model:value="data_query_conditional.date_range" :placeholder="['开始日期', '结束日期']" @change="changeIndicesViews({}, true)" />
    </div>
    <div></div>
    <div id="price-indices-main"></div>
  </div>
</template>

<script lang="ts">

import { type Ref, ref } from 'vue';
import { Select, RangePicker } from 'ant-design-vue';
import dayjs, { type Dayjs } from 'dayjs';

declare var echarts: any;
type DateRange = [Dayjs, Dayjs];

var chartDom: any
var myChart: any
var options: any

export default {
  name: 'PriceIndices',
  components: {
    Select,
    RangePicker,
  },
  data() {
    const data_query_conditional: Ref<{
      type: 0 | 1,
      city: string,
      date_range: DateRange,
    }> = ref({
      type: 0,
      city: '230100',
      date_range: [dayjs().subtract(7, 'month'), dayjs()],
    })
    const type_options = ref([
      { label: '租聘', value: 0 },
      { label: '出售', value: 1 }
    ])
    const city_options = ref([
      { label: '哈尔滨', value: '230100' },
      { label: '绥化', value: '231200' },
      { label: '大庆', value: '230600' },
      { label: '佳木斯', value: '230800' },
      { label: '鸡西', value: '230300' },
      { label: '牡丹江', value: '231000' },
      { label: '鹤岗', value: '230400' },
      { label: '双鸭山', value: '230500' },
      { label: '七台河', value: '230900' },
      { label: '黑河', value: '231100' },
      { label: '齐齐哈尔', value: '230200' },
      { label: '大兴安岭', value: '232700' },
    ])
    return {
      type_options,
      city_options,
      data_query_conditional,
    }
  },
  methods: {
    _getDateBetween(start: Dayjs, end: Dayjs) {
      let dates = []
      let date = start
      while (date.isBefore(end)) {
        dates.push(date.format('YYYY-MM'))
        date = date.add(1, 'month')
      }
      dates.push(date.format('YYYY-MM'))

      return dates
    },
    initIndicesViews() {

      chartDom = document.getElementById('price-indices-main')
      myChart = echarts.init(chartDom)

      options = {
        title: {
          left: 'center',
          text: '区间房屋交易曲线'
        },
        tooltip: {
          trigger: 'axis',
          position: function (pt: any) {
            return [pt[0], '10%'];
          }
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          name: '时间',
          nameLocation: 'middle',
          data: [...this._getDateBetween(this.data_query_conditional.date_range[0], this.data_query_conditional.date_range[1])],
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          // name: '房屋交易数',
          nameLocation: 'middle',
          // axisLabel: {
          //   formatter: '{value} 套',
          //   align: 'center'
          // }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      }
      options && myChart.setOption(options);
    },
    /**
     * 当条件改变时重新渲染图表
     */
    changeIndicesViews(datasource?: { type?: 0 | 1, city?: string }, date_range_change?: boolean) {
      if (datasource) {
        // ...
      }
      if (date_range_change) {
        options = {
          ...options,
          xAxis: {
            ...options.xAxis,
            data: [...this._getDateBetween(this.data_query_conditional.date_range[0], this.data_query_conditional.date_range[1])],
          }
        }
      }
      myChart.setOption(options);
    }
  },
  mounted() {
    this.initIndicesViews()
  }
}
</script>

<style lang="less" scoped>
@mheight: 100%;
@mwidth: 100%;

.price-indices-container {
  display: flex;
  flex-direction: column;
  height: @mheight;
  width: @mwidth;
  justify-content: space-around;
  gap: 10px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.buttons-select {
  width: 100px;
}

#price-indices-main {
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>