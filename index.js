'use strict'

const through = require('through2')

const lastFrame = (type = null) => {
	return through.obj(function (data, _, cb) {
		if (!data.gestures || data.gestures.length === 0) return cb()

		for (let gesture of data.gestures) {
			if (type && gesture.type !== type) continue
			if (gesture.state === 'stop') {
				this.emit(gesture.type, gesture)
				this.push(gesture)
			}
		}
		cb()
	})
}

module.exports = lastFrame
