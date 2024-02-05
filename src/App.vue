<script setup lang="ts">
import { computed } from "vue";
import { darkTheme } from "naive-ui";
import { useThemeStore } from "~/store";

const themeStore = useThemeStore();

console.log(darkTheme, "darkTheme");

const themeMode = computed(() => {
  return themeStore.theme === "light" ? undefined : darkTheme;
});
</script>

<template>
  <n-config-provider :theme="themeMode">
    <router-view />
  </n-config-provider>
</template>
