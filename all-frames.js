'use strict'

const through = require('through2')

const allFrames = (type = null) => {
	const cache = {}

	return through.obj(function (data, _, cb) {
		if (!data.gestures || data.gestures.length === 0) return cb()

		for (let gesture of data.gestures) {
			if (type && gesture.type !== type) continue
			const id = gesture.id.toString()

			if (gesture.state === 'start') cache[id] = [gesture]
			else cache[id].push(gesture)

			if (gesture.state === 'stop') {
				this.emit(gesture.type, cache[id])
				this.push(cache[id])
				delete cache[id]
			}
		}
		cb()
	})
}

module.exports = allFrames
