/**
 * @class
 */
export default class MagneticHover {
  /**
   * @param  {HTMLElement} {element
   * @param  {number} radius radius around the element on which it is triggered callback
   * @param  {Function} callback The callback that handles the response.
   *
   * @callback
   * @param {number}  distance
   */
  constructor({
    element,
    radius,
    callback = (distance) => {
      console.log(distance);
    },
  }) {
    this._checkArgument(
      element instanceof HTMLElement ||
        element instanceof HTMLBodyElement ||
        element instanceof HTMLBodyElement,
      "element is not a HTMLElement"
    );
    this._checkArgument(typeof radius === "number", "radius must be a number");
    this._checkArgument(
      typeof callback === "function",
      "callback must be a function"
    );
    this.element = element;
    this.radius = radius;
    this.cb = callback;
    this._init();
  }
  handler = this._handleMouseMove.bind(this);
  distance = 0;
  positionVariants = {
    TOP_LEFT: "TOP_LEFT",
    TOP: "TOP",
    TOP_RIGHT: "TOP_RIGHT",
    RIGHT: "RIGHT",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
    BOTTOM: "BOTTOM",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    LEFT: "LEFT",
    MIDDLE: "MIDDLE",
  };

  get _elementPosition() {
    return {
      top: this.element.offsetTop,
      left: this.element.offsetLeft,
      right: this.element.offsetWidth + this.element.offsetLeft,
      bottom: this.element.offsetHeight + this.element.offsetTop,
    };
  }

  /**
   * @method _mouseMoveRange this getter return object with mouse move range coordinates
   * @return {object}
   */
  get _mouseMoveRange() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const topMouseRangePosition = this.element.offsetTop - this.radius;

    const leftMouseRangePosition = this.element.offsetLeft - this.radius;

    const rightMouseRangePosition =
      this.element.offsetWidth + this.element.offsetLeft + this.radius;

