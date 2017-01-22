'use strict'

const motion = require('leap-motion-stream')
const lastFrame = require('.')
const allFrames = require('./all-frames')

motion()
// .pipe(allFrames('circle'))
.pipe(lastFrame('circle'))
.on('data', console.log)
