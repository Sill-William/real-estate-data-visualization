<template>
  <context-holder />
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
            <Button type="link" @click="preview_modal_shown = true">预览</Button>
            <!-- <Button type="link" @click="preview_modal_shown = true">下载</Button> -->
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

  <Modal :open="preview_modal_shown" :closable="false">
    <Card class="preview-card">
      <template #title>
        <span>预览</span>
      </template>
      <embed src="https://arxiv.org/ftp/arxiv/papers/2404/2404.00813.pdf" />
    </Card>
    <template #footer>
      <Button @click="preview_modal_shown = false">关闭</Button>
    </template>
  </Modal>

</template>

<script lang="ts">
import {
  Card,
  List, ListItem, ListItemMeta,
  Button,
  Modal,
  message,
} from 'ant-design-vue'
import { ref } from 'vue'

import { BaseData } from '@/api/BaseData'
import type { Response } from '@/types/global'

type Reports = {
  title: string,
  created: Date,
  url: string,
}[]

const baseData = new BaseData()

const [messageApi, contextHolder] = message.useMessage()

export default {
  name: "AnalysisReports",
  components: {
    Card,
    List, ListItem, ListItemMeta,
    Button,
    Modal,
    contextHolder,
  },
  data() {
    const reports = ref<Reports>([])
    const preview_modal_shown = ref(false)

    return {
      reports,
      messageApi,
      preview_modal_shown,  
    }
  },
  methods: {
    _FetchReports() {
      baseData.fetchRecords('Report')
        .then((resp: Response) => {
          this.reports = resp.data.map(line => {
            return {
              // title: `${(new Date(line.date)).toLocaleDateString("yyyy年MM月")}分析报告`,
              title: `${new Date(line.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' })}分析报告`,
              // created: line.date,
              created: new Date(line.date),
              url: ''
            }
          })
        })
        .catch((err: Error) => {
          messageApi.error('后台请求数据错误')
          console.error(err)
        })
    }
  },
  mounted() {
    this._FetchReports()
  }
}
</script>

<style lang="less" scoped>
.preview-card {
  span {
    font-weight: bold;
  }

  embed {
    width: 100%;
    height: 500px;
  }
}
</style>