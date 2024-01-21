<script setup lang="ts">
import { useSettingsStore } from "~/store";
const settingsStore = useSettingsStore();
</script>
<template>
  <div
    class="flex-center w-full h-44px transition-all-300"
    :class="settingsStore.collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    tab
  </div>
</template>
