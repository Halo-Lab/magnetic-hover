export default class HoverElement {
  constructor({
    element,
    radius,
    callback = (distance) => {
      console.log(distance);
    },
  }) {
    this.distance = 0;
    this.element = element;
    this.radius = radius;
    this.cb = callback;
    this.init();
  }

  get positionVariants() {
    return {
      leftTop: "leftTop",
      top: "top",
      topRight: "topRight",
      right: "right",
      bottomRight: "bottomRight",
      bottom: "bottom",
      bottomLeft: "bottomLeft",
      left: "left",
      center: "center",
    };
  }

  get elemPosition() {
    return {
      top: this.element.offsetTop,
      left: this.element.offsetLeft,
      right: this.element.offsetWidth + this.element.offsetLeft,
      bottom: this.element.offsetHeight + this.element.offsetTop,
    };
  }
  // this getter return object with mouse move range coordinates
  get mouseMoveRange() {
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
  // this getter return max length from uttermost point of element to uttermost point mouse move range
  get maxHypotenuse() {
    return this._getHypotenuse(this.radius, this.radius);
  }
  _getHypotenuse(sideX, sideY) {
    return Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2));
  }
  _getPercent({ maxDistance, currentDistance }) {
    if (currentDistance < 0) {
      currentDistance *= -1;
    }
    return Math.floor((currentDistance / maxDistance) * 100);
  }

  _isMouseMoveRange(x, y) {
    return (
      x > this.mouseMoveRange.left &&
      x < this.mouseMoveRange.right &&
      y < this.mouseMoveRange.bottom &&
      y > this.mouseMoveRange.top
    );
  }
  _checkCursorPosition(x, y) {
    if (x < this.elemPosition.left && y < this.elemPosition.top) {
      return this.positionVariants.leftTop;
    }
    if (
      x > this.elemPosition.left &&
      x < this.elemPosition.right &&
      y < this.elemPosition.top
    ) {
      return this.positionVariants.top;
    }
    if (x > this.elemPosition.right && y < this.elemPosition.top) {
      return this.positionVariants.topRight;
    }
    if (
      x > this.elemPosition.right &&
      y > this.elemPosition.top &&
      y < this.elemPosition.bottom
    ) {
      return this.positionVariants.right;
    }
    if (x > this.elemPosition.right && y > this.elemPosition.bottom) {
      return this.positionVariants.bottomRight;
    }
    if (
      x > this.elemPosition.left &&
      x < this.elemPosition.right &&
      y > this.elemPosition.bottom
    ) {
      return this.positionVariants.bottom;
    }
    if (x < this.elemPosition.left && y > this.elemPosition.bottom) {
      return this.positionVariants.bottomLeft;
    }
    if (
      x < this.elemPosition.left &&
      y > this.elemPosition.top &&
      y < this.elemPosition.bottom
    ) {
      return this.positionVariants.left;
    }
    if (
      x > this.elemPosition.left &&
      x < this.elemPosition.right &&
      y > this.elemPosition.top &&
      y < this.elemPosition.bottom
    ) {
      return this.positionVariants.center;
    }
  }
  _getDiagonalDistance({ sideX, sideY }) {
    const hypotenuse = this._getHypotenuse(sideX, sideY);
    return this._getPercent({
      maxDistance: this.maxHypotenuse,
      currentDistance: hypotenuse,
    });
  }

  init() {
    window.addEventListener("mousemove", ({ clientX: x, clientY: y }) => {
      
      if (!this._isMouseMoveRange(x, y)) return;

      switch (this._checkCursorPosition(x, y)) {
        case this.positionVariants.center: {
          this.distance = 0;
          console.log(`center  ${this.distance}`);
          break;
        }
        case this.positionVariants.leftTop: {
          this.distance = this._getDiagonalDistance({
            sideX: this.elemPosition.left - x,
            sideY: this.elemPosition.top - y,
          });
          console.log("top left " + this.distance);
          break;
        }
        case this.positionVariants.top: {
          this.distance = this._getPercent({
            maxDistance: this.radius,
            currentDistance: this.elemPosition.top - y,
          });
          console.log("top " + this.distance);
          break;
        }
        case this.positionVariants.topRight: {
          this.distance = this._getDiagonalDistance({
            sideX: this.elemPosition.right - x,
            sideY: this.elemPosition.top - y,
          });
          console.log("top right " + this.distance);
          break;
        }
        case this.positionVariants.right: {
          this.distance = this._getPercent({
            maxDistance: this.radius,
            currentDistance: this.elemPosition.right - x,
          });
          console.log("right " + this.distance);
          break;
        }
        case this.positionVariants.bottomRight: {
          this.distance = this._getDiagonalDistance({
            sideX: this.elemPosition.right - x,
            sideY: this.elemPosition.bottom - y,
          });
          console.log("bottom right " + this.distance);
          break;
        }
        case this.positionVariants.bottom: {
          this.distance = this._getPercent({
            maxDistance: this.radius,
            currentDistance: this.elemPosition.bottom - y,
          });
          console.log("bottom " + this.distance);
          break;
        }
        case this.positionVariants.bottomLeft: {
          this.distance = this._getDiagonalDistance({
            sideX: this.elemPosition.left - x,
            sideY: this.elemPosition.bottom - y,
          });
          console.log("bottom left " + this.distance);
          break;
        }
        case this.positionVariants.left: {
          this.distance = this._getPercent({
            maxDistance: this.radius,
            currentDistance: this.elemPosition.left - x,
          });
          console.log("left " + this.distance);
          break;
        }
        default:
          break;
      }
    });
  }
}
