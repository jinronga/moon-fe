import {
  Bell,
  BookText,
  DatabaseZap,
  FolderArchive,
  Monitor,
  Newspaper,
  Settings,
  UserRoundCog,
} from 'lucide-react'

export interface MenuItem {
  label: string
  key: string
  icon?: React.ReactNode
  children?: MenuItem[]
}

export const menus: MenuItem[] = [
  {
    label: '实时监控',
    key: '/monitor',
    icon: <Monitor />,
    children: [
      {
        label: '数据大盘',
        key: '/monitor/dashboard',
      },
      {
        label: '实时告警',
        key: '/monitor/alarm',
      },
    ],
  },
  {
    label: '数据源',
    key: '/datasource',
    icon: <DatabaseZap />,
    children: [
      {
        label: 'Metric',
        key: '/datasource/metric',
      },
      {
        label: 'Log',
        key: '/datasource/log',
      },
      {
        label: 'Trace',
        key: '/datasource/trace',
      },
    ],
  },
  {
    label: '策略管理',
    key: '/strategy',
    icon: <BookText />,
    children: [
      {
        label: '策略组',
        key: '/strategy/group',
      },
      {
        label: '策略列表',
        key: '/strategy/list',
      },
    ],
  },
  {
    label: '告警通知',
    key: '/notify',
    icon: <Bell />,
    children: [
      {
        label: '告警组',
        key: '/notify/group',
      },
      {
        label: 'Hook',
        key: '/notify/hook',
      },
      {
        label: '通知规则',
        key: '/notify/rule',
      },
      {
        label: '告警记录',
        key: '/notify/record',
      },
    ],
  },
  {
    label: '告警归档',
    key: '/archive',
    icon: <FolderArchive />,
    children: [
      {
        label: '历史告警',
        key: '/archive/history',
      },
      {
        label: '告警统计',
        key: '/archive/statistics',
      },
      {
        label: '历史通知',
        key: '/archive/notice',
      },
    ],
  },
  {
    label: '个人中心',
    key: '/self',
    icon: <UserRoundCog />,
    children: [
      {
        label: '团队管理',
        key: '/self/space-manage',
      },
      {
        label: '个人设置',
        key: '/self/manage',
      },
    ],
  },
  {
    label: '系统管理',
    key: '/system',
    icon: <Settings />,
    children: [
      {
        label: '系统用户',
        key: '/system/users',
      },
      {
        label: '系统字典',
        key: '/system/dict',
      },
      {
        label: '系统菜单',
        key: '/system/menu',
      },
    ],
  },
  {
    label: 'Moon社区',
    key: '/community',
    icon: <Newspaper />,
    children: [
      {
        label: '策略仓库',
        key: '/community/strategy-template',
      },
      {
        label: '讨论',
        key: '/community/discussion',
      },
    ],
  },
]