<script lang="ts" setup>
import { computed } from "vue";

defineOptions({ name: "SvgIcon" });

interface Props {
  prefix?: string;
  color?: string;
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  prefix: "icon",
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="props.color" />
  </svg>
</template>
