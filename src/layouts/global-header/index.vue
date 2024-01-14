<script setup lang="ts">
import { storeToRefs } from "pinia";
import { userSettingsStore } from "~/store";
const settingsStore = userSettingsStore();
const { collapsed } = storeToRefs(settingsStore);
</script>
<template>
  <header
    class="flex items-center w-full h-50px transition-all-300"
    :class="collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    <div
      @click="settingsStore.setCollapsed(!collapsed)"
      class="cursor-pointer"
      :class="collapsed ? 'fold' : 'spread'"
    >
      <SvgIcon name="fold" />
    </div>
    header
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
