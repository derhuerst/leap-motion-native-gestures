'use strict'

const through = require('through2')

const parseGesture = require('./parse-gesture')

const lastFrame = (type = null) => {
	return through.obj(function (data, _, cb) {
		if (!data.gestures || data.gestures.length === 0) return cb()

		for (let gesture of data.gestures) {
			if (type && gesture.type !== type) continue
			if (gesture.state === 'stop') {
				const parsed = parseGesture(gesture, data)
				this.emit(parsed.type, parsed)
				this.push(parsed)
			}
		}
		cb()
	})
}

module.exports = lastFrame
