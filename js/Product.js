"use strict";

class Product {
  /**
   *
   * @param {string} name
   * @param {number} price
   * @param {string} currently
   * @param {number} amount
   */
  constructor(name, price, currently, amount) {
    this.name = name;
    this.price = price;
    this.currently = currently;
    this.amount = amount;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (name.length < 3) {
      throw new RangeError("The word must be at least 3 characters");
    }
    this._name = name;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    if (typeof price !== "number") {
      throw new TypeError("Price must be a number");
    }
    if (price <= 0) {
      throw new RangeError("Prie must be more than zero");
    }
    this._price = price;
  }
  get currently() {
    return this._currently;
  }
  set currently(currently) {
    if (typeof currently !== "string") {
      throw new TypeError("Currently must be string");
    }
    this._currently = currently;
  }
  get amount() {
    return this._amount;
  }
  set amount(amount) {
    if (typeof amount !== "number") {
      throw new TypeError("Amount must be a number");
    }
    if (amount <= 0 || amount > 999) {
      throw new RangeError("Amount of product must be from 1 to 999");
    }
    this._amount = amount;
  }
  getInfoProduct() {
    return `Product name: ${this._name}, price:${this._price}${this.currently}, remaining stock: ${this._amount}`;
  }
  /**
   *
   * @param {number} amountBuy
   */
  buyProduct(amountBuy) {
    if (typeof amountBuy !== "number") {
      throw new TypeError("Enter required number");
    }
    if (amountBuy < 1 || this.amountBuy > 999) {
      throw new RangeError("Please enter amount of product from 1 till 999");
    }
    return `Thank you! Your purchase - ${amountBuy} ${this._name} for ${
      this._price * amountBuy
    }${this._currently}. Let\`s keep buying!`;
  }
}

class TrueProduct extends Product {
  /**
   * @param {number} weight
   */
  constructor(name, price, currently, amount, weight) {
    super(name, price, currently, amount);
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(weight) {
    if (typeof weight !== "number") {
      throw new TypeError("The weight must be a number");
    }
    if (weight < 0) {
      throw new RangeError("The weight must be more than zero");
    }
    this._weight = weight;
  }
  getInfoProduct() {
    return `Product name: ${this._name}, price:${this._price}${this.currently}, remaining stock: ${this._amount}, weight: ${this._weight}`;
  }
}

class VirtualProduct extends Product {
  /**
   *
   *
   * @param {number} amountMemory
   */
  constructor(name, price, currently, amount, amountMemory) {
    super(name, price, currently, amount);
    this.amountMemory = amountMemory;
  }
  get amountMemory() {
    return this.amountMemory;
  }
  set amountMemory(amountMemory) {
    if (typeof amountMemory !== "number") {
      throw new TypeError("The amount of memory must be a number");
    }
    if (amountMemory < 0) {
      throw new RangeError("The amount of memory must be more than zero");
    }
    this._amountMemory = amountMemory;
  }
  getInfoProduct() {
    return `Product name: ${this._name}, price:${this._price}${this.currently}, remaining stock: ${this._amount}, amount of memory: ${this._amountMemory}`;
  }
}

try {
  const throusers = new Product("throusers", 250, "$", 900);
  console.log(throusers.getInfoProduct());
  console.log(throusers.buyProduct(2));
  const trueThrousers = new TrueProduct("Throusers", 250, "$", 100, 200);
  console.log(trueThrousers.getInfoProduct());
  const virtualThrousers = new VirtualProduct("Throusers", 250, "$", 100, 1024);
  console.log(virtualThrousers.getInfoProduct());
} catch (error) {
  console.log(error);
}