    const bottomMouseRangePosition =
      this.element.offsetHeight + this.element.offsetTop + this.radius;
    return {
      top: topMouseRangePosition < 0 ? 0 : topMouseRangePosition,
      left: leftMouseRangePosition < 0 ? 0 : leftMouseRangePosition,
      right:
        rightMouseRangePosition > screenWidth
          ? screenWidth
          : rightMouseRangePosition,
      bottom:
        bottomMouseRangePosition > screenHeight
          ? screenHeight
          : bottomMouseRangePosition,
    };
  }
  /**@method _maxHypotenuse this getter return max length from uttermost point of element to uttermost point mouse move range
   * @return {number}
   */
  get _maxHypotenuse() {
    return this._getHypotenuse(this.radius, this.radius);
  }

  /**
   * @method _checkRange This function check cursor position in element radius range
   * @param  {number} x cursor position on x axis
   * @param  {number} y cursor position on x axis
   * @return {boolean}
   */
  _checkRange(x, y) {
    return (
      x > this._mouseMoveRange.left &&
      x < this._mouseMoveRange.right &&
      y < this._mouseMoveRange.bottom &&
      y > this._mouseMoveRange.top
    );
  }
  _getHypotenuse(sideX, sideY) {
    return Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));
  }

  _getPercent(maxValue, currentValue) {
    return Math.floor((Math.abs(currentValue) / maxValue) * 100);
  }

  /**
   * @method _getCursorPosition
   * @param  {number} x cursor position on x axis
   * @param  {number} y cursor position on x axis
   * @return {string}
   */
  _getCursorPosition(x, y) {
    if (x < this._elementPosition.left && y < this._elementPosition.top) {
      return this.positionVariants.TOP_LEFT;
    }
    if (
      x > this._elementPosition.left &&
      x < this._elementPosition.right &&
      y < this._elementPosition.top
    ) {
      return this.positionVariants.TOP;
    }
    if (x > this._elementPosition.right && y < this._elementPosition.top) {
      return this.positionVariants.TOP_RIGHT;
    }
    if (
      x > this._elementPosition.right &&
      y > this._elementPosition.top &&
      y < this._elementPosition.bottom
    ) {
      return this.positionVariants.RIGHT;
    }
    if (x > this._elementPosition.right && y > this._elementPosition.bottom) {
      return this.positionVariants.BOTTOM_RIGHT;
    }
    if (
      x > this._elementPosition.left &&
      x < this._elementPosition.right &&
      y > this._elementPosition.bottom
    ) {
      return this.positionVariants.BOTTOM;
    }
    if (x < this._elementPosition.left && y > this._elementPosition.bottom) {
      return this.positionVariants.BOTTOM_LEFT;
    }
    if (
      x < this._elementPosition.left &&
      y > this._elementPosition.top &&
      y < this._elementPosition.bottom
    ) {
      return this.positionVariants.LEFT;
    }
    if (
      x > this._elementPosition.left &&
      x < this._elementPosition.right &&
      y > this._elementPosition.top &&
      y < this._elementPosition.bottom
    ) {
      return this.positionVariants.MIDDLE;
    }
  }
  _getDiagonalDistance(sideX, sideY) {
    const hypotenuse = this._getHypotenuse(sideX, sideY);
    return this._getPercent(this._maxHypotenuse, hypotenuse);
  }
  /**
   * @method _getResultingDistance this function return distance to element in the ratio from 1 to 100
   * @param  {number} x cursor position on x axis
   * @param  {number} y cursor position on x axis
   * @return {number} distance
   */
  _getResultingDistance(x, y) {
    let distance = this.distance;
    switch (this._getCursorPosition(x, y)) {
      case this.positionVariants.MIDDLE: {
        distance = 0;
        break;
      }
      case this.positionVariants.TOP_LEFT: {
        distance = this._getDiagonalDistance(
          this._elementPosition.left - x,
          this._elementPosition.top - y
        );
        break;
      }
      case this.positionVariants.TOP: {
        distance = this._getPercent(this.radius, this._elementPosition.top - y);
        break;
      }
      case this.positionVariants.TOP_RIGHT: {
        distance = this._getDiagonalDistance(
          this._elementPosition.right - x,
          this._elementPosition.top - y
        );

        break;
      }
      case this.positionVariants.RIGHT: {
        distance = this._getPercent(
          this.radius,
          this._elementPosition.right - x
        );
        break;
      }
      case this.positionVariants.BOTTOM_RIGHT: {
        distance = this._getDiagonalDistance(
          this._elementPosition.right - x,
          this._elementPosition.bottom - y
        );

        break;
      }
      case this.positionVariants.BOTTOM: {
        distance = this._getPercent(
          this.radius,
          this._elementPosition.bottom - y
        );

        break;
      }
      case this.positionVariants.BOTTOM_LEFT: {
        distance = this._getDiagonalDistance(
          this._elementPosition.left - x,
          this._elementPosition.bottom - y
        );

        break;
      }
      case this.positionVariants.LEFT: {
        distance = this._getPercent(
          this.radius,
          this._elementPosition.left - x
        );

        break;
      }
      default:
        break;
    }
    return distance;
  }
  /**
   * @method _handleMouseMove event listener
   * @param  {number} x cursor position on x axis
   * @param  {number} y cursor position on x axis
   * @return {null}
   */
  _handleMouseMove({ clientX: x, clientY: y }) {
    if (!this._checkRange(x, y)) return;
    this.distance = this._getResultingDistance(x, y);
    this.cb(this.distance);
  }

  /**
   * @method _checkArgument check class arguments
   * @param  {boolean} check some expression, which return boolean
   * @param  {string} errorMessage error message
   * @return {null}
   */
  _checkArgument(check, errorMessage) {
    if (!check) {
      throw new Error(errorMessage);
    }
  }

  _init() {
    window.addEventListener("mousemove", this.handler);
  }
  /**
   * @method disable remove event listener from window
   */
  disable() {
    window.removeEventListener("mousemove", this.handler);
  }
}

//init
const elem = document.getElementById("box");
const distanceBox = document.getElementById("distance");
new MagneticHover({
  element: elem,
  radius: 100,
  callback: (distance) => {
    console.log(distance);
    distanceBox.innerText = distance;
  },
});
