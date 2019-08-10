/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Stefan Goessner - 2017-18. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *  Modified by Le Tan for MathJax support in VNote.
 *  We mark all the formulas and enclose them with $ in class 'tex-to-render' for
 *  further processing by MathJax.
 *--------------------------------------------------------------------------------------------*/
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function texmath(md, options) {
  var delimiters = ['dollars'];

  if (options && options.delimiters) {
    delimiters = options.delimiters;
  }

  for (var i = 0; i < delimiters.length; ++i) {
    var deli = delimiters[i];

    if (deli in texmath.rules) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var rule = _step.value;
          md.inline.ruler.before('escape', rule.name, texmath.inline(rule)); // ! important

          md.renderer.rules[rule.name] = function (tokens, idx) {
            return rule.tmpl.replace(/\$1/, texmath.render(tokens[idx].content, false));
          };
        };

        for (var _iterator = texmath.rules[deli].inline[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop2 = function _loop2() {
          var rule = _step2.value;
          md.block.ruler.before('fence', rule.name, texmath.block(rule));

          md.renderer.rules[rule.name] = function (tokens, idx) {
            return rule.tmpl.replace(/\$2/, tokens[idx].info) // equation number
            .replace(/\$1/, texmath.render(tokens[idx].content, true));
          };
        };

        for (var _iterator2 = texmath.rules[deli].block[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop2();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }
}

texmath.applyRule = function (rule, str, beg) {
  var pre, match, post;
  rule.rex.lastIndex = beg;
  pre = str.startsWith(rule.tag, beg) && (!rule.pre || rule.pre(str, beg));
  match = pre && rule.rex.exec(str);

  if (match) {
    match.lastIndex = rule.rex.lastIndex;
    post = !rule.post || rule.post(str, match.lastIndex - 1);
  }

  rule.rex.lastIndex = 0;
  return post && match;
};

texmath.inline = function (rule) {
  return function (state, silent) {
    var res = texmath.applyRule(rule, state.src, state.pos);

    if (res) {
      if (!silent) {
        var token = state.push(rule.name, 'math', 0);
        token.content = res[1]; // group 1 from regex ..

        token.markup = rule.tag;
      }

      state.pos = res.lastIndex;
    }

    return !!res;
  };
};

texmath.block = function (rule) {
  return function (state, begLine, endLine, silent) {
    var res = texmath.applyRule(rule, state.src, state.bMarks[begLine] + state.tShift[begLine]);

    if (res) {
      if (!silent) {
        var token = state.push(rule.name, 'math', 0);
        token.block = true;
        token.content = res[1];
        token.info = res[2];
        token.markup = rule.tag;
      }

      for (var line = begLine, endpos = res.lastIndex - 1; line < endLine; line++) {
        if (endpos >= state.bMarks[line] && endpos <= state.eMarks[line]) {
          // line for end of block math found ...
          state.line = line + 1;
          break;
        }
      }

      state.pos = res.lastIndex;
    }

    return !!res;
  };
};

texmath.render = function (tex, isblock) {
  var res;

  if (isblock) {
    res = '$$$$' + tex + '$$$$';
  } else {
    res = '$$' + tex + '$$';
  }

  return res;
};

texmath.$_pre = function (str, beg) {
  var prv = beg > 0 ? str[beg - 1].charCodeAt(0) : false;
  return !prv || prv !== 0x5c // no backslash,
  && (prv < 0x30 || prv > 0x39); // no decimal digit .. before opening '$'
};

texmath.$_post = function (str, end) {
  var nxt = str[end + 1] && str[end + 1].charCodeAt(0);
  return !nxt || nxt < 0x30 || nxt > 0x39; // no decimal digit .. after closing '$'
};

texmath.rules = {
  brackets: {
    inline: [{
      name: 'math_inline',
      rex: /\\\((.+?)\\\)/g,
      tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
      tag: '\\('
    }],
    block: [{
      name: 'math_block_eqno',
      rex: /\\\[(.+?)\\\]\s*?\(([^)$\r\n]+?)\)\s*$/gm,
      tmpl: '<x-eqs><x-eqn class="tex-to-render">$1</x-eqn><span>($2)</span></x-eqs>',
      tag: '\\['
    }, {
      name: 'math_block',
      rex: /\\\[(.+?)\\\]\s*$/gm,
      tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
      tag: '\\['
    }]
  },
  gitlab: {
    inline: [{
      name: 'math_inline',
      rex: /\$`(.+?)`\$/g,
      tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
      tag: '$`'
    }],
    block: [{
      name: 'math_block_eqno',
      rex: /`{3}math\s+?([^`]+?)\s+?`{3}\s*?\(([^)$\r\n]+?)\)\s*$/gm,
      tmpl: '<x-eqs><x-eqn class="tex-to-render">$1</x-eqn><span>($2)</span></x-eqs>',
      tag: '```math'
    }, {
      name: 'math_block',
      rex: /`{3}math\s+?([^`]+?)\s+?`{3}\s*$/gm,
      tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
      tag: '```math'
    }]
  },
  dollars: {
    inline: [{
      name: 'math_inline',
      rex: /\$(\S[^$\r\n]*?[^\s\\]{1}?)\$/g,
      tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
      tag: '$',
      pre: texmath.$_pre,
      post: texmath.$_post
    }, {
      name: 'math_single',
      rex: /\$([^$\s\\]{1}?)\$/g,
      tmpl: '<x-eq class="tex-to-render">$1</x-eq>',
      tag: '$',
      pre: texmath.$_pre,
      post: texmath.$_post
    }],
    block: [{
      name: 'math_block_eqno',
      rex: /\${2}((?:[^$]|\$(?!\$))*?)\${2}\s*?\(([^)$\r\n]+?)\)\s*$/gm,
      tmpl: '<x-eqs><x-eqn class="tex-to-render">$1</x-eqn><span>($2)</span></x-eqs>',
      tag: '$$'
    }, {
      name: 'math_block',
      rex: /\${2}((?:[^$]|\$(?!\$))*?)\${2}\s*$/gm,
      tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
      tag: '$$'
    }]
  },
  raw: {
    inline: [],
    block: [{
      name: 'math_block',
      rex: /(\\begin\s*\{([^{}\s\r\n]+)\}(?:[^\\]|\\(?!end\s*\{\2\}))*\\end\s*\{\2\})\s*$/gm,
      tmpl: '<x-eqn class="tex-to-render">$1</x-eqn>',
      tag: '\\begin'
    }]
  }
};
if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports) module.exports = texmath;
