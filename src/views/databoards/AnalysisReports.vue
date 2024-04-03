<template>
  <context-holder />
  <div class="uk-container">
    <Card class="uk-margin-top uk-margin-bottom">
      <template #title>
        <span>分析报告</span>
      </template>
      <!-- <List>
        <ListItem v-for="report in reports" :key="report.title">
          <template #actions>
            <Button type="link" @click="preview_modal_shown = true">预览</Button>
          </template>
          <ListItemMeta :description="`发布时间：` + report.created.toLocaleDateString()">
            <template #title>
              <span class="uk-text-bold uk-text-midumn">{{ report.title }}</span>
            </template>
          </ListItemMeta>
        </ListItem>
      </List> -->
      <Tree 
        :show-linep="true" :tree-data="reportTree" @select="preview_modal_shown = true" 
        :show-icon="true"
      >
      <!-- <template #icon><CarryOutOutlined/></template> -->
      <!-- <template #switcherIcon>
        <SmileTwoTone />
      </template> -->
      </Tree>
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
  Tree, TreeNode, type TreeProps
} from 'ant-design-vue'
import { CarryOutOutlined, SmileTwoTone } from '@ant-design/icons-vue';
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
    Tree, TreeNode,
    CarryOutOutlined, SmileTwoTone,
    contextHolder,
  },
  data() {
    const reports = ref<Reports>([])
    const reportTree = ref<TreeProps['treeData']>([])
    const preview_modal_shown = ref(false)

    return {
      reports,
      reportTree,
      messageApi,
      preview_modal_shown,
    }
  },
  methods: {
    _FetchReports() {
      baseData.fetchRecords('Report')
        .then((resp: Response) => {
          // this.reports = resp.data.map(line => {
          //   return {
          //     // title: `${(new Date(line.date)).toLocaleDateString("yyyy年MM月")}分析报告`,
          //     title: `${new Date(line.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' })}分析报告`,
          //     // created: line.date,
          //     created: new Date(line.date),
          //     url: ''
          //   }
          // })
          this.reportTree = resp.data.map(line => {
            console.log(line)
            return {
              title: line.type,
              key: line.type,
              selectable: false,
              children: Object.keys(line.year).map(year => {
                return {
                  title: year,
                  key: year,
                  selectable: false,
                  children: line.year[year].map((report: any) => {
                    return {
                      title: `${year}年${report.month}月${line.type}分析报告`,
                      key: `${year}-${report.month}`,
                      // select: () => this.preview_modal_shown = true
                    }
                  })
                }
              })
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