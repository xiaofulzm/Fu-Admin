<script setup lang="ts">
import { ref, reactive, nextTick, watch } from "vue";
import { useSettingsStore, useTabsStore } from "~/store";

import { useRouterPush } from "~/composables";
const { routerPush } = useRouterPush();

const settingsStore = useSettingsStore();
const tabsStore = useTabsStore();

const refTabBox = ref<HTMLInputElement | null>(null);
const refTab = ref<HTMLInputElement | null>(null);

// 跳转
function handlePath(tab: TabItem) {
  routerPush(tab.path);
}

// 固定tab
function isFixed(key): boolean {
  return !tabsStore.fixedTabs.includes(key);
}

// 关闭tab
function handleClose(i) {
  tabsStore.removeTab(i);
}

// 移动隐藏标签位置
const moveData = reactive({
  bw: 0,
  cw: 0,
});
const distance = ref(0);
const step = 100;

changeBox();
window.addEventListener("resize", function () {
  // 变化后需要做的事
  changeBox();
});

watch(
  () => tabsStore.tabs,
  () => {
    changeBox();
  },
  { deep: true },
);

async function changeBox() {
  await nextTick();
  moveData.bw = refTabBox.value.clientWidth;
  moveData.cw = refTab.value.clientWidth;
}

function handleMoveLeft() {
  if (distance.value === 0) return;
  if (step > distance.value) {
    distance.value = 0;
    refTab.value.style.transform = `translate(${distance.value}px)`;
  } else {
    distance.value = distance.value - step;
    refTab.value.style.transform = `translate(-${step}px)`;
  }
}

function handleMoveRight() {
  const gap = moveData.cw - moveData.bw;
  if (distance.value === gap) return;
  if (step > gap - distance.value) {
    distance.value = gap;
    refTab.value.style.transform = `translate(-${gap}px)`;
  } else {
    distance.value = distance.value + step;
    refTab.value.style.transform = `translate(-${distance.value}px)`;
  }
}
</script>
<template>
  <div
    class="flex theme-color w-full h-44px header-border transition-all-300"
    :class="settingsStore.collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    <div class="tab-wrap flex items-end w-full px-16px" ref="refTabBox">
      <ul class="tab-list flex-1" ref="refTab">
        <li
          class="tab-item inline-flex"
          :class="{ acTabItem: tabsStore.activeTab === tab.path }"
          @click="handlePath(tab)"
          v-for="(tab, i) of tabsStore.tabs"
          :key="tab.path"
        >
          <SvgIcon
            v-if="tab.icon"
            class="size-16px mr-8px translate-y-0.5"
            :name="tab.icon"
            :color="
              tabsStore.activeTab === tab.path
                ? 'var(--fu-primary-color)'
                : 'var(--fu-text-color)'
            "
          />
          <span class="tab-txt">{{ tab.label }}</span>
          <div
            class="close-icon translate-y-0.5"
            v-if="isFixed(tab.path)"
            @click.stop="handleClose(i)"
          >
            <SvgIcon
              class="size-12px"
              name="close"
              :color="
                tabsStore.activeTab === tab.path
                  ? 'var(--fu-primary-color)'
                  : 'var(--fu-text-color)'
              "
            />
          </div>
        </li>
      </ul>
      <span
        class="move move-l"
        @click="handleMoveLeft"
        v-if="moveData.cw > moveData.bw"
      >
        &lt;
      </span>
      <span
        class="move move-r"
        @click="handleMoveRight"
        v-if="moveData.cw > moveData.bw"
      >
        &gt;
      </span>
    </div>
    <div class="w-160px">fn</div>
  </div>
</template>
<style lang="scss" scoped>
.tab-wrap {
  position: relative;
  overflow: hidden;

  .tab-list {
    white-space: nowrap;
    width: fit-content;
    .tab-item {
      position: relative;
      margin-right: 6px;
      padding: 6px 8px;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid #ccc;
      &:hover {
        // background-color: var(--fu-primary-bg);
        background-color: rgba(80, 80, 80, 0.2);
      }
      .tab-icon {
        line-height: 18px;
        color: var(--fu-primary-color);
      }
      .close-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        &:hover {
          background-color: rgba(80, 80, 80, 0.5);
        }
      }
    }
    .acTabItem {
      color: var(--fu-primary-color);
      background-color: var(--fu-primary-bg);
      &:hover {
        color: var(--fu-primary-color);
        background-color: var(--fu-primary-bg);
      }
    }
  }

  &:hover {
    .move {
      display: block;
    }
  }
  .move {
    position: absolute;
    bottom: 0;
    width: 34px;
    display: none;
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    background-color: rgba(80, 80, 80, 0.9);
    color: var(--fu-text-color);
    cursor: pointer;
    user-select: none;
  }
  .move-l {
    left: 0;
  }
  .move-r {
    right: 0;
  }
}
</style>
