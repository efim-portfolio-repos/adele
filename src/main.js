"use strict";

import "./main.scss";

import MobileMenu from "./Shared/js/MobileMenu";
import Glide from "./Shared/js/Glide";
import Tabs from "./Shared/js/Tabs";

let mobileMenu =  new MobileMenu();
mobileMenu.init();

let resultsSectionGlide = new Glide(".results-section_glide", {
    type: "carousel"
});
resultsSectionGlide.mount();

let testimonialsSectionGlide = new Glide(".testimonials-section_glide", {
    type: "carousel"
});
testimonialsSectionGlide.mount();
 
let ingredientsList = new Tabs();
ingredientsList.init();
