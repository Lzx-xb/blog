module.exports = {
    title: '小学生BLOG',
    description: 'Just playing around',
    base: '/blog/',
    header: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
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
            '/': [
                {
                    title: '分组1',
                    children: ['','test']
                },
                {
                    title: '分组2',
                    children: ['test2']
                }
                
            ]

        },
    },
    

}