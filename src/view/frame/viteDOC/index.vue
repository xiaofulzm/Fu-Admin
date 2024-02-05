<template>
  <div class="w-full h-full">
    <iframe class="w-full h-full" :src="src" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({ name: "ViteDOC" });

const src = ref("https://cn.vitejs.dev/");
</script>

<style scoped></style>
