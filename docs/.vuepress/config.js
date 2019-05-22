module.exports = {
  // base: '/index/',
  base: './',
  dest: 'dist',
  title: 'E8前端文档',
  description: '如何快速找到对应项目的功能代码片段以及方法',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: 'C端后台系统',
        collapsable: false,
        children: [
          ['chapter1/', 'Introduction'],
          'chapter1/install',
          'chapter1/start',
          'chapter2/type',
          'chapter2/advance',
          'chapter3/require'
        ]
      },
      {
        title: '客户端后台系统',
        collapsable: false,
        children: [
          'chapter3/customerManage',
        ]
      },
      {
        title: '微信端项目',
        collapsable: false,
        children: [
          'chapter3/wechat',
          'chapter3/wechat2',
        ]
      },
      {
        'title': '官网项目',
        collapsable: false,
        children: [
          'chapter3/guanwang'
        ]
      },
      {
        'title': '小程序端项目',
        collapsable: false,
        children: [
          'chapter3/xiaochengxu'
        ]
      },
      {
        'title': '混合app项目',
        collapsable: false,
        children: [
          'chapter3/hybridapp'
        ]
      },
      {
        'title': 'SVN使用注意点',
        collapsable: false,
        children: [
          'chapter3/svnnotice'
        ]
      }
    ]
  }
}
