# leap-motion-native-gestures

**Detect native [Leap Motion](https://www.leapmotion.com/) gestures.**

[![npm version](https://img.shields.io/npm/v/leap-motion-native-gestures.svg)](https://www.npmjs.com/package/leap-motion-native-gestures)
[![dependency status](https://img.shields.io/david/derhuerst/leap-motion-native-gestures.svg)](https://david-dm.org/derhuerst/leap-motion-native-gestures)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/leap-motion-native-gestures.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install leap-motion-native-gestures
```


## Usage

```js
const motion = require('leap-motion-stream')
const gestures = require('leap-motion-native-gestures')

motion()
.pipe(gestures())
.on('data', console.log)
```

```js
{
	center: [1.0264, 215.21, 26.1393],
	duration: 396437,
	hands: [
		// data from leap-motion-stream
	],
	handIds: [216],
	id: 1,
	normal: [-0.150554, -0.0080183, 0.988569],
	pointableIds: [2161],
	pointables: [
		// data from leap-motion-stream
	],
	progress: 1.13408,
	radius: 59.9063,
	state: 'stop',
	type: 'circle'
}
```

`gestures` will give you only the last frame of the gesture. It contains most relevant information like e.g. the speed, but **if you want all frames, use `require('leap-motion-native-gestures/all-frames')`**.

**To listen only for a specific gesture, pass its type** to `gestures` or `allFrames`, respectively. Example: `gestures('swipe')`


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).
