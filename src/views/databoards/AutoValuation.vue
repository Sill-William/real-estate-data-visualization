<template>
  <div class="uk-container">
    <Card class="uk-margin-top">
      <template #title>
        <span>自动估值</span>
      </template>
      <Form :label-col="{ span: 5 }" ref="form_ref" :model="form_state">
        <Row :gutter="24">
          <Col :span="12">
          <FormItem name="name" label="小区名称" :rules="[{ required: true, message: '此为必填项' }]">
            <Input placeholder="小区名称" v-model:value="form_state.name" />
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="address" label="小区地址" :rules="[{ required: true, message: '此为必填项' }]">
            <Input placeholder="小区地址" v-model:value="form_state.address" />
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="building" label="楼栋">
            <InputGroup compact>
              <Input placeholder="楼栋" suffix="栋" style="width: 40%" v-model:value="form_state.building.build" />
              <Input placeholder="单元" suffix="单元" style="width: 30%" v-model:value="form_state.building.unit"/>
              <Input placeholder="户号" suffix="室" style="width: 30%" v-model:value="form_state.building.room"/>
            </InputGroup>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="floor" label="层数" :rules="[{ required: true, message: '此为必填项' }, ]">
            <InputGroup compact>
              <Input placeholder="所在层" suffix="层" style="width: 45%" v-model:value="form_state.floor.currentFloor" />
              <Input placeholder="" value="/" style="width: 10%" disabled />
              <Input placeholder="总层数" suffix="层" style="width: 45%" v-model:value="form_state.floor.totalFloor"/>
            </InputGroup>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="area" label="建筑面积" :rules="[{ required: true, message: '此为必填项' }, { pattern: new RegExp(/^[\d]+$/), message: '请输入合法的数字' }]">
            <Input placeholder="建筑面积" v-model:value="form_state.area" suffix="平方米"/>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="buildYear" label="建成年份">
            <DatePicker picker="year" placeholder="建成年份" style="width: 100%;" :disabledDate="_buildYearIsVaild" v-model:value="form_state.buildYear"/>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="buildType" label="建筑形式" :rules="[{ required: true, message: '此为必填项' }]">
            <Select placeholder="建筑形式" v-model:value="form_state.buildType">
              <SelectOption value="1">
                普通住宅
              </SelectOption>
              <SelectOption value="2">
                洋房
              </SelectOption>
              <SelectOption value="3">
                别墅
              </SelectOption>
            </Select>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="decoration" label="装修" :rules="[{ required: true, message: '此为必填项' }]">
            <Select placeholder="装修" v-model:value="form_state.decoration">
              <SelectOption value="1">
                毛坯
              </SelectOption>
              <SelectOption value="2">
                简装
              </SelectOption>
              <SelectOption value="3">
                精装
              </SelectOption>
              <SelectOption value="4">
                豪装
              </SelectOption>
            </Select>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="orientation" label="朝向" :rules="[{ required: true, message: '此为必填项' }]">
            <Select placeholder="朝向" v-model:value="form_state.orientation">
              <SelectOption value="1">
                东
              </SelectOption>
              <SelectOption value="2">
                南
              </SelectOption>
              <SelectOption value="3">
                西
              </SelectOption>
              <SelectOption value="4">
                北
              </SelectOption>
              <SelectOption value="5">
                东南
              </SelectOption>
              <SelectOption value="6">
                东北
              </SelectOption>
              <SelectOption value="7">
                西南
              </SelectOption>
              <SelectOption value="8">
                西北
              </SelectOption>
              <SelectOption value="9">
                南北东
              </SelectOption>
              <SelectOption value="10">
                东西
              </SelectOption>
            </Select>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="favorable" label="有利因素">
            <Select placeholder="有利因素" v-model:value="form_state.favorable">
              <SelectOption value="1">
                平面布局合理
              </SelectOption>
              <SelectOption value="2">
                室内层高较高
              </SelectOption>
              <SelectOption value="3">
                不临街
              </SelectOption>
            </Select>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="unfavorable" label="不利因素">
            <Select placeholder="不利因素" v-model:value="form_state.unfavorable">
              <SelectOption value="1">
                挡光
              </SelectOption>
              <SelectOption value="2">
                冷山
              </SelectOption>
              <SelectOption value="3">
                临街
              </SelectOption>
            </Select>
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="24">
          <Col :offset="8" :span="8" class="btn-box">
            <Button type="primary" @click="() => valuation_modal_shown = true">估值</Button>
            <Button >重置</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  </div>

  <Modal v-model:open="valuation_modal_shown">
    <Descriptions title="评估结果" :column="2">
      <DescriptionsItem :span="2">
        <Statistic title="总价（万元）" :value="109" />
      </DescriptionsItem>
      <DescriptionsItem label="评估对象" :span="2">
        康健小区(康安路123号,建国街303-337号钢铁街2-166号前进路88副1号建国街303-337号康安路107-123号，前进路88副1号，钢铁街2-166号,康安路107-123号)
      </DescriptionsItem>
      <DescriptionsItem label="所在栋/单元/室">
        栋单元室
      </DescriptionsItem>
      <DescriptionsItem label="所在层">
        3层
      </DescriptionsItem>
      <DescriptionsItem label="总层数">
        7层
      </DescriptionsItem>
      <DescriptionsItem label="建筑面积">
        100.35平方米
      </DescriptionsItem>
      <DescriptionsItem label="装修">
        毛坯装修
      </DescriptionsItem>
      <DescriptionsItem label="朝向">
        南北
      </DescriptionsItem>
      <DescriptionsItem label="建成年份">
        -
      </DescriptionsItem>
      <DescriptionsItem label="建筑形式">
        普通住宅
      </DescriptionsItem>
      <DescriptionsItem label="有利因素">
        -
      </DescriptionsItem>
      <DescriptionsItem label="不利因素">
        -
      </DescriptionsItem>
    </Descriptions>
  </Modal>
