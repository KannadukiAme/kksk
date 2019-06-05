module.exports = {
  title: 'kksk',
  description: 'some notes for web dev...',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous' }]
  ],
  base: '/kksk/',
  dest: './dist',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术笔记', link: '/notes/git' },
      { text: '个人偏好', link: '/perferences/vscode' },
      { text: 'Git', link: 'https://github.com/KannadukiAme/kksk.git' }
    ],
    sidebar: [
      {
        title: '技术笔记',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/notes/git',
          '/notes/vim',
          '/notes/docker',
          '/notes/ssh',
          '/notes/sora',
          '/notes/webpack',
          '/notes/manjaro'
        ]
      },
      {
        title: '个人偏好',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/perferences/vscode',
          '/perferences/code-style'
        ]
      }
    ],
    lastUpdated: '最近更新'
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  plugins: ['@vuepress/nprogress', '@vuepress/back-to-top']
}
