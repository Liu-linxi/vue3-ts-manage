<template>
  <div class="department">
    <page-search :search-config="searchConfig" @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <page-content :content-config="contentConfig" ref="contentRef" @new-data-click="handleNewDataClick"
      @edit-data-click="handleEditDataClick" />
    <page-modal :modal-config="modalConfigRef" ref="modalRef" />
  </div>
</template>

<script setup lang="ts" name="department">
import { ref, computed } from 'vue'
import PageSearch from '@/components/page-search/page-search.vue'
import PageContent from '@/components/page-content/page-content.vue'
import PageModal from '@/components/page-modal/page-modal.vue'


import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import usePageModal from '@/hooks/usePageModal'
import usePageContent from '@/hooks/usePageContent'



const entireDepartments = [{
  id: 1,
  name: '人事部',
}, {
  id: 2,
  name: '财务部',
}, {
  id: 3,
  name: '研发部',
}]
const modalConfigRef = computed(() => {
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options = entireDepartments as any
    }
  })
  console.log("🚀 ~ modalConfigRef ~ modalConfig:", modalConfig.formItems[2].options)
  return modalConfig
})

// content的逻辑处理
const { contentRef, handleQueryClick, handleResetClick } = usePageContent()

// modal的逻辑处理
const { modalRef, handleNewDataClick, handleEditDataClick } = usePageModal()
</script>

<style lang="less" scoped></style>
