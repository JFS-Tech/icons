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
      d: "M8.158 6.5a6.76 6.76 0 0 0-1.852 2.358 6.85 6.85 0 0 0-.66 2.937c.004 2.48-.559 4.928-1.644 7.151M13.36 22.8c1.602-3.44 2.656-9.45 2.42-11.005-.293-1.922-1.214-3.458-3.435-3.458-2.546 0-3.322 2.586-3.322 3.685m13.153 6.284c.415-2.145.624-4.325.625-6.51 0-2.81-1.102-5.506-3.063-7.493A10.39 10.39 0 0 0 12.343 1.2 10.39 10.39 0 0 0 4.95 4.303a10.67 10.67 0 0 0-3.062 7.492 12.5 12.5 0 0 1-.687 4.092m5.366 5.352a19.6 19.6 0 0 0 2.23-5.94m10.02.203q.227-1.847.224-3.707a6.83 6.83 0 0 0-1.962-4.798 6.65 6.65 0 0 0-4.734-1.987q-.42-.003-.837.049m6.612 14.148a40 40 0 0 1-.59 2.032m-7.717 1.057c1.334-2.409 2.537-6.4 2.537-10.464"
    })
  ]))
}