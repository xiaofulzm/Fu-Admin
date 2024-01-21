import { h } from "vue";
import SvgIcon from "~/components/svgIcon/index.vue";

//  路由参数转为菜单数据
export function transformRouteToMenu(menu: MenuItem[]): TransformMenuOption[] {
  // console.log(menu,'----------')
  // const data = toRaw(menu);
  return recurrenceMenu(menu);
}

function recurrenceMenu(data) {
  if (data.length === 0) return [];
  return data.map((item) => {
    if (item.icon) {
      item.icon = renderIcon(item.icon);
    }

    if (item?.children) {
      if (item?.children.length > 0) {
        item.children = recurrenceMenu(item.children);
      } else {
        delete item["children"];
      }
    }
    return item;
  });
}

function renderIcon(icon) {
  return () => h(SvgIcon, { name: icon });
}
