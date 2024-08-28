# vitepress
前身vuepress
静态网站生成器 Static Site Generator(SSG)

# 命令

## 安装
```sh
pnpm i vitepress -D
```

## 初始化
就是执行node_modules/bin/vitepress.cmd文件
```sh
npx vitepress init
```

## SEO(搜索引擎优化)
回答TDK(title description keywords)
爬虫机器人会抓取网站的这三个值

vitepress配置
```md
head:
  - - meta
    - name: title
        content:ljs-vitepress
  - - meta
    - name: description
        content:ljs-vitepress-one-demo
  - - meta
    - name: keywords
        content:ljs-vitepress
```

提高SEO其他注意项
- h1标签只能有一个
- main标签只能有一个
- img的alt、title必须有值
- a标签的href

## 部署静态网站到git
1. 打开仓库的settings
2. 点击Pages
3. 选择分支
4. 选择docs
5. 点击save
6. 访问 [github的名称.github.io/仓库名称](https://Unameljs.github.io/ljs-design)

## 部署静态网站到gitee
1. 打开仓库的settings
2. 点击Pages
3. 选择分支
4. 选择docs
5. 点击save
6. 访问 [gitee的名称.gitee.io/仓库名称](https://ljs666.gitee.io/ljs-vitepress
  
)