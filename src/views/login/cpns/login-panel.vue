<template>
  <div class="panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="icon">
            <el-icon>
              <UserFilled />
            </el-icon>
            <span class="text">账号登录</span>
          </span>
        </template>
        <PanelAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon">
            <el-icon>
              <Iphone />
            </el-icon>
            <span class="text">手机登录</span>
          </span>
        </template>
        <PanelPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox v-model="isKeep" label="记住密码" />
      <el-link type="primary">记住密码</el-link>
    </div>
    <div class="control-account">
      <el-radio-group v-model="role">
        <el-radio value="1" size="large">超级管理员</el-radio>
        <el-radio value="2" size="large">管理员</el-radio>
      </el-radio-group>
    </div>
    <el-button type="primary" class="login-btn" @click="loginAciton">立即登录</el-button>
  </div>
</template>

<script setup lang="ts" name="panel">
import { ref, watch } from 'vue'
import PanelPhone from './panel-phone.vue'
import PanelAccount from './panel-account.vue'
import { localCache } from '@/utils/cache'
import { ElMessage } from 'element-plus';

const currentTab = ref('account')
const isKeep = ref<boolean>(localCache.getCache('rem_pwd'));
const role = ref("1")

watch(isKeep, (newValue) => {
  localCache.setCache('rem_pwd', newValue)
})
// 固定写法构造器返回实例
const accountRef = ref<InstanceType<typeof PanelAccount>>()

function loginAciton() {
  if (currentTab.value === 'phone') return ElMessage.warning("暂未开放此登录方式~ ")
  accountRef.value?.loginAction(isKeep.value)
}
</script>

<style scoped lang="less">
.panel {
  width: 430px;
  background-color: #fff;
  padding: 20px 30px;
  margin-bottom: 150px;
  border-radius: 10px;
  box-shadow: 0 0 10px 1px #808080;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
