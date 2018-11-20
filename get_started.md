# Get started
## Prepare space to serve Viki
First of all, you need to find a place to host your site. Any service that can host static content can make it work.

Below are some examples.

### Github
[GitHub Pages](https://pages.github.com/) is a good choice to hold websites for you and your projects.

::: alert-info

You may want to add a `.nojekyll`file at the root of your project to bypass Jekyll on GitHub Pages. Otherwise, files or directories that start with underscores will be filtered away. See more on [GitHub Blogs](https://blog.github.com/2009-12-29-bypassing-jekyll-on-github-pages/).

:::

### Local host
You may want to setup a small HTTP server on your local host and share your notes within local network.

There are two simple choices:

1. `python -m SimpleHTTPServer` to start a simple HTTP server in python. You need to first install [Python](https://www.python.org/).
2. `http-server` to start a simple HTTP server in node.js. Details could be found [here](https://www.npmjs.com/package/http-server).

::: alert-warning

`SimpleHTTPServer` in python does not work well with path containing Chinese.

:::

## Get Viki
Download files of Viki from [GitHub Releases](https://github.com/tamlok/viki/releases). What you need are files within the `dist/` folder.

![Viki Files](_v_images/20181118110442141_26270.png)

Copy all these files to the root of your site. Let's assume that the host of your site is `http://localhost:8080`.

`index.html` is the main entry of Viki. You could visit your site via `http://localhost:8080/index.html`. By default, Viki will try to fetch the `index.md` and show the content.

If you want to visit another page, just append `#!` and the relative path of that page after `http://localhost:8080/index.html`. For example, `http://localhost:8080/index.html#!abc.md` to visit file `abc.md` at the root; `http://localhost:8080/index.html#!main/def.md` to visit file `main/def.md`.

Generally you could omit the `index.html` in the URL, such as `http://localhost:8080/` will show you content of `index.md`.

`css/` and `js/` hold necessary resources of Viki. `navigation.json` is the file to setup the navigation bar of your site. `viki.json` is the configuration file of Viki. For more details, please visit [Documentation](docs/_vnote.json).

## Add more files to your site
Now you are ready to construct the cotnent of your site by adding more `*.md` files. You may need to add an entry to the `navigation.json` file if you want to show a page in the navigation bar.

## Notebook of VNote
Viki could recognize the index file of VNote's notebook. Hence you could construct a notebook within your site and Viki will show the notes automatically. For more details, please visit [Viki and VNote](docs/Users/Viki%20and%20VNote.md).
