'use strict'

const parseGesture = (gesture, frame) => {
	const hands = gesture.handIds.map((handId) => {
		return frame.hands.find((hand) => hand.id === handId)
	})
	const pointables = gesture.pointableIds.map((pointableId) => {
		return frame.pointables.find((pointable) => pointable.id === pointableId)
	})

	return Object.assign({hands, pointables}, gesture)
}

module.exports = parseGesture
