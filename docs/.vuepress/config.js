module.exports = {
  title: 'kksk',
  description: 'some notes for web dev...',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' }],
    ['link', { rel: 'icon', href: '/madoka-avatar.png' }]
  ],
  base: '/',
  dest: './dist',
  themeConfig: {
    repo: 'https://github.com/KannadukiAme/kksk.git',
    repoLabel: 'GitHub',
    nav: [
      { text: '首页', link: '/' },
      { text: '技术笔记', link: '/notes/linux/arch' }
    ],
    sidebar: [
      {
        title: 'Linux',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/notes/linux/arch',
          '/notes/linux/manjaro-i3',
          '/notes/linux/openwrt',
          '/notes/linux/ubuntu'
        ]
      },
      {
        title: '虚拟化技术',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/notes/virtualization/docker',
          '/notes/virtualization/pve',
        ]
      },
      {
        title: '系统工具',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/notes/system-tools/ssh',
        ]
      },
      {
        title: '编辑器',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/notes/editor/vim',
          '/notes/editor/vscode',
        ]
      },
      {
        title: 'Web开发',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/notes/web-development/git',
          '/notes/web-development/webpack',
        ]
      },
      {
        title: 'Web服务',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/notes/web-server/nextcloud',
          '/notes/web-server/jellyfin',
        ]
      },
    ],
    lastUpdated: '最近更新'
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: ['@vuepress/nprogress', '@vuepress/back-to-top'],
  evergreen: true
}
