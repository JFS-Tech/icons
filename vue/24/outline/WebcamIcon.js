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
      d: "M12 16.632a3.9 3.9 0 0 1-2.828-1.234A4.33 4.33 0 0 1 8 12.421v-4.21c0-1.117.421-2.188 1.172-2.978A3.9 3.9 0 0 1 12 4c1.06 0 2.078.444 2.828 1.233S16 7.093 16 8.211v4.21a4.33 4.33 0 0 1-1.172 2.977A3.9 3.9 0 0 1 12 16.632m0 0V20m-1.6 0h3.2M12 9.053a.78.78 0 0 0 .566-.247.87.87 0 0 0 .234-.595.87.87 0 0 0-.234-.596.78.78 0 0 0-.566-.247.78.78 0 0 0-.566.247.87.87 0 0 0-.234.596c0 .223.084.437.234.595a.78.78 0 0 0 .566.247"
    })
  ]))
}