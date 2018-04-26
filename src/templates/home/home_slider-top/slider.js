import $ from '../../../generals/jquery-pligins';

export default class {
    constructor () {
        const slider = $('.home_slider-top');

        if (slider.length) {
            slider.slick({
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
                adaptiveHeight: true
            });

        }
    }
}