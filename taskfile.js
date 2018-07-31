var path = require('path')

var jsFromPath = './myCode/src/**/*.js'
var JSToPath = './myCode/build'

function * compileJS(task){
  yield task.source(jsFromPath).babel().target(JSToPath)
}

// function * copy(task){
//   yield task.source(``)
// }

function * watch(task){
  yield task.watch(jsFromPath, 'compileJS')
}

module.exports.watch = watch
