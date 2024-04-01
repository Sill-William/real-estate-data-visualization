<template>
  <div class="uk-container">
    <Card class="uk-margin-top">
      <template #title>
        <span>分析报告</span>
      </template>
      <List>
        <!-- <ListItem>
        <template #actions>
          <Button type="link">预览</Button>
          <Button type="link">下载</Button>
        </template>
        <ListItemMeta description="发布时间：2024-04-01">
          <template #title>
            <span class="uk-text-bold uk-text-midumn">2024年3月分析报告</span>
          </template>
        </ListItemMeta>
      </ListItem> -->
        <ListItem v-for="report in reports" :key="report.title">
          <template #actions>
            <Button type="link">预览</Button>
            <Button type="link">下载</Button>
          </template>
          <ListItemMeta :description="`发布时间：` + report.created.toLocaleDateString()">
            <template #title>
              <span class="uk-text-bold uk-text-midumn">{{ report.title }}</span>
            </template>
          </ListItemMeta>
        </ListItem>
      </List>
    </Card>
  </div>

</template>

<script lang="ts">
import {
  Card,
  List, ListItem, ListItemMeta,
  Button
} from 'ant-design-vue';
import { ref } from 'vue';

import { BaseData } from '@/api/BaseData';

// export function AutoLoad(value: any, context: ClassDecoratorContext) {
//   // const { name } = context
//   // console.log(context)
//   value.prototype.name = "hello"
//   value.prototype.greet = function () {
//       console.log("你好");
//     };
//   return value
// }

// @AutoLoad
// class BaseData {
//   nnno: string = 'reports'
// }

type Reports = {
  title: string,
  created: Date,
  url: string,
}[]

// const baseData = new BaseData()

export default {
  name: "AnalysisReports",
  components: {
    Card,
    List, ListItem, ListItemMeta,
    Button
  },
  data() {
    const reports = ref<Reports>([])
    return {
      reports,
    }
  },
  methods: {

  },
  mounted() {
    // console.log(import.meta.env['VITE_BASEDATA_REPORT_ROUTE'])
    const baseData = new BaseData()
    // console.log(baseData.to)
    baseData.fetchRecords('Report')
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style></style>