---
title: vuepress安装注意事项
lang: zh-CN
---

### 安装

>[安装步骤][1]跟着官方的安装流程时，跳过第一步，不然GitHub Pages自动部署出错。doc文件夹以及package.json都应在repo跟目录。
>

### 部署

>使用GitHub Pages 加 GitBub Actions自动部署  

1. 创建 Github access token (opens new window);
2. 在你 github 仓库下，创建一个 secrets (opens new window)，填入刚创建的 token
3. 在项目根目录下的 .github/workflows 目录（没有的话，请手动创建一个）下创建一个 .yml 或者 .yaml 文件，命名自己命名。如:vuepress-deploy.yml;

::: tip
token获取：头像 - Settings - Developer settings - Personal access tokens  
选择classic 创建
:::

```yml
# name 命名随意
name: install build

on:
  # 每当 push 到 main 分支时触发部署
  push:
    branches: [main]
  # 手动触发部署
  workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: '14'

      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}

```



[1]: https://vuepress.vuejs.org/zh/guide/deploy.html


