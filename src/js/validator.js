export default class Validator {
  static checkOnElement(element) {
    return (
      element instanceof HTMLElement ||
      element instanceof HTMLBodyElement ||
      element instanceof HTMLBodyElement
    );
  }
  static checkOnType(arg, type) {
    return typeof arg === type;
  }
  static showError(message) {
    throw new Error(message);
  }
}
