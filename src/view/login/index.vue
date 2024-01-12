<!-- <script setup lang="ts">

</script>

<template>
    <div>
         login
    </div>

</template> -->
<script setup lang="ts">
import { darkTheme, useThemeVars } from "naive-ui";
import type { GlobalTheme } from "naive-ui";
import dayjs from "dayjs";
import { ref } from "vue";
import { userStore } from "../../store/modules/user";
console.log(useThemeVars());

const userState = userStore();
console.log(userState.count);

const theme = ref<GlobalTheme | null>(darkTheme);

console.log(darkTheme);
</script>

<template>
  <n-config-provider :theme="theme">
    <n-card>
      <h1>Fu</h1>
      <img src="../assets/img/logo.png" />
      <n-button>下否</n-button>
      {{ dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss") }}
      <n-button @click="theme = darkTheme">深色</n-button>
      <n-button @click="theme = null">浅色</n-button>
      {{ userState.count }}
    </n-card>
  </n-config-provider>
</template>
