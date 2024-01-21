<script setup lang="ts">
import { useSettingsStore } from "~/store";
const settingsStore = useSettingsStore();
</script>
<template>
  <main
    class="flex-center w-full transition-all-300"
    :class="settingsStore.collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    main
  </main>
</template>
