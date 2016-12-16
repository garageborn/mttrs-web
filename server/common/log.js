import path from 'path'
import fs from 'fs-extra'
import bunyan from 'bunyan'
import stream from 'stream'
import moment from 'moment'
import { terminal } from 'print-error'
import levels from './log-levels'

function printError (error) {
  console.log(terminal(error))
}

const colours = {
  Trace: 'blue',
  Debug: 'cyan',
  Info: 'green',
  Warn: 'yellow',
  Error: 'red',
  Fatal: 'magenta',
  '...': 'grey'
}

const styles = {
  // styles
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],

  // grayscale
  'white': [37, 39],
  'grey': [90, 39],
  'black': [90, 39],

  // colors
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}

function colorizeStart (style) {
  return style ? '\x1B[' + styles[style][0] + 'm' : ''
}

function colorizeEnd (style) {
  return style ? '\x1B[' + styles[style][1] + 'm' : ''
}

function colorize (text, style) {
  return colorizeStart(style) + text + colorizeEnd(style)
}

function preamble (source, level, time, colour) {
  let preamble = `[${source}] ${time} `
  if (level !== 'Generic') {
    preamble += `${level} `
  }
  return colorize(preamble, colour)
}

function print (source, level, message, time) {
  time = moment(time).format('dddd, MMMM Do YYYY, hh:mm:ss')

  return console.log(preamble(
    source,
    level,
    time,
    colours[level.toString()] || colours['...']
  ) + message)
}

export default function create (name, options = {}) {
  const consoleOutput = new stream()
  consoleOutput.writable = true

  // for consoleOutput.write()
  const _print = print

  consoleOutput.write = data =>	{
    if (data.err) {
      return printError(data.err)
    }

    const print = (level, message, time) => _print(data.name, level, message, time)

    print(levels[data.level] || '...', data.msg, data.time)
  }

  const developmentLog = {
    streams: [{
      type: 'raw',
      stream: consoleOutput
    }],
    serializers: {
      error: bunyan.stdSerializers.err,
      request: bunyan.stdSerializers.req,
      response: bunyan.stdSerializers.res
    }
  }

  const logPath = path.resolve(Root, 'log', `${name}.txt`)

  fs.ensureDirSync(path.dirname(logPath))

  const productionLog = {
    streams: [
      {
        type: 'raw',
        stream: consoleOutput
      },
      {
        type: 'rotating-file',
        path: logPath,
        period: '1d',            // daily rotation
        count: 3                // keep 3 back copies
      }
    ],
    serializers: {
      error: bunyan.stdSerializers.err,
      request: bunyan.stdSerializers.req,
      response: bunyan.stdSerializers.res
    }
  }

  const logConfiguration = (_production_ || process.env.NODE_ENV === 'production') ? productionLog : developmentLog

  return bunyan.createLogger(Object.assign({}, { name: name }, logConfiguration))
}
