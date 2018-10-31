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
    this._doottype = null;
  }

  static get observedAttributes() { return ["doottall","dootwide","doottype"]; }

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
  get doottype() {
    return this._doottype;
  }
  set doottype(v) {
    this.doottype("doottype", v);
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
    switch (this.getAttribute("doottype")) {
    case "cat":
      imggie.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ICbyJuSmkWWpY1AQam4fUUckVAesJFLWD2IvpWGPtIcmGGSj");
      break;
    case "what":
      imggie.setAttribute("src","https://res.cloudinary.com/teepublic/image/private/s--0tZOApie--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1538519554/production/designs/3248772_0.jpg");
      break;
    case "meem":
      imggie.setAttribute("src","https://meme.xyz/uploads/posts/t/l-40168-when-someone-tells-you-you-cant-make-a-spooky-version-of-every-meme-doot.jpg");
      break;
    default:
      imggie.setAttribute("src","https://i.ytimg.com/vi/dos-hZtzUfE/maxresdefault.jpg");
      break;
    }
    
  }
}
customElements.define("much-big", Bigness);
customElements.define("rainbow-text", Rainbow);
customElements.define("spooky-doot", SpookyDoot);
