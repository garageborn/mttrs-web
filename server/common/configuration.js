// import fs from 'fs'
import path from 'path'
import minimist from 'minimist'

import configuration from '../../configuration.defaults'
import specificConfiguration from '../../configuration'

Object.assign({}, configuration, specificConfiguration)
export default configuration

// можно будет использовать этот файл в shell'овых скриптах
// (команда: node configuration.coffee --path="...")

const processArguments = minimist(process.argv.slice(2))

if (processArguments.path) {
	console.log(Object.path(configuration, processArguments.path))
	process.exit()
}
