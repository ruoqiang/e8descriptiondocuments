module.exports = {
  base: '/index/',
  dest: 'dist',
  title: 'E8后台系统前端文档',
  description: '如何快速找到对应的功能代码片段以及方法',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
      {
        title: 'UI常用片段',
        collapsable: false,
        children: [
          // ['chapter1/', 'Introduction'],
          'chapter1/install',
          'chapter1/start'
        ]
      },
      {
        title: 'javaScript 常用方法',
        collapsable: false,
        children: [
          'chapter2/type',
          'chapter2/declare',
          'chapter2/interface',
          'chapter2/class',
          'chapter2/function',
          'chapter2/generic',
          'chapter2/inference',
          'chapter2/advance'
        ]
      },
      {
        'title': '后台系统界面模板',
        collapsable: false,
        children: [
          'chapter3/require'
        ]
      }
    ]
  }
}
