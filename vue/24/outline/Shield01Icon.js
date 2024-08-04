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
      d: "M12 2.4C9.303 4.693 7.613 4.8 4.8 4.8v9.228c0 3.682 2.562 4.643 7.2 7.572 4.638-2.929 7.2-3.89 7.2-7.572V4.8c-2.813 0-4.503-.107-7.2-2.4Z"
    })
  ]))
}