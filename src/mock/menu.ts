export default [
  {
    id: 1,
    type: 1,
    name: "系统总览",
    icon: "el-icon-monitor",
    url: "/main/analysis",
    sort: 1,
    children: [
      {
        id: 2,
        type: 2,
        name: "核心技术",
        url: "/main/analysis/overview",
        parentId: 1,
        children: null,
        sort: 1,
      },
      {
        id: 3,
        type: 2,
        name: "商品统计",
        url: "/main/analysis/dashboard",
        parentId: 1,
        children: null,
        sort: 2,
      },
    ],
  },
  {
    id: 4,
    type: 1,
    name: "系统管理",
    icon: "el-icon-setting",
    url: "/main/system",
    sort: 2,
    children: [
      {
        id: 5,
        type: 2,
        name: "用户管理",
        url: "/main/system/user",
        parentId: 4,
        children: null,
        sort: 1,
      },
      {
        id: 6,
        type: 2,
        name: "部门管理",
        url: "/main/system/department",
        parentId: 4,
        children: null,
        sort: 2,
      },
      {
        id: 7,
        type: 2,
        name: "菜单管理",
        url: "/main/system/menu",
        parentId: 4,
        children: null,
        sort: 3,
      },
      {
        id: 8,
        type: 2,
        name: "角色管理",
        url: "/main/system/role",
        parentId: 4,
        children: null,
        sort: 4,
      },
    ],
  },
  {
    id: 9,
    type: 1,
    name: "商品中心",
    icon: "el-icon-handbag",
    url: "/main/product",
    sort: 3,
    children: [
      {
        id: 10,
        type: 2,
        name: "商品类别",
        url: "/main/product/category",
        parentId: 9,
        children: null,
        sort: 1,
      },
      {
        id: 11,
        type: 2,
        name: "商品信息",
        url: "/main/product/goods",
        parentId: 9,
        children: null,
        sort: 2,
      },
    ],
  },
  {
    id: 12,
    type: 1,
    name: "随便聊聊",
    icon: "el-icon-chatLineRound",
    url: "/main/story",
    sort: 4,
    children: [
      {
        id: 13,
        type: 2,
        name: "故事列表",
        url: "/main/story/list",
        parentId: 12,
        children: null,
        sort: 1,
      },
      {
        id: 14,
        type: 2,
        name: "你的故事",
        url: "/main/story/chat",
        parentId: 12,
        children: null,
        sort: 2,
      },
    ],
  },
];
