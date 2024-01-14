<script setup lang="ts">
import { userSettingsStore } from "~/store";
const settingsStore = userSettingsStore();
</script>
<template>
  <main
    class="flex-center w-full transition-all-300"
    :class="settingsStore.collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    main
  </main>
</template>
