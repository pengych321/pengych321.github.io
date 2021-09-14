module.exports = {
    title: '二黄的三亩一分地',  //标题
    repo: 'https://github.com/pengych321/pengych321.github.io.git',  //仓库地址
    base: '/',  // 配合部署项目
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  //主题配置
        logo: '/img/logo.png',
        nav: [  //导航栏
            { text: '首页', link: '/' },
            { text: '随笔', link: '/js_docs/' },
            { text: '代码', link: '/css_docs/' },
            { text: '投资', link: '/vue_docs/' },
			{ text: '音乐', link: '/vue_docs/' },
            {
                text: '2021',
                ariLabel: '2021',
                items: [  //多级导航栏
                    { text: 'May', link: '/2021/9/' },
                    { text: 'June', link: '/2021/8/' }
                ]
            },
            { text: 'github', link: 'https://github.com/pengych321' }
        ],
        sidebar: {  //侧边拦
            '/2021/': [
                ['/2021/9/', '9月份'],
                ['/2021/8/', '8月份']
            ]
        }
    }
}
