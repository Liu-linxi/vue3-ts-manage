<template>
  <div class="header-info">
    <div class="operation">
      <span>
        <el-icon>
          <bell />
        </el-icon>
      </span>
      <span>
        <el-icon>
          <ChatDotRound />
        </el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon>
          <Postcard />
        </el-icon>
      </span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <el-avatar :size="30" class="avatar"
            src="https://p6-passport.byteacctimg.com/img/user-avatar/25b34042bc6fee16a1c61640a3980913~90x90.awebp" />
          <span class="name">林夕</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon>
                <CircleCloseFilled />
              </el-icon>
              退出系统
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon>
                <InfoFilled />
              </el-icon>
              个人信息
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <Unlock />
              </el-icon>
              修改密码
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts" name="header-info">
import { useRouter } from 'vue-router'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants';

const router = useRouter()
function handleExitClick() {
  localCache.deleteCache(LOGIN_TOKEN)
  localCache.deleteCache("userMenus")
  localCache.deleteCache('menuActive')
  localCache.deleteCache('permissions')
  localCache.deleteCache('role')
  router.push('/login')
}
</script>

<style scoped lang="less">
.header-info {
  display: flex;
  align-items: center;
}

.operation {
  display: inline-flex;
  margin-right: 20px;

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;

    &:hover {
      background: #f2f2f2;
    }

    i {
      font-size: 20px;
    }

    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;

  .name {
    margin-left: 8px;
  }
}

.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
