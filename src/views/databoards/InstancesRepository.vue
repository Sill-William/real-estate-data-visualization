<template>
  <div class="uk-container">
    <div class="uk-margin-top">
      <div>
        <Form :label-col="{ span: 8 }" >
          <Row>
            <Col :span="6">
              <FormItem label="行政区">
                <Input v-model:value="form_state.district" placeholder="省/市/区" />
              </FormItem>
            </Col>
            <Col :span="6">
              <FormItem label="小区">
                <Input v-model:value="form_state.community" placeholder="小区" />
                </FormItem>
            </Col>
            <Col :span="6">
              <FormItem label="面积">
                <Input placeholder="面积" v-model:value="form_state.area" suffix="平方米" />
                </FormItem>
            </Col>
            <Col :span="6">
              <FormItem label="户型">
                <Input v-model:value="form_state.layout" placeholder="户型"/>
              </FormItem>
            </Col>
            <Col :span="6">
              <FormItem label="装修">
                <Input v-model:value="form_state.decoration" placeholder="装修"/>
              </FormItem>                
            </Col>
            <Col :span="6">
              <FormItem label="朝向" >
                <Input v-model:value="form_state.orientation" placeholder="朝向" />
              </FormItem>   
            </Col>
            <Col :span="6">
              <FormItem label="单价">
                <Input placeholder="单价" v-model:value="form_state.unitPrice" suffix="元/平方米" />
              </FormItem>   
            </Col>
            <Col :span="6">
              <FormItem label="总价">
                <Input placeholder="总价" v-model:value="form_state.totalPrice" suffix="元" />
              </FormItem>   
            </Col>
            <Col :span="6">
              <FormItem label="挂牌/成交时间">
                <DatePicker v-model:value="form_state.listingTime" style="width: 100%;" placeholder="挂牌/成交时间" :disabledDate="_listingTimeIsVaild" />
              </FormItem>   
            </Col>
          </Row>
        </Form>
      </div>
      <!-- <Divider /> -->
      <Tabs v-model:activeKey="activeKey">
        <TabPane :key="1" tab="挂牌出售案例">
          <Table :columns="columns" :data-source="dataSource" />
        </TabPane>
        <TabPane :key="2" tab="挂牌出租案例">
          <Table :columns="columns" :data-source="dataSource" />
        </TabPane>
        <TabPane :key="3" tab="司法鉴定案例">
          <Table :columns="columns" :data-source="dataSource" />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Row, Col,
  Tabs, TabPane,
  Divider,
  Form, FormItem, FormInstance,
  DatePicker, Input, 
  Table
} from 'ant-design-vue'
import { reactive, ref } from 'vue'
import dayjs, { Dayjs } from 'dayjs'

// 行政区 省/市/区，小区，面积，户型，装修、朝向、挂牌时间、单价、总价
interface IForm {
  district: string,
  community: string,
  area: number,
  layout: string,
  decoration: string,
  orientation: string,
  listingTime: string,
  unitPrice: number,
  totalPrice: number,
}

export default {
  name: "InstancesRepository",
  components: {
    Row, Col,
    Tabs, TabPane,
    Divider,
    Form, FormItem,
    DatePicker, Input, 
    Table
  },
  data() {
    const form_ref = ref<FormInstance>()
    const form_state = reactive<IForm>({
      district: '',
      community: '',
      area: 0,
      layout: '',
      decoration: '',
      orientation: '',
      listingTime: '',
      unitPrice: 0,
      totalPrice: 0,
    })
    const columns = [
      { title: '行政区', dataIndex: 'district', key: 'district' },
      { title: '小区', dataIndex: 'community', key: 'community' },
      { title: '面积', dataIndex: 'area', key: 'area' },
      { title: '户型', dataIndex: 'layout', key: 'layout' },
      { title: '装修', dataIndex: 'decoration', key: 'decoration' },
      { title: '朝向', dataIndex: 'orientation', key: 'orientation' },
      { title: '挂牌时间', dataIndex: 'listingTime', key: 'listingTime' },
      { title: '单价', dataIndex: 'unitPrice', key: 'unitPrice' },
      { title: '总价', dataIndex: 'totalPrice', key: 'totalPrice' },
    ]
    const dataSource = [
      {
        key: '1',
        district: '上海市',
        community: 'XXX小区',
        area: 100,
        layout: '2室1厅1卫',
        decoration: '精装',
        orientation: '南',
        listingTime: '2022-01-01',
        unitPrice: 10000,
        totalPrice: 100000,
      }
    ]
    return {
      form_ref,
      form_state,
      columns,
      dataSource,
      activeKey: 1,
    }
  },
  methods: {
    _listingTimeIsVaild(date: Dayjs) {
      return date.isAfter(dayjs().endOf('day'))
    },
  }
}
</script>

<style></style>