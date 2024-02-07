<script setup lang="ts">
import { useThemeStore } from "~/store";

defineOptions({ name: "Theme" });

const themeStore = useThemeStore();

console.log(themeStore);
function handleTheme(m) {
  document.documentElement.className = m;
  themeStore.setTheme(m);
}
</script>
<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <div class="flex-center w-36px h-full cursor-pointer">
        <SvgIcon
          class="size-8"
          @click="handleTheme('dark')"
          v-if="themeStore.theme === 'light'"
          name="light"
        />
        <SvgIcon
          class="size-6"
          @click="handleTheme('light')"
          v-else
          name="dark"
          color="var(--fu-text-color)"
        />
      </div>
    </template>
    主题切换
  </n-tooltip>
</template>
