let _hamburger;
let _hamburgerOnClick;

export default class MobileMenu {
    constructor() {
        _hamburger = document.getElementById("hamburger");
    }

    init() {
        let page = document.getElementById("page");
        _hamburgerOnClick = function (e) {
            e.stopPropagation();
            page.classList.toggle("page_menu-is-active");
            hamburger.classList.toggle("is-active");
        };

        _hamburger.addEventListener('click', _hamburgerOnClick);
    }

    destroy() {
        _hamburger.removeEventListener('click', _hamburgerOnClick);
    }
}