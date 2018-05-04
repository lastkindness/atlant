import $ from '../../../generals/jquery-pligins';

export default class {
    constructor () {
        const slider = $('.home_about_item_slider');
        const sliderFor = $('.home_about_slider-for');
        const sliderNav = $('.home_about_slider-nav');

        if (slider.length) {
            sliderFor.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: sliderNav
            });
            sliderNav.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: sliderFor,
                arrows: false,
                dots: false,
                centerMode: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
            });
        }
    }
}