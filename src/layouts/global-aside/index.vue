<script setup lang="ts">
import { computed, watch, ref } from "vue";
import { useRoute } from "vue-router";

import Logo from "../components/logo.vue";
import { useSettingsStore, useRouterStore } from "~/store";

import { useRouterPush } from "~/composables";
const { routerPush } = useRouterPush();

const settingsStore = useSettingsStore();
// eslint-disable-next-line prefer-const
const routerStore = useRouterStore();
const route = useRoute();

const acMenu = ref(route.path);

const menuOptions = computed(() => routerStore.menu);

watch(
  () => route.path,
  (newPath) => {
    acMenu.value = newPath;
  },
);
// console.log(menuOptions,'menuOptions')

function handleUpdateValue(key, data) {
  const query = data.query ? JSON.parse(data.query) : {};
  routerPush(data.path, query, data.newOpen);
}
</script>
<template>
  <aside
    class="fu-menu theme-box theme-color aside-w transition-all-300"
    :class="settingsStore.collapsed ? 'aside-w-min' : 'aside-w'"
  >
    <Logo :collapsed="settingsStore.collapsed" />
    <n-scrollbar class="flex-1-hidden">
      <n-menu
        :value="acMenu"
        :options="menuOptions"
        :root-indent="18"
        :indent="18"
        :collapsed="settingsStore.collapsed"
        :collapsed-icon-size="20"
        :collapsed-width="64"
        @update:value="handleUpdateValue"
      />
    </n-scrollbar>
  </aside>
</template>
<style scoped lang="scss">
.fu-menu {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  // box-shadow: 2px 0 8px #1d23290d;
}
</style>
