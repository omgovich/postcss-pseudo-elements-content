var postcss = require('postcss')
var fs = require('fs')

var plugin = require('./')

function run (input, output, opts) {
  return postcss([plugin(opts)])
    .process(input, { from: undefined })
    .then(function (result) {
      expect(result.css).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
    })
}

it('adds content property', function () {
  var input = fs.readFileSync('./test/input.css', 'utf-8')
  var expected = fs.readFileSync('./test/expected.css', 'utf-8')

  return run(input, expected, {})
})
