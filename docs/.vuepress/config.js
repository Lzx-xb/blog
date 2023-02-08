module.exports = {
    title: '梅花香自苦寒来',
    description: '少壮不知勤学苦 老来方悔读书迟',
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        logo: '/img/apple-touch-icon-precomposed-152.png',
        nav: [
            { text: '面试基础', link: '/interview/' },
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
            '/interview/': [
                '',     /* /foo/ */
                {
                    title: 'vue系列',
                    children: ['vue',"vue_router_params"]
                },
                {
                    title: 'ES6系列',
                    children: ['ES6', 'ES6_jiegou', 'ES6_symbol','ES6_map_set']
                },
                {
                    title: 'Html系列',
                    children: ["html_box"]
                }
                
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
                    children: ['','other_markdown']
                }
                
            ]

        },
    },
    

}
