class Bigness extends HTMLElement {
  constructor() {
    super();
    this._bigness = null;
  }

  static get observedAttributes() { return ["bigness","colorness"]; }

  attributeChangedCallback(name, oldValue, newValue) {
    this._bigness = newValue;
    this._updateRendering();
  }
  connectedCallback() {
    this._updateRendering();
  }

  get bigness() {
    return this._bigness;
  }
  set bigness(v) {
    this.setAttribute("bigness", v);
  }

  _updateRendering() {
    this.style.fontSize = this.getAttribute("bigness");
    this.style.color = this.getAttribute("colorness");
    if (this.getAttribute("colorness") == "rainbow") {
      this.style.animationName = "rainbow";
      this.style.animationDuration = "10s";
      this.style.animationDirection = "alternate";
      this.style.animationIterationCount = "infinite";
    }
  }
}

class Rainbow extends HTMLElement {
  constructor() {
    super();
    this._speed = null;
  }

  static get observedAttributes() { return ["speed"]; }

  attributeChangedCallback(name, oldValue, newValue) {
    this._speed = newValue;
    this._updateRendering();
  }
  connectedCallback() {
    this._updateRendering();
  }

  get speed() {
    return this._speed;
  }
  set speed(v) {
    this.speed("speed", v);
  }

  _updateRendering() {
    this.style.animationName = "rainbow";
    this.style.animationDuration = "10s";
    if (this.getAttribute("speed")) {
      this.style.animationDuration = this.getAttribute("speed");
    }
    if (this.getAttribute("speed") == "seizure") {
      this.style.animationDuration = "0.032s";
    }
    this.style.animationDirection = "alternate";
    this.style.animationIterationCount = "infinite";
  }
}

class SpookyDoot extends HTMLElement {
  constructor() {
    super();
    this._doottall = null;
    this._dootwide = null;
  }

  static get observedAttributes() { return ["doottall","dootwide"]; }

  attributeChangedCallback(name, oldValue, newValue) {
    this._updateRendering();
  }
  connectedCallback() {
    this._updateRendering();
  }

  get doottall() {
    return this._doottall;
  }
  set doottall(v) {
    this.doot("doottall", v);
  }
  get dootwide() {
    return this._dootwide;
  }
  set dootwide(v) {
    this.dootwide("dootwide", v);
  }

  _updateRendering() {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
    var imggie = document.createElement("img");
    imggie.setAttribute("src","https://i.ytimg.com/vi/dos-hZtzUfE/maxresdefault.jpg");
    this.appendChild(imggie);
    if (this.getAttribute("dootwide")) {
      imggie.style.width  = this.getAttribute("dootwide");
    }
    if (this.getAttribute("doottall")) {
      imggie.style.height = this.getAttribute("doottall");
    }
  }
}
customElements.define("much-big", Bigness);
customElements.define("rainbow-text", Rainbow);
customElements.define("spooky-doot", SpookyDoot);
