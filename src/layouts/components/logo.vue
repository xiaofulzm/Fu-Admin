<script lang="ts" setup>
interface Props {
  collapsed: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
});
</script>

<template>
  <div
    class="pl-18px flex items-center h-50px theme-text"
    :class="props.collapsed ? 'aside-w-min' : 'aside-w'"
  >
    <SvgIcon name="fu" />
    <h1 v-if="!props.collapsed" class="pl-12px text-16px font-semibold">
      Fu-Admin
    </h1>
  </div>
</template>
