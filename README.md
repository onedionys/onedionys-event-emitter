<h1 align="center">Welcome to One Dionys - Event Emitter! 👋 </h1>

<p align="center">Packages to implement the Observer pattern, enabling communication between application components. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-event-emitter?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-event-emitter?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-event-emitter?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-event-emitter?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-event-emitter.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-event-emitter?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-event-emitter?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
// Import EventEmitter from the package
const EventEmitter = require('./src/EventEmitter');

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define a listener function
const listener = (data) => {
  console.log('Event triggered with data:', data);
};

// Register the listener for the 'customEvent' event
emitter.on('customEvent', listener);

// Emit the 'customEvent' event with some data
emitter.emit('customEvent', 'Hello, World!');

// Remove the listener for the 'customEvent' event
emitter.off('customEvent', listener);
```

#### Explanation

* The "Event Emitter" package has three main methods: on, emit, and off.
* The on method is used to add a listener to an event.
* The emit method is used to emit an event with optional parameters.
* The off method is used to remove the listener from an event.

#### Return Value

* The on and off methods do not return a specific value.
* The emit method does not return a value and is only used to trigger the event.

## 📆 Release Date

* v1.0.0 : 07 March 2024
* v1.0.1 : 11 March 2024
* v4.0.0 : 11 March 2024
* v4.0.1 : 11 March 2024
* v4.0.2 : 13 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - Event Emitter is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - Event Emitter? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
