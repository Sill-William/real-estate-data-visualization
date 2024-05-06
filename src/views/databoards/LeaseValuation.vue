<template>
  <div class="uk-container">
    <Card class="uk-margin-top">
      <template #title>
        <span>LEASE估值</span>
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
          <FormItem name="building" label="建筑面积">
            <Input placeholder="建筑面积" v-model:value="form_state.address" />
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="buildType" label="付款方式" :rules="[{ required: true, message: '此为必填项' }]">
            <Select placeholder="建筑形式" v-model:value="form_state.buildType">
              <SelectOption value="1">
                押一付一
              </SelectOption>
              <SelectOption value="2">
                押一付三
              </SelectOption>
              <SelectOption value="3">
                半年付
              </SelectOption>
              <SelectOption value="4">
                年付
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
                有装修
              </SelectOption>
            </Select>
          </FormItem>
          </Col>
          <Col :span="12">
          <FormItem name="decoration" label="楼层" :rules="[{ required: true, message: '此为必填项' }]">
            <Select placeholder="楼层" v-model:value="form_state.decoration">
              <SelectOption value="1">
                底层
              </SelectOption>
              <SelectOption value="1">
                中层
              </SelectOption>
              <SelectOption value="1">
                高层
              </SelectOption>
              <SelectOption value="1">
                顶层
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
          
        </Row>
        <Row :gutter="24">
          <Col :offset="8" :span="8" class="btn-box">
          <Button type="primary" @click="() => valuation_modal_shown = true">估值</Button>
          <Button @click="_resetForm">重置</Button>
          </Col>
        </Row>
      </Form>
    </Card>
  </div>

  <Modal v-model:open="valuation_modal_shown" :closable="false">
    <Descriptions title="评估结果" :column="2">
      <DescriptionsItem :span="2">
        <Statistic title="租金(元/月)" :value="1090" />
      </DescriptionsItem>
      <DescriptionsItem label="评估对象" :span="2">
        康健小区(康安路123号,建国街303-337号钢铁街2-166号前进路88副1号建国街303-337号康安路107-123号，前进路88副1号，钢铁街2-166号,康安路107-123号)
      </DescriptionsItem>
      <DescriptionsItem label="所在楼层">
        中层
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
    </Descriptions>
    <template #footer>
      <Button @click="valuation_modal_shown = false">关闭</Button>
    </template>
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
  Modal,
  Descriptions, DescriptionsItem,
  Statistic
} from 'ant-design-vue'
import type {
  FormInstance
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
  area: number | undefined,
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
    },
    _resetForm() {
      this.form_state = {
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
      }
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
