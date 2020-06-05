/**
 * Created by Ljili on 2020/6/5.
 */
const menuList = [
  {
    name: "首页",
    path: "/"
  },
  {
    name: "列表",
    path: "/list"
  },
  {
    name: "关于我们",
    path: "/about",
    children: [
      {
        name: "关于我们",
        path: "/about"
      },
      {
        name: "富文本",
        path: "/editor"
      },
    ]
  }
];
export default menuList;
