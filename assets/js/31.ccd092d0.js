(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{315:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装步骤"),s("OutboundLink")],1),t._v("跟着官方的安装流程时，跳过第一步，不然GitHub Pages自动部署出错。doc文件夹以及package.json都应在repo跟目录。")])]),t._v(" "),s("h3",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[t._v("#")]),t._v(" 部署")]),t._v(" "),s("blockquote",[s("p",[t._v("使用GitHub Pages 加 GitBub Actions自动部署")])]),t._v(" "),s("ol",[s("li",[t._v("创建 Github access token (opens new window);")]),t._v(" "),s("li",[t._v("在你 github 仓库下，创建一个 secrets (opens new window)，填入刚创建的 token")]),t._v(" "),s("li",[t._v("在项目根目录下的 .github/workflows 目录（没有的话，请手动创建一个）下创建一个 .yml 或者 .yaml 文件，命名自己命名。如:vuepress-deploy.yml;")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("token获取：头像 - Settings - Developer settings - Personal access tokens"),s("br"),t._v("\n选择classic 创建")])]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# name 命名随意")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install build\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每当 push 到 main 分支时触发部署")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 手动触发部署")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("workflow_dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("docs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetch-depth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup Node.js\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("node@v1\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择要使用的 node 版本")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'14'")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 缓存 node_modules")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cache dependencies\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/cache@v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            **/node_modules")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" runner.os "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("yarn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hashFiles('"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("**/yarn.lock')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restore-keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n            ${{ runner.os }}-yarn-")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果缓存没有命中，安装依赖")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Install dependencies\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" steps.yarn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cache.outputs.cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("hit "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!=")]),t._v(" 'true'\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frozen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("lockfile\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行构建脚本")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build VuePress site\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" yarn docs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build\n\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 workflow 的文档来获取更多信息")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @see https://github.com/crazy-max/ghaction-github-pages")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy to GitHub Pages\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" crazy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("max/ghaction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages@v2\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署到 gh-pages 分支")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pages\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署目录为 VuePress 的默认输出目录")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("GITHUB_TOKEN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.ACCESS_TOKEN "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);