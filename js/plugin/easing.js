// --------------------------------------------------
// easing.js v0.5.4
// Generic set of easing functions with AMD support
// https://github.com/danro/easing-js
// This code may be freely distributed under the MIT license
// http://danro.mit-license.org/
// --------------------------------------------------
// All functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE
/*
swingFromTo
swingFrom
swingTo
easeFromTo
easeFrom
easeTo
easeInQuad
easeOutQuad
easeInOutQuad
easeInCubic
easeOutCubic
easeInOutCubic
easeInQuart
easeOutQuart
easeInOutQuart
easeInQuint
easeOutQuint
easeInOutQuint
easeInSine
easeOutSine
easeInOutSine
easeInExpo
easeOutExpo
easeInOutExpo
easeInCirc
easeOutCirc
easeInOutCirc
easeOutBounce
easeInBack
easeOutBack
easeInOutBack
bounce
bouncePast
elastic

*/
// --------------------------------------------------
(function (a, b) {
  typeof define == 'function'
    ? define(b)
    : typeof module != 'undefined'
    ? (module.exports = b)
    : (this[a] = b);
})('easing', {
  easeInQuad: function (a) {
    return Math.pow(a, 2);
  },
  easeOutQuad: function (a) {
    return -(Math.pow(a - 1, 2) - 1);
  },
  easeInOutQuad: function (a) {
    return (a /= 0.5) < 1 ? 0.5 * Math.pow(a, 2) : -0.5 * ((a -= 2) * a - 2);
  },
  easeInCubic: function (a) {
    return Math.pow(a, 3);
  },
  easeOutCubic: function (a) {
    return Math.pow(a - 1, 3) + 1;
  },
  easeInOutCubic: function (a) {
    return (a /= 0.5) < 1
      ? 0.5 * Math.pow(a, 3)
      : 0.5 * (Math.pow(a - 2, 3) + 2);
  },
  easeInQuart: function (a) {
    return Math.pow(a, 4);
  },
  easeOutQuart: function (a) {
    return -(Math.pow(a - 1, 4) - 1);
  },
  easeInOutQuart: function (a) {
    return (a /= 0.5) < 1
      ? 0.5 * Math.pow(a, 4)
      : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
  },
  easeInQuint: function (a) {
    return Math.pow(a, 5);
  },
  easeOutQuint: function (a) {
    return Math.pow(a - 1, 5) + 1;
  },
  easeInOutQuint: function (a) {
    return (a /= 0.5) < 1
      ? 0.5 * Math.pow(a, 5)
      : 0.5 * (Math.pow(a - 2, 5) + 2);
  },
  easeInSine: function (a) {
    return -Math.cos(a * (Math.PI / 2)) + 1;
  },
  easeOutSine: function (a) {
    return Math.sin(a * (Math.PI / 2));
  },
  easeInOutSine: function (a) {
    return -0.5 * (Math.cos(Math.PI * a) - 1);
  },
  easeInExpo: function (a) {
    return a === 0 ? 0 : Math.pow(2, 10 * (a - 1));
  },
  easeOutExpo: function (a) {
    return a === 1 ? 1 : -Math.pow(2, -10 * a) + 1;
  },
  easeInOutExpo: function (a) {
    return a === 0
      ? 0
      : a === 1
      ? 1
      : (a /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (a - 1))
      : 0.5 * (-Math.pow(2, -10 * --a) + 2);
  },
  easeInCirc: function (a) {
    return -(Math.sqrt(1 - a * a) - 1);
  },
  easeOutCirc: function (a) {
    return Math.sqrt(1 - Math.pow(a - 1, 2));
  },
  easeInOutCirc: function (a) {
    return (a /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - a * a) - 1)
      : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
  },
  easeOutBounce: function (a) {
    return a < 1 / 2.75
      ? 7.5625 * a * a
      : a < 2 / 2.75
      ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
      : a < 2.5 / 2.75
      ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
      : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
  },
  easeInBack: function (a) {
    var b = 1.70158;
    return a * a * ((b + 1) * a - b);
  },
  easeOutBack: function (a) {
    var b = 1.70158;
    return (a -= 1) * a * ((b + 1) * a + b) + 1;
  },
  easeInOutBack: function (a) {
    var b = 1.70158;
    return (a /= 0.5) < 1
      ? 0.5 * a * a * (((b *= 1.525) + 1) * a - b)
      : 0.5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
  },
  elastic: function (a) {
    return (
      -1 * Math.pow(4, -8 * a) * Math.sin(((a * 6 - 1) * 2 * Math.PI) / 2) + 1
    );
  },
  swingFromTo: function (a) {
    var b = 1.70158;
    return (a /= 0.5) < 1
      ? 0.5 * a * a * (((b *= 1.525) + 1) * a - b)
      : 0.5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
  },
  swingFrom: function (a) {
    var b = 1.70158;
    return a * a * ((b + 1) * a - b);
  },
  swingTo: function (a) {
    var b = 1.70158;
    return (a -= 1) * a * ((b + 1) * a + b) + 1;
  },
  bounce: function (a) {
    return a < 1 / 2.75
      ? 7.5625 * a * a
      : a < 2 / 2.75
      ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
      : a < 2.5 / 2.75
      ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
      : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
  },
  bouncePast: function (a) {
    return a < 1 / 2.75
      ? 7.5625 * a * a
      : a < 2 / 2.75
      ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
      : a < 2.5 / 2.75
      ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
      : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
  },
  easeFromTo: function (a) {
    return (a /= 0.5) < 1
      ? 0.5 * Math.pow(a, 4)
      : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
  },
  easeFrom: function (a) {
    return Math.pow(a, 4);
  },
  easeTo: function (a) {
    return Math.pow(a, 0.25);
  },
});
