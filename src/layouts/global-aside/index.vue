<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { h } from "vue";
import SvgIcon from "~/components/svgIcon/index.vue";
import Logo from "../components/logo.vue";

function renderIcon(name) {
  return () => h(SvgIcon, { name });
}

const menuOptions: MenuOption[] = [
  {
    label: "且听风吟",
    key: "hear-the-wind-sing",
    href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199",
    icon: renderIcon("home"),
  },
  {
    label: "1973年的弹珠玩具",
    key: "pinball-1973",
    children: [
      {
        label: "鼠",
        key: "rat",
      },
    ],
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
          },
          {
            label: "羊男",
            key: "sheep-man",
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",
        children: [
          {
            label: "威士忌",
            key: "whisky",
            href: "https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];
</script>
<template>
  <aside class="fu-menu w-220px bg-light-100 color">
    <Logo />
    <n-scrollbar class="flex-1-hidden">
      <n-menu :options="menuOptions" :root-indent="18" />
    </n-scrollbar>
  </aside>
</template>
<style scoped lang="scss">
.fu-menu {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 2px 0 8px #1d23290d;
}
</style>
