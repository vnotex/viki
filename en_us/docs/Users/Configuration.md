# Configuration
## 1. navigation.json
`navigation.json` is a file to instruct Viki how to construct the navigation bar of your site.

A typical `navigation.json` may look like this:

```json
{
    "navigation":
    [
        {
            "text": "Text to Show",
            "target": "target_file_of_this_item.md",
            "toc": false
        },
        {
            "text": "Item with TOC Enabled",
            "target": "subfolder/get_started.md"
        },
        {
            "text": "Two Levels Item",
            "children":
            [
                {
                    "text": "Sub Item 1",
                    "target": "sub/downloads.md",
                    "toc": false
                },
                {
                    "text": "Sub Item 2",
                    "target": "sub/markdown.md"
                }
            ]
        },
        {
            "text": "Item targeting VNote's notebook",
            "target": "docs/_vnote.json",
            "navi": true,
            "navi_index": "docs/page_to_show_when_this_item_is_activated.md"
        },
        {
            "text": "Examples",
            "target": "examples.md"
        }
    ],
    "actions":
    [
        {
            "text": "GitHub",
            "icon": "css/github.svg",
            "target": "https://github.com/tamlok/viki"
        }
    ]
}
```

## 2. viki.json
`viki.json` is the file to control Viki's behaviors.

```json
{
    "brand": "viki",
    "title": "Viki - A simple Wiki page in Markdown from notebook of VNote",
    "favicon": "https://github.com/tamlok/viki/raw/master/resources/viki.ico",
    "footer": "",
    "show_suffix": false,
    "load_before_search": true,
    "fuzzy_search": false,
    "markdown":
    {
        "html": true,
        "breaks": false,
        "linkify": false,
        "typographer": false,
        "lang_prefix": "lang-",
        "image_caption": true,
        "plantuml_server": "http://www.plantuml.com/plantuml",
        "plantuml_format": "svg",
        "code_block_line_number": false
    }
}
```