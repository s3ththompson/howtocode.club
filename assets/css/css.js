var gr8 = require('gr8')

var opts = {
  breakpointSelector: 'class',
  utils: []
}

var colors = {
  black: '#000',
  darkgray: '#2a2a2a',
  white: '#fff',
  offwhite: '#fbfaf5',
  gray: '#797979',
  red: '#ed3e29',
  blue: '#263ffe'
}

var borderWeights = [1]

var borders = {}

for (var weight of borderWeights) {
  for (var color in colors) {
    borders[weight + '-' + color] = `${weight}px solid ${colors[color]}`
  }
}

opts.utils.push({
  prop: [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left'
  ],
  vals: borders
})

opts.utils.push({
  prop: { bgc: 'background-color' },
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: 'color',
  join: '-',
  vals: colors
})

opts.utils.push({
  prop: 'font-family',
  join: '-',
  vals: {
    sans: `-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`,
    serif: `'Times New Roman', serif`
  }
})

opts.utils.push({
  prop: {
    mx: 'max-width',
    my: 'max-height'
  },
  unit: '%',
  vals: [100]
})

opts.utils.push({
  prop: 'text-decoration',
  vals: {
    'u-hover': 'underline',
    'o-hover': 'overline',
    'lt-hover': 'line-through',
    'n-hover': 'none'
  },
  tail: ':hover'
})

module.exports = gr8(opts)
