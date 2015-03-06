module.exports = function (depth) {
  try {
    throw new Error('Dummy')
  } catch (err) {
    return err.stack
    .match(/\n.*at ([\s\S]*)/)[1]
    .split('\n')[depth]
  }
}