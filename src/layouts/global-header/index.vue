<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSettingsStore } from "~/store";

import Theme from "./commonents/theme.vue";

const settingsStore = useSettingsStore();
const { collapsed } = storeToRefs(settingsStore);
</script>
<template>
  <header
    class="flex header-border items-center theme-color w-full h-50px transition-all-300"
    :class="collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    <div class="w-1/5">
      <SvgIcon
        @click="settingsStore.setCollapsed(!collapsed)"
        class="cursor-pointer size-8"
        :class="collapsed ? 'fold' : 'spread'"
        name="fold"
        color="var(--fu-text-color)"
      />
    </div>
    <div class="w-3/5">1</div>
    <div class="w-1/5">
      <Theme />
    </div>
  </header>
</template>
<style scoped lang="scss">
.fold {
  transform: rotate(180deg) scale(0.5);
  //  transition: transform .3s;
}
.spread {
  transform: rotate(0deg) scale(0.5);
  //  transition: transform .3s;
}
</style>
