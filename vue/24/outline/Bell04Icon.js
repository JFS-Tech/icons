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
      d: "m6.841 21.616-.5-.866zm-.848-.638-.992-.123zm-.67-3.565-.873.49.006.01zm-1.014-1.805.872-.49-.006-.01zm15.94-1.734.5.866zm-.115-1.041.408-.913zm-2.72-2.4-.873.488.006.011zm-.963-1.717.873-.489-.007-.01zM6.83 6.113l-.5-.866zm6.357 15.418.5.866zm-6.2-.43c.143-1.151.056-2.71-.798-4.188l-1.732 1c.575.995.652 2.081.545 2.942zm-.792-4.178-1.013-1.805-1.744.98 1.013 1.804zm14.348-5.003c-.779-.348-1.677-.974-2.263-1.988l-1.732 1c.853 1.477 2.133 2.347 3.18 2.814zm-2.257-1.977-.961-1.716-1.745.978.962 1.716zm-.968-1.727C15.092 4.362 10.175 3.027 6.33 5.247l1 1.732c2.881-1.663 6.58-.668 8.256 2.237zm3.433 6.524c.64-.37.78-1.053.722-1.524-.058-.469-.338-1.032-.93-1.296l-.815 1.826c-.198-.088-.234-.239-.24-.285a.49.49 0 0 1 .263-.453zm-15.575.368c-1.648-2.856-.678-6.494 2.154-8.129l-1-1.732c-3.796 2.192-5.082 7.056-2.886 10.86zm1.166 5.642a.48.48 0 0 1 .526 0c.032.024.146.131.119.352L5 20.855c-.081.654.269 1.188.643 1.478.376.29 1.045.525 1.697.149zm13.409-7.742L6.34 20.75l1 1.732L20.75 14.74zm-6.117 4.686c.55.952.21 2.304-.947 2.971l1 1.732c2.006-1.158 2.841-3.69 1.68-5.703zm-.947 2.971c-1.157.668-2.497.288-3.047-.665l-1.732 1c1.162 2.013 3.773 2.556 5.779 1.397zM6.77 3.602a1.204 1.204 0 0 1-.44 1.645l1 1.732a3.204 3.204 0 0 0 1.172-4.377zm-.44 1.645a1.204 1.204 0 0 1-1.646-.44l-1.732 1A3.204 3.204 0 0 0 7.33 6.979zm-1.646-.44a1.204 1.204 0 0 1 .441-1.645l-1-1.732a3.204 3.204 0 0 0-1.173 4.377zm.441-1.645a1.204 1.204 0 0 1 1.645.44l1.732-1A3.204 3.204 0 0 0 4.125 1.43z"
    })
  ]))
}