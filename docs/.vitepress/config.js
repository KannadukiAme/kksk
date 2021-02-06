module.exports = {
  title: '雨ノ圓',
  description: 'The notebook of KannadukiAme',
  base: '/',
  dest: './dist',
  themeConfig: {
    repo: 'https://github.com/KannadukiAme/kannadukiame-notebook.git',
    repoLabel: 'GitHub',
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/linux/arch' }
    ],
    sidebar: [
      {
        text: '系统相关',
        collapsable: false,
        children: [
          {
            text:'Arch',link:'/notes/linux/arch'
          },
          {
            text:'Manjaro-Architect',link:'/notes/linux/manjaro-architect'
          },
          {
            text:'Manjaro-i3',link:'/notes/linux/manjaro-i3'
          },
          {
            text:'OpenWrt',link:'/notes/linux/openwrt'
          },
          {
            text:'Ubuntu',link:'/notes/linux/ubuntu'
          },
          {
            text:'Windows',link:'/notes/win/win'
          }
        ]
      },
      {
        text: '虚拟化技术',
        collapsable: false,
        children: [
          {
            text:'Docker',link:'/notes/virtualization/docker'
          },
          {
            text:'Proxmox VE',link:'/notes/virtualization/pve'
          },
        ]
      },
      {
        text: '系统工具',
        collapsable: false,
        children: [
          {
            text:'SSH',link:'/notes/system-tools/ssh'
          }
        ]
      },
      {
        text: '编辑器',
        collapsable: false,
        children: [
          {
            text:'Vim',link:'/notes/editor/vim'
          },
          {
            text:'VSCode',link:'/notes/editor/vscode'
          }
        ]
      },
      {
        text: 'Web开发',
        collapsable: false,
        children: [
          {
            text:'代码风格',link:'/notes/web-development/code-style'
          },
          {
            text:'Git',link:'/notes/web-development/git'
          },
          {
            text:'Webpack',link:'/notes/web-development/webpack'
          }
        ]
      },
      {
        text: 'Web服务',
        collapsable: false,
        children: [
          {
            text:'私人网盘 Nextcloud',link:'/notes/web-server/nextcloud'
          },
          {
            text:'媒体服务 Jellyfin',link:'/notes/web-server/jellyfin'
          }
        ]
      }
    ],
    lastUpdated: '最近更新'
  }
}
