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
      fill: "#000",
      d: "m4.602 16.86-.828-.56zm1.09-3.479-1-.01v.01zm.023-2.102 1 .01v-.01zm13.692 5.597.84-.543zm-1.05-3.495-1-.011v.011zm.024-1.998 1 .011v-.011zM9.502 20a1 1 0 1 0 0 2zm5 2a1 1 0 1 0 0-2zM3.064 6.024a1 1 0 1 0 1.87.71zM7.31 3.869a1 1 0 0 0-.988-1.738zm10.358-1.724a1 1 0 1 0-1.007 1.728zm1.394 4.57a1 1 0 0 0 1.876-.69zM5.432 17.42c.635-.942 1.26-2.338 1.26-4.038h-2c0 1.204-.445 2.217-.918 2.919zm1.26-4.027.023-2.102-2-.022-.023 2.102zm13.554 2.94a5.48 5.48 0 0 1-.888-2.95h-2c0 1.698.6 3.096 1.21 4.038zm-.888-2.94.023-1.998-2-.023-.023 1.999zm.023-2.01c0-4.402-3.196-8.177-7.38-8.177v2c2.864 0 5.38 2.651 5.38 6.178zm-.356 7.469c.787 0 1.21-.608 1.359-1 .157-.415.193-1.008-.138-1.518l-1.679 1.087a.4.4 0 0 1-.067-.191.2.2 0 0 1 .013-.086.4.4 0 0 1 .107-.144.62.62 0 0 1 .405-.148zm-12.31-7.572c0-3.47 2.475-6.074 5.287-6.074v-2c-4.132 0-7.287 3.729-7.287 8.074zM4.98 16.85c.189 0 .331.08.41.152a.36.36 0 0 1 .103.14.2.2 0 0 1 .011.082.4.4 0 0 1-.072.194l-1.657-1.12c-.347.514-.313 1.117-.16 1.533.144.393.566 1.019 1.365 1.019zm14.046 0H4.979v2h14.046zM9.502 22h5v-2h-5zM4.935 6.735c.473-1.247 1.311-2.261 2.375-2.866l-.988-1.738c-1.51.857-2.635 2.258-3.257 3.893zM16.66 3.873a5.5 5.5 0 0 1 2.4 2.843l1.877-.692a7.5 7.5 0 0 0-3.27-3.879z"
    })
  ]))
}