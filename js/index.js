"use strict";

class Squirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   */
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = name;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    if (typeof color !== "string") {
      throw new TypeError("Color must be a string");
    }
  }
  jump() {
    return `${this._name} is jump`;
  }
}

class FlySquirrel extends Squirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   * @param {number} maxFlyLength
   */
  constructor(name, color, maxFlyLength = 100) {
    super(name, color);
    this.maxFlyLength = maxFlyLength;
  }
  get maxFlyLength() {
    return this._maxFlyLength;
  }
  set maxFlyLength(maxFlyLength) {
    if (typeof maxFlyLength !== "number") {
      throw new TypeError("Distance must be a number");
    }
    this._maxFlyLength = maxFlyLength;
  }
  /**
   *
   * @param {number} length
   * @returns
   */
  fly(length) {
    if (length > this.maxFlyLength) {
      throw new RangeError("Squirrel does not do this");
    }
    if (typeof length !== "number") {
      throw new TypeError("Name must be a string");
    }
    return `${this._name} is fly at ${length}`;
  }
}

class MagicSquirrel extends FlySquirrel {
  constructor(name, color, maxFlyLength, words) {
    super(name, color, maxFlyLength);
    this.words = words;
  }
  get words() {
    return this._words;
  }
  set words(words) {
    if (!Array.isArray(words)) {
      throw new TypeError("Must be a array");
    }
    this._words = words;
  }
  sayWords() {
    this.words.forEach((item) => console.log(item));
  }
}

const array = ["hello", "my", "name", "is", "Juliya"];

try {
  const squirrel1 = new Squirrel("Anzhela", "yellow");
  console.log(squirrel1.jump());
  const squirrel2 = new FlySquirrel("Snezhana", "white");
  console.log(squirrel2.jump());
  console.log(squirrel2.fly(100));
  const squirrel3 = new MagicSquirrel("Juliya", "red", undefined, array);
  console.log(squirrel3.jump());
  console.log(squirrel3.fly(100));
  console.log(squirrel3.sayWords());
} catch (error) {
  console.log(error);
}