</template>

<script lang="ts">
import {
  Card, 
  Form, 
  FormItem, 
  Row, Col, 
  Input, InputGroup, 
  DatePicker, 
  Select, SelectOption,
  Button,
  FormInstance,
  Modal,
  Descriptions, DescriptionsItem,
  Statistic
} from 'ant-design-vue'
import dayjs, { Dayjs } from 'dayjs'
import { reactive, ref } from 'vue';

interface IForm {
  name: string,
  address: string,
  building: {
    build: string,
    unit: string,
    room: string,
  },
  floor: {
    currentFloor: string,
    totalFloor: string,
  },
  area: number,
  buildYear: string,
  buildType: string,
  decoration: string,
  orientation: string,
  favorable: string,
  unfavorable: string,
}

export default {
  name: 'AutoValuation',
  components: {
    Card,
    Form,
    FormItem,
    Input, InputGroup,
    DatePicker,
    Select, SelectOption,
    Row,
    Col,
    Button,
    Modal,
    Descriptions, DescriptionsItem,
    Statistic
  },
  data() {
    const form_ref = ref<FormInstance>();
    const form_state = reactive<IForm>({
      name: '',
      address: '',
      building: {
        build: '',
        unit: '',
        room: '',
      },
      floor: {
        currentFloor: '',
        totalFloor: '',
      },
      area: undefined,
      buildYear: '',
      buildType: '',
      decoration: '',
      orientation: '',
      favorable: '',
      unfavorable: '',
    })
    const valuation_modal_shown = ref(false)
    
    return {
      valuation_modal_shown,
      form_ref, 
      form_state,
    }
  },
  methods: {
    /**
     * 判断日期合法性（是否晚于今天）
     * @param date 
     */
    _buildYearIsVaild(date: Dayjs) {
      return date.isAfter(dayjs().endOf('year'))
    }
  },
  mounted() { },
}
</script>

<style lang="less" scoped>
.btn-box {
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>