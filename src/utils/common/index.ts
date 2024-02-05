/***
 * 判断是否为http/https链接
 * @param path - 链接
 */
export function isHttp(path: string): boolean {
  const r = new RegExp("http");
  return r.test(path);
}
