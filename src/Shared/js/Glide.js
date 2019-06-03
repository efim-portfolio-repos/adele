import GlideBase from "@glidejs/glide";
import assign from "lodash/assign";

let _glideElements;

let defaultSettings = {
    classes: {
        bulletClass: "glide__bullet"
    }
}

function bulletInit() {
    for (let i = 0; i < _glideElements.length; i++) {
        let bulletsCount = Math.ceil(_glideElements[i].querySelectorAll(`.glide__slide:not(.${this.settings.classes.cloneSlide})`).length / this.settings.perView);
        let bulletsElements = _glideElements[i].querySelectorAll('[data-glide-el="controls[nav]"]');

        for (let j = 0; j < bulletsElements.length; j++) {
            for (let k = 0; k < bulletsCount; k++) {
                bulletsElements[j].innerHTML += `<button class="${this.settings.classes.bulletClass}" data-glide-dir="=${k}"></button>`;
            }
        }
    }
}

export default class Glide extends GlideBase {
    constructor(el, settings) {
        settings = assign(defaultSettings, settings);
        super(el, settings);
        _glideElements = document.querySelectorAll(el);
    }

    mount() {
        bulletInit.call(this);
        super.mount.apply(this, arguments);
    }
}