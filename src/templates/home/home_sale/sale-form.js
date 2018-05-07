import data from './points'

export default class {
    constructor() {
        this.data = data;
        this.form = document.querySelector('#popup_sale')
        this.elements = document.querySelectorAll('[data-tab]')
        if(this.form) this.init()
    }

    init () {
        let {data, form, elements } = this;

        // console.log(this.data)
        // console.log(elements)

        elements.forEach( element => {
            element.addEventListener('click', this.render.bind(this, element))
        })

    }

    render (el) {
        let { data, form } = this;

        const tab = el.dataset.tab;
        const item = el.dataset.item;

        const myData = data[tab].points[item];

        const title = form.querySelector('h3');
        const area = form.querySelector('.area');
        const price = form.querySelector('.price');
        const img = form.querySelector('img');

        const imgSrc = require('./img/' + (+tab + 1) + '/' + (+item + 1) + '.png' );
        // console.log(imgSrc);

        title.innerHTML = myData.title;
        area.innerHTML = myData.area + ' м²';
        price.innerHTML = myData.price + ' у.е./м²';
        img.src = imgSrc;
    }


}