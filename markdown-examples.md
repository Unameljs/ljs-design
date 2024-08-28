---
outline: deep
# 修改页脚的内容 必须在顶部书写
prev:
 text: '内容页脚上一页'
 link: /
next:
 text: '内容页脚下一页'
 link: /api-examples
---

# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

### Input
<!-- {4} 标记第四行高亮 -->
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

## 贡献者
<!-- vitepress支持vue -->
<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
  const members = [
    {
      name:"ljs",
      title:"VitePress",
      avatar: 'https://vitepress.dev/vitepress-logo-large.webp',
    },
    {
      name:"ljs2",
      title:"Vite",
      avatar: 'https://vitejs.dev/logo.svg',
    }
  ]
</script>

<VPTeamMembers size="small" :members="members" />