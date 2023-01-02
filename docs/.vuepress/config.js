module.exports = {
    title: '梅花香自苦寒来',
    description: '少壮不知勤学苦 老来方悔读书迟',
    base: '/blog/',
    header: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        logo: '/img/apple-touch-icon-precomposed-152.png',
        nav: [
            { text: 'Foo', link: '/foo/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
            { text: 'Guide', link: '/guide/', target:'_blank' }
        ],
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'hello',  /* /foo/one.html */
            ],
            '/pages/': [
                {
                    title: '安装',
                    children: ['vuepress','node','issume_wow']
                },
                {
                    title: 'JavaScript',
                    children: ['jsclass','js_map','js_set']
                },
                {
                    title: 'CSS',
                    children: ['cssclamp','flexbewteen']
                },
                {
                    title: '实用工具',
                    children: ['watermark']
                },
                {
                    title: '其他',
                    children: ['']
                }
                
            ]

        },
    },
    

}
