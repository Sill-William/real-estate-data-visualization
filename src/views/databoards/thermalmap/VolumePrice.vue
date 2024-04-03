<template>
  <context-holder />
  <div class="volume-price-termalmap-main-container uk-container">
    <div id="volumn-price-termalmap-main-view"></div>
  </div>
</template>

<script lang="ts">
import { message } from "ant-design-vue";

declare var echarts: any;

var chartDom: any;
var myChart: any;
var options: any;
var now_adcode: string;
var submap_options: any = undefined;
var bar_options: any = undefined;
var is_bar_now: boolean = false;
var locate_geo_map: Map<string, string[]> = new Map();

const [messageApi, contextHolder] = message.useMessage();

export default {
  name: "VolumnPriceThermalMap",
  components: {
    contextHolder,
  },
  data() {
    const data = [
      { name: "黑龙江省", value: 98, price: 100, adcode: "230000" },
      { name: "哈尔滨市", value: 30, price: 100, adcode: "230100" },
      { name: "市辖区", value: 55, price: 100, adcode: "230101" },
      { name: "道里区", value: 83, price: 100, adcode: "230102" },
      { name: "南岗区", value: 2, price: 100, adcode: "230103" },
      { name: "道外区", value: 5, price: 100, adcode: "230104" },
      { name: "平房区", value: 71, price: 100, adcode: "230108" },
      { name: "松北区", value: 23, price: 100, adcode: "230109" },
      { name: "香坊区", value: 47, price: 100, adcode: "230110" },
      { name: "呼兰区", value: 50, price: 100, adcode: "230111" },
      { name: "阿城区", value: 91, price: 100, adcode: "230112" },
      { name: "依兰县", value: 64, price: 100, adcode: "230123" },
      { name: "方正县", value: 65, price: 100, adcode: "230124" },
      { name: "宾县", value: 37, price: 100, adcode: "230125" },
      { name: "巴彦县", value: 81, price: 100, adcode: "230126" },
      { name: "木兰县", value: 38, price: 100, adcode: "230127" },
      { name: "通河县", value: 89, price: 100, adcode: "230128" },
      { name: "延寿县", value: 20, price: 100, adcode: "230129" },
      { name: "双城市", value: 86, price: 100, adcode: "230182" },
      { name: "尚志市", value: 100, price: 100, adcode: "230183" },
      { name: "五常市", value: 85, price: 100, adcode: "230184" },
      { name: "齐齐哈尔市", value: 51, price: 100, adcode: "230200" },
      { name: "市辖区", value: 19, price: 100, adcode: "230201" },
      { name: "龙沙区", value: 90, price: 100, adcode: "230202" },
      { name: "建华区", value: 34, price: 100, adcode: "230203" },
      { name: "铁锋区", value: 6, price: 100, adcode: "230204" },
      { name: "昂昂溪区", value: 17, price: 100, adcode: "230205" },
      { name: "富拉尔基区", value: 34, price: 100, adcode: "230206" },
      { name: "碾子山区", value: 35, price: 100, adcode: "230207" },
      { name: "梅里斯达斡尔族区", value: 77, price: 100, adcode: "230208" },
      { name: "龙江县", value: 39, price: 100, adcode: "230221" },
      { name: "依安县", value: 68, price: 100, adcode: "230223" },
      { name: "泰来县", value: 100, price: 100, adcode: "230224" },
      { name: "甘南县", value: 16, price: 100, adcode: "230225" },
      { name: "富裕县", value: 57, price: 100, adcode: "230227" },
      { name: "克山县", value: 10, price: 100, adcode: "230229" },
      { name: "克东县", value: 62, price: 100, adcode: "230230" },
      { name: "拜泉县", value: 53, price: 100, adcode: "230231" },
      { name: "讷河市", value: 21, price: 100, adcode: "230281" },
      { name: "鸡西市", value: 44, price: 100, adcode: "230300" },
      { name: "市辖区", value: 97, price: 100, adcode: "230301" },
      { name: "鸡冠区", value: 9, price: 100, adcode: "230302" },
      { name: "恒山区", value: 61, price: 100, adcode: "230303" },
      { name: "滴道区", value: 1, price: 100, adcode: "230304" },
      { name: "梨树区", value: 44, price: 100, adcode: "230305" },
      { name: "城子河区", value: 34, price: 100, adcode: "230306" },
      { name: "麻山区", value: 70, price: 100, adcode: "230307" },
      { name: "鸡东县", value: 51, price: 100, adcode: "230321" },
      { name: "虎林市", value: 7, price: 100, adcode: "230381" },
      { name: "密山市", value: 6, price: 100, adcode: "230382" },
      { name: "鹤岗市", value: 5, price: 100, adcode: "230400" },
      { name: "市辖区", value: 32, price: 100, adcode: "230401" },
      { name: "向阳区", value: 85, price: 100, adcode: "230402" },
      { name: "工农区", value: 59, price: 100, adcode: "230403" },
      { name: "南山区", value: 80, price: 100, adcode: "230404" },
      { name: "兴安区", value: 50, price: 100, adcode: "230405" },
      { name: "东山区", value: 53, price: 100, adcode: "230406" },
      { name: "兴山区", value: 75, price: 100, adcode: "230407" },
      { name: "萝北县", value: 74, price: 100, adcode: "230421" },
      { name: "绥滨县", value: 70, price: 100, adcode: "230422" },
      { name: "双鸭山市", value: 69, price: 100, adcode: "230500" },
      { name: "市辖区", value: 61, price: 100, adcode: "230501" },
      { name: "尖山区", value: 19, price: 100, adcode: "230502" },
      { name: "岭东区", value: 59, price: 100, adcode: "230503" },
      { name: "四方台区", value: 90, price: 100, adcode: "230505" },
      { name: "宝山区", value: 82, price: 100, adcode: "230506" },
      { name: "集贤县", value: 62, price: 100, adcode: "230521" },
      { name: "友谊县", value: 45, price: 100, adcode: "230522" },
      { name: "宝清县", value: 25, price: 100, adcode: "230523" },
      { name: "饶河县", value: 1, price: 100, adcode: "230524" },
      { name: "大庆市", value: 85, price: 100, adcode: "230600" },
      { name: "市辖区", value: 26, price: 100, adcode: "230601" },
      { name: "萨尔图区", value: 81, price: 100, adcode: "230602" },
      { name: "龙凤区", value: 99, price: 100, adcode: "230603" },
      { name: "让胡路区", value: 19, price: 100, adcode: "230604" },
      { name: "红岗区", value: 11, price: 100, adcode: "230605" },
      { name: "大同区", value: 39, price: 100, adcode: "230606" },
      { name: "肇州县", value: 38, price: 100, adcode: "230621" },
      { name: "肇源县", value: 22, price: 100, adcode: "230622" },
      { name: "林甸县", value: 33, price: 100, adcode: "230623" },
      { name: "杜尔伯特蒙古族自治县", value: 81, price: 100, adcode: "230624" },
      { name: "伊春市", value: 66, price: 100, adcode: "230700" },
      { name: "市辖区", value: 66, price: 100, adcode: "230701" },
      { name: "伊春区", value: 28, price: 100, adcode: "230702" },
      { name: "南岔区", value: 95, price: 100, adcode: "230703" },
      { name: "友好区", value: 56, price: 100, adcode: "230704" },
      { name: "西林区", value: 43, price: 100, adcode: "230705" },
      { name: "翠峦区", value: 16, price: 100, adcode: "230706" },
      { name: "新青区", value: 97, price: 100, adcode: "230707" },
      { name: "美溪区", value: 59, price: 100, adcode: "230708" },
      { name: "金山屯区", value: 64, price: 100, adcode: "230709" },
      { name: "五营区", value: 97, price: 100, adcode: "230710" },
      { name: "乌马河区", value: 0, price: 100, adcode: "230711" },
      { name: "汤旺河区", value: 26, price: 100, adcode: "230712" },
      { name: "带岭区", value: 41, price: 100, adcode: "230713" },
      { name: "乌伊岭区", value: 56, price: 100, adcode: "230714" },
      { name: "红星区", value: 53, price: 100, adcode: "230715" },
      { name: "上甘岭区", value: 94, price: 100, adcode: "230716" },
      { name: "嘉荫县", value: 82, price: 100, adcode: "230722" },
      { name: "铁力市", value: 88, price: 100, adcode: "230781" },
      { name: "佳木斯市", value: 17, price: 100, adcode: "230800" },
      { name: "市辖区", value: 65, price: 100, adcode: "230801" },
      { name: "向阳区", value: 88, price: 100, adcode: "230803" },
      { name: "前进区", value: 2, price: 100, adcode: "230804" },
      { name: "东风区", value: 15, price: 100, adcode: "230805" },
      { name: "郊区", value: 75, price: 100, adcode: "230811" },
      { name: "桦南县", value: 99, price: 100, adcode: "230822" },
      { name: "桦川县", value: 4, price: 100, adcode: "230826" },
      { name: "汤原县", value: 92, price: 100, adcode: "230828" },
      { name: "抚远县", value: 1, price: 100, adcode: "230833" },
      { name: "同江市", value: 77, price: 100, adcode: "230881" },
      { name: "富锦市", value: 24, price: 100, adcode: "230882" },
      { name: "七台河市", value: 15, price: 100, adcode: "230900" },
      { name: "市辖区", value: 58, price: 100, adcode: "230901" },
      { name: "新兴区", value: 39, price: 100, adcode: "230902" },
      { name: "桃山区", value: 56, price: 100, adcode: "230903" },
      { name: "茄子河区", value: 12, price: 100, adcode: "230904" },
      { name: "勃利县", value: 60, price: 100, adcode: "230921" },
      { name: "牡丹江市", value: 25, price: 100, adcode: "231000" },
      { name: "市辖区", value: 61, price: 100, adcode: "231001" },
      { name: "东安区", value: 100, price: 100, adcode: "231002" },
      { name: "阳明区", value: 21, price: 100, adcode: "231003" },
      { name: "爱民区", value: 93, price: 100, adcode: "231004" },
      { name: "西安区", value: 95, price: 100, adcode: "231005" },
      { name: "东宁县", value: 53, price: 100, adcode: "231024" },
      { name: "林口县", value: 81, price: 100, adcode: "231025" },
      { name: "绥芬河市", value: 17, price: 100, adcode: "231081" },
      { name: "海林市", value: 94, price: 100, adcode: "231083" },
      { name: "宁安市", value: 45, price: 100, adcode: "231084" },
      { name: "穆棱市", value: 97, price: 100, adcode: "231085" },
      { name: "黑河市", value: 31, price: 100, adcode: "231100" },
      { name: "市辖区", value: 65, price: 100, adcode: "231101" },
      { name: "爱辉区", value: 44, price: 100, adcode: "231102" },
      { name: "嫩江县", value: 66, price: 100, adcode: "231121" },
      { name: "逊克县", value: 57, price: 100, adcode: "231123" },
      { name: "孙吴县", value: 86, price: 100, adcode: "231124" },
      { name: "北安市", value: 53, price: 100, adcode: "231181" },
      { name: "五大连池市", value: 13, price: 100, adcode: "231182" },
      { name: "绥化市", value: 14, price: 100, adcode: "231200" },
      { name: "市辖区", value: 95, price: 100, adcode: "231201" },
      { name: "北林区", value: 32, price: 100, adcode: "231202" },
      { name: "望奎县", value: 35, price: 100, adcode: "231221" },
      { name: "兰西县", value: 81, price: 100, adcode: "231222" },
      { name: "青冈县", value: 44, price: 100, adcode: "231223" },
      { name: "庆安县", value: 39, price: 100, adcode: "231224" },
      { name: "明水县", value: 29, price: 100, adcode: "231225" },
      { name: "绥棱县", value: 55, price: 100, adcode: "231226" },
      { name: "安达市", value: 88, price: 100, adcode: "231281" },
      { name: "肇东市", value: 31, price: 100, adcode: "231282" },
      { name: "海伦市", value: 59, price: 100, adcode: "231283" },
      { name: "大兴安岭地区", value: 4, price: 100, adcode: "232700" },
      { name: "加格达奇区", value: 14, price: 100, adcode: "232701" },
      { name: "松岭区", value: 21, price: 100, adcode: "232702" },
      { name: "新林区", value: 63, price: 100, adcode: "232703" },
      { name: "呼中区", value: 91, price: 100, adcode: "232704" },
      { name: "呼玛县", value: 36, price: 100, adcode: "232721" },
      { name: "塔河县", value: 26, price: 100, adcode: "232722" },
      { name: "漠河县", value: 35, price: 100, adcode: "232723" },
    ];
    return {
      data,
      messageApi,
    };
  },
  methods: {
    async buildMap(locate_code: string, full?: boolean): Promise<Object> {
      let request_url = `https://geo.datav.aliyun.com/areas_v3/bound/${locate_code}${full ? "_full" : ""
        }.json`;
      console.debug(request_url);
      this.messageApi.loading("获取数据中");
      let fetch_results = await fetch(request_url, {
        method: "GET",
      })
        .catch((err) => {
          console.error(err);
          this.messageApi.error("后台获取数据失败，出现错误");
        })
        .finally(() => this.messageApi.success("数据抓取完毕"));
      if (!fetch_results) throw new Error("数据抓取失败");
      // console.log(await fetch_results.json())
      let geo_json = await fetch_results.json();
      // console.log(geo_json)
      echarts.registerMap(`${locate_code}_${full ? "full" : ""}_map`, geo_json);
      let locate_options = {
        title: {
          text: "黑龙江省房屋量价热力图",
          subtext: "©️版权所有",
        },
        tooltip: {
          trigger: "item",
          // formatter: "{b}<br />{c}万套<br />{d}万/套",
          formatter: function (params: any) {
            return params.name + '<br />' + params.value + '万套<br />' + params.data.price + '万/套';
          }
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        visualMap: {
          min: 8,
          max: 20,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        series: [
          {
            name: "黑龙江省房屋量价",
            type: "map",
            map: `${locate_code}_${full ? "full" : ""}_map`,
            label: {
              show: true,
            },
            data: this.data,
          },
        ],
      };
      return locate_options;
    },
    async buildSeniorBarChartMap(
      locate_code: string
    ): Promise<[Object, Object]> {
      let request_url = `https://geo.datav.aliyun.com/areas_v3/bound/${locate_code}_full.json`;
      this.messageApi.loading("获取数据中");
      // console.debug(request_url)
      let fetch_results = await fetch(request_url, {
        method: "GET",
      })
        .catch((err) => {
          console.error(err);
          this.messageApi.error("后台获取数据失败，出现错误");
        })
        .finally(() => this.messageApi.success("数据抓取完毕"));
      if (!fetch_results) throw new Error("数据抓取失败");
      let geo_json = await fetch_results.json();
      locate_geo_map.set(
        locate_code,
        (geo_json.features as Array<any>).map(
          (x: any) => x["properties"]["name"]
        )
      );
      // console.debug(locate_geo_map)
      echarts.registerMap(`${locate_code}_map`, geo_json);
      let map_options = {
        // ...
        title: {
          text: "区域房源热力图",
          subtext: "©版权所有",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br />{c}(万/套)",
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        visualMap: {
          left: "right",
          min: 8,
          max: 20,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        series: [
          {
            id: "population",
            type: "map",
            roam: true,
            map: `${locate_code}_map`,
            animationDurationUpdate: 1000,
            universalTransition: true,
            data: this.data,
            label: {
              show: true,
            },
          },
        ],
      };
      let bar_options = {
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          axisLabel: {
            rotate: 30,
          },
          data: this.data.map(function (item) {
            return item.name;
          }),
        },
        animationDurationUpdate: 1000,
        series: {
          type: "bar",
          id: "population",
          data: this.data.map(function (item) {
            return item.value;
          }),
          universalTransition: true,
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br />{c}(万/套)",
        },
      };
      return [map_options, bar_options];
    },
    async initThermalMap() {
      chartDom = document.getElementById("volumn-price-termalmap-main-view");
      myChart = echarts.init(chartDom);

      // myChart.showLoading()
      options = await this.buildMap("230000", true);

      myChart.on("click", async (params: any) => {
        console.debug(params.data["adcode"]);
        let re = /^23[\d]{2}00$/;
        // console.log(params.data, (params.data['adcode'] as string).search(re))
        if ((params.data["adcode"] as string).search(re) === -1) {
          console.debug("locate map");
          // myChart.setOption(options, true)
          let target_areas = locate_geo_map.get(now_adcode);
          console.debug(target_areas);
          // let locate_region = echarts.getMap(`${now_adcode}_full_map`)
          // console.debug(locate_region)
          // options =  ? bar_options : submap_options
          options = !is_bar_now
            ? {
              ...bar_options,
              series: {
                ...bar_options.series,
                data: this.data.filter(
                  (x) => target_areas?.findIndex((y) => x.name === y) !== -1
                ),
              },
              yAxis: {
                ...bar_options.yAxis,
                data: target_areas,
              },
            }
            : {
              ...submap_options,
              series: [
                {
                  ...submap_options.series[0],
                  data: this.data.filter(
                    (x) => target_areas?.findIndex((y) => x.name === y) !== -1
                  ),
                },
              ],
            };
          if (is_bar_now) {
            options = {
              ...submap_options,
              series: [
                {
                  ...submap_options.series[0],
                  data: this.data.filter(
                    (x) => target_areas?.findIndex((y) => x.name === y) !== -1
                  ),
                },
              ],
            };
          } else {
            options = {
              ...bar_options,
              series: {
                ...bar_options.series,
                data: this.data.filter(
                  (x) => target_areas?.findIndex((y) => x.name === y) !== -1
                ),
              },
              yAxis: {
                ...bar_options.yAxis,
                data: target_areas,
              },
            };
          }
          is_bar_now = !is_bar_now;
          console.debug(options);
          options && myChart.setOption(options, true);
        } else {
          console.debug("full map");
          // options = await this.buildMap(params.data['adcode'], true)
          let temp_options = await this.buildSeniorBarChartMap(
            params.data["adcode"]
          );
          submap_options = temp_options[0];
          bar_options = temp_options[1];
          now_adcode = params.data["adcode"];
          // myChart.on("click", options === submap_options ? bar_options : submap_options)
          // console.debug(options)
          options = submap_options;
          options && myChart.setOption(options, true);
        }
      });
      myChart.on("restore", async () => {
        options = await this.buildMap("230000", true);
        options && myChart.setOption(options);
      });
      options && myChart.setOption(options);
    },
  },
  mounted() {
    this.initThermalMap();
  },
};
</script>

<style lang="less" scoped>
@mheight: 100%;
@mwidth: 100%;

.volume-price-termalmap-main-container {
  width: @mwidth;
  height: @mheight;
}

#volumn-price-termalmap-main-view {
  width: @mwidth;
  height: @mheight;
}
</style>