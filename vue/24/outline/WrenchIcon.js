const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "stroke-linejoin": "round",
      d: "M20.982 7.375c-.014-.16-.372-.468-.523-.523a.42.42 0 0 0-.436.096l-2.29 2.29-2.974-2.974 2.336-2.327a.41.41 0 0 0 .096-.434c-.055-.15-.422-.471-.583-.485a4.8 4.8 0 0 0-3.813 1.384 4.78 4.78 0 0 0-1.095 5.08q-.105.088-.209.189l-7.795 7.328-.009.009a2.34 2.34 0 0 0 0 3.313 2.347 2.347 0 0 0 3.326-.023l7.292-7.827q.099-.1.186-.207a4.83 4.83 0 0 0 5.102-1.09 4.77 4.77 0 0 0 1.389-3.799Z"
    })
  ]))
}