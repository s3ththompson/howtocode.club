var html = require('choo/html')

module.exports = function (els, start) {
  if (!Array.isArray(els)) els = [els]
  if (typeof start == 'undefined' || !start) start = 1
  return html`<ol start=${start}>
    ${els.map(el => html`<li>${el}</li>`)}
  </ol>`
}
