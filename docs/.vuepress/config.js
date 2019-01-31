module.exports = {
  title: 'kksk',
  description: 'some notes for web dev...',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
      { text: 'Git', link: 'https://github.com/KannadukiAme/kksk.git' }
    ],
    sidebar: [
      '/notes/',
      '/notes/git',
      '/notes/vim',
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  }
}