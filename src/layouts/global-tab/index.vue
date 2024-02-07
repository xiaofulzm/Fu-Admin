<script setup lang="ts">
import { useSettingsStore, useTabsStore } from "~/store";

const settingsStore = useSettingsStore();
const tabsStore = useTabsStore();

console.log(tabsStore);

function handleClose(tab: tabItem) {
  console.log(tab, "close");
}
</script>
<template>
  <div
    class="flex theme-color w-full h-44px transition-all-300"
    :class="settingsStore.collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    <ul class="flex items-end w-full px-16px bg-light-600">
      <li class="tab-item" v-for="tab of tabsStore.tabs" :key="tab.path">
        <SvgIcon
          class="size-16px mr-8px"
          :name="tab.icon"
          color="var(--fu-text-color)"
        />
        <span>{{ tab.label }}</span>
        <div class="close-icon" @click="handleClose(tab)">
          <SvgIcon
            class="size-12px"
            name="close"
            color="var(--fu-text-color)"
          />
        </div>
      </li>
    </ul>
    <div class="w-160px">fn</div>
  </div>
</template>
<style lang="scss" scoped>
.tab-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(80, 80, 80, 0.5);
    border-radius: 4px;
  }
  &::before {
    position: absolute;
    top: 8px;
    right: 0;
    content: "";
    height: 18px;
    width: 2px;
    background-color: red;
  }
  &:nth-last-child(1)::before {
    display: none;
  }
  .close-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    padding: 2px;
    border-radius: 50%;
    &:hover {
      background-color: pink;
    }
  }
}
</style>
