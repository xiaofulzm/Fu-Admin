<script setup lang="ts">
import { useSettingsStore } from "~/store";
const settingsStore = useSettingsStore();
</script>
<template>
  <main
    class="flex-center theme-bg flex-1 w-full main-h transition-all-300"
    :class="settingsStore.collapsed ? 'p-aside-w-min' : 'p-aside-w'"
  >
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>
