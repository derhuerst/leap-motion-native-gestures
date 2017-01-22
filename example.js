'use strict'

const motion = require('leap-motion-stream')
const lastFrame = require('.')
const allFrames = require('./all-frames')

motion()
// .pipe(allFrames('circle'))
.pipe(lastFrame('swipe'))
.on('data', console.log)
