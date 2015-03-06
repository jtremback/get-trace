# Get Trace

Gives you a stack trace. Optionally returns only the trace at a certain depth in the stack.

```js
var trace = require('get-trace')

console.log(trace())
// at module.exports (/Users/jehan/microstar/get-trace/index.js:3:11)
// at repl:1:14
// at REPLServer.self.eval (repl.js:110:21)
// at Interface.<anonymous> (repl.js:239:12)
// at Interface.emit (events.js:95:17)
// at Interface._onLine (readline.js:202:10)
// at Interface._line (readline.js:531:8)
// at Interface._ttyWrite (readline.js:760:14)
// at ReadStream.onkeypress (readline.js:99:10)
// at ReadStream.emit (events.js:98:17)

console.log(trace(2))
// at REPLServer.self.eval (repl.js:110:21)
```