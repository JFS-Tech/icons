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
      d: "M5.5 8.914h14M7.31 3v1.543M17.5 3v1.543m0 0h-10c-1.657 0-3 1.381-3 3.086v10.285C4.5 19.618 5.843 21 7.5 21h10c1.657 0 3-1.381 3-3.086V7.63c0-1.705-1.343-3.086-3-3.086M12.5 12v2.571m0 0v2.572m0-2.572H15m-2.5 0H10"
    })
  ]))
}