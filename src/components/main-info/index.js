export default class{
    constructor () {
        const element = document.querySelector('.main-info_index_nav ul');
        if (element) new HeaderLine(element)
    }
}

class HeaderLine{
    constructor (element) {
        this.element = element;
        this.items = this.element.querySelectorAll('li');
        this.line = this.element.querySelector('.nav__line');

        this.activeClass = 'nav__item--active'
        this.init();
    }

    init () {
        const { element, items } = this;


        this.move( items[0] );
        items.forEach( item =>  item.onmouseover = item.onmouseout = () => this.move( item ) );
    }

    move (item) {
        const { elements, items, line, activeClass } = this;

        if (event.type == 'mouseout') item = items[0];

        items.forEach( item => item.classList.remove(activeClass));
        item.classList.add(activeClass);

        const lineWidth = item.offsetWidth;
        const offset = item.offsetLeft;
        line.style.width = lineWidth + 'px';
        line.style.transform = `translateX(${offset + 'px'})`;

    }


}



