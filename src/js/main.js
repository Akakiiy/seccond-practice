import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkNumInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import photosShow from "./modules/photosShow";
import accordion from "./modules/accordion";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkNumInputs('[name="name"]');
    checkNumInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter('.portfolio-menu li', '.portfolio-block', '.portfolio-no');
    photosShow('.sizes-block');
    accordion('.accordion-heading');

});