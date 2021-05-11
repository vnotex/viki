# Viki
一个简单的使用Markdown语法的维基页面，能展示[VNote](https://vnotex.github.io/vnote)中的笔记本。

::: alert-info
当前浏览页面由Viki生成并免费托管在[GitHub Pages](https://github.com/vnotex/viki/tree/gh-pages)上。

Viki是自由开源的。Viki的源码托管在[GitHub Project](https://github.com/vnotex/viki)上。
:::

::: alert-info
[VNote](https://vnotex.github.io/vnote)是一个更懂程序员和Markdown的笔记应用。
:::

## 功能
- 由Javascript和HTML5构建，无需服务器；
- 方便将**Markdown**文件展示为一个优雅的网站。和VNote结合，能够非常方便地将笔记本变成一个博客；
- 无需将Markdown文件进行转换；
- 通过jQuery和Boostrap实现响应式布局；
- 支持丰富的元素，例如 **PlantUML**, **Flowchart.js** 流程图, **Mermaid**, and **MathJax** 数学公式；

## 如何使用
例如，当前由一个目录`notes`，该目录下面包含了我们需要的Markdown文件：

```
notes/
  |-- v.md
  |-- i.md
  |-- k.md
  |-- work/
        |-- i.md
```

下载Viki的文件。一般会包含这些文件：

```
css/
js/
index.html
index.md
viki.json
navigation.json
```

复制这些文件到`notes`目录。现在部署`notes`目录到你的网站空间上，之后就可以通过形如`your.web.space/#!v.md`的地址形式访问这些笔记了。

一个更详细的指南可以参考[简单开始](get_started.md) 。

VNote用户可以具体参考 [Viki和VNote](docs/用户/Viki和VNote.md) 。
