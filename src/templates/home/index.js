import SliderTop from './home_slider-top/slider';
import SliderAbout from './home_about/slider';
// import SliderTrigger from './home_sale/trigger';
import SliderActive from './home_sale/active';
import map from './home_contacts/index';
import SaleForms from './home_sale/sale-form'


export default () => {
    new SliderTop();
    new SliderAbout();
    // new SliderTrigger();
    new SliderActive();
    new map();
    new SaleForms()
}