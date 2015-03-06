module.exports = function (depth) {
  try {
    throw new Error('Dummy')
  } catch (err) {
    var stack = err.stack
    .match(/\n([\s\S]*)/)[1]

    if (depth) { return stack.split('\n')[depth] }
    else { return stack }
  }
}