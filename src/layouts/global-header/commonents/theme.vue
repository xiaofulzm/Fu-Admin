<script setup lang="ts">
import { useThemeStore } from "~/store";

defineOptions({ name: "Theme" });

const themeStore = useThemeStore();

console.log(themeStore);
function handleTheme(m) {
  console.log(m, "themeMode");
  document.documentElement.className = m;
  themeStore.setTheme(m);
}
</script>
<template>
  <div>
    <SvgIcon
      class="size-8"
      @click="handleTheme('dark')"
      v-if="themeStore.theme === 'light'"
      name="light"
    />
    <SvgIcon
      class="size-8"
      @click="handleTheme('light')"
      v-else
      name="dark"
      color="black"
    />
  </div>
</template>
