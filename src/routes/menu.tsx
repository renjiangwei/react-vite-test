import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>['items'][number] & {
  meta?: {
    to: string, // 路由跳转
  }
};
export const items: MenuItem[] = [
  {
    label: '实时',
    key: '',
    icon: <>asdf</>,
    children: [
      {
        label: '视频',
        key: '/home',
        icon: null,
        meta: {
          to: '/home'
        },
      },
      {
        label: '图片',
        key: '/login',
        icon: null,
        meta: {
          to: '/login'
        },
      },
      {
        label: '文字',
        key: '/abc',
        icon: null,
        meta: {
          to: '/abc'
        },
      },
      {
        label: 'ae',
        key: 'e',
        icon: null,
        meta: {
          to: '/eee'
        },
      },
    ] as MenuItem[],
  },
  {
    label: '实时',
    key: '/go',
    icon: <>asdf</>,
    children: [
      {
        label: '视频',
        key: '/ddd',
        icon: null,
        meta: {
          to: '/ddd'
        },
      },
      {
        label: '图片',
        key: '/eee',
        icon: null,
        meta: {
          to: '/eee'
        },
      },
      {
        label: '文字',
        key: '/fff',
        icon: null,
        meta: {
          to: '/ff'
        },
      },
      {
        label: 'ae',
        key: '/ggg',
        icon: null,
        meta: {
          to: '/ggg'
        },
      },
    ] as MenuItem[],
  },
]


export const getParentByKey = (key: string) => {
  let res: string[] = []
  const func = (list: any[]) => {
    list.forEach(item => {
      if (item.children && item.children.find((i: MenuItem) => i.key == key)) {
        res = [item.key]
      }
    })
  }
  func(items)
  return res
}