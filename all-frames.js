'use strict'

const through = require('through2')

const parseGesture = require('./parse-gesture')

const allFrames = (type = null) => {
	const cache = {}

	return through.obj(function (data, _, cb) {
		if (!data.gestures || data.gestures.length === 0) return cb()

		for (let gesture of data.gestures) {
			if (type && gesture.type !== type) continue

			const id = gesture.id.toString()
			const parsed = parseGesture(gesture, data)

			if (gesture.state === 'start') cache[id] = [parsed]
			else cache[id].push(parsed)

			if (gesture.state === 'stop') {
				this.emit(parsed.type, cache[id])
				this.push(cache[id])
				delete cache[id]
			}
		}
		cb()
	})
}

module.exports = allFrames
