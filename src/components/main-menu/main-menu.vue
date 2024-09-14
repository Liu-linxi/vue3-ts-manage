<script setup>
import useLoginStore from "@/store/login/login";
import { useRoute, useRouter } from "vue-router";
import { mapPathToMenu } from '@/utils/map-menu'
import { ref } from "vue";
// 0.定义数据
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

// 1.获取菜单数据
const loginStore = useLoginStore();
const userMenus = loginStore.userMenus;
// const menuActive = loginStore.menuActive;
// 解构用法
// const { userMenus, menuActive } = useLoginStore();

const route = useRoute()
const currentMenu = mapPathToMenu(userMenus, route.path)
const defaultValue = ref(currentMenu.id + '')


const router = useRouter()
function handleItemClick(item) {
  router.push(item.url)
}
</script>

<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-show="!isFold">管理系统</span>
    </div>
    <div class="menu">
      <el-menu :default-active="defaultValue" :collapse="isFold" class="el-menu-vertical-demo" text-color="#b7bdc3"
        active-text-color="#fff" background-color="#001529">
        <template v-for="li in userMenus" :key="li.id">
          <el-sub-menu :index="li.id + ''">
            <template #title>
              <el-icon>
                <component :is="li.icon.split('el-icon-')[1]"></component>
              </el-icon>
              <span>{{ li.name }}</span>
            </template>
            <template v-for="item in li.children" :key="item.id">
              <el-menu-item :index="item.id + ''" @click="handleItemClick(item)">{{ item.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 3rem;
    padding: 0.75rem 0.625rem 0.5rem 0.625rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 0.625rem;
    }

    .title {
      font-size: 1rem;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
