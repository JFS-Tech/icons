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
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3.608v16.793m-9.6-8.396h19.2M18.96 21.6l-14.4-1.8c-1.2-.12-2.16-1.079-2.16-2.278V6.487c0-1.2.96-2.159 2.16-2.279l14.4-1.799c1.44-.12 2.64.96 2.64 2.279V19.2c0 1.44-1.32 2.519-2.64 2.279z"
    })
  ]))
}