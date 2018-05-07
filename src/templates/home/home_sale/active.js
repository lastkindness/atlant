export default class {
    constructor () {
        this.elmTrigger = document.querySelectorAll('.home_sale_nav_item');
        this.elmCont = document.querySelectorAll('.home_sale_content_item');
        this.elmContWrapper = document.querySelector('.home_sale_content');
        this.firstImage = this.elmCont[0].querySelector('img');

        console.log();

        if (this.firstImage.complete) this.init();
        else this.firstImage.addEventListener('load', this.init.bind(this));
    }

    init () {
        const { elmTrigger, elmCont, elmContWrapper, firstImage } = this;

        console.log('init');
        elmTrigger[0].classList.add("active");
        elmCont[0].classList.add("active");
        elmCont[0].style.position = 'relative';
        elmCont[0].style.zIndex = '1';
        elmContWrapper.style.maxHeight = firstImage.offsetHeight + 'px';
        for (var i=0; i<elmTrigger.length; i++) {
            elmTrigger[i].addEventListener("click", function() {
                elmTrigger.forEach(function(item, i, elmTrigger) {
                    elmTrigger[i].classList.remove("active");
                    elmCont[i].classList.remove("active");
                    setTimeout(function () {
                        elmCont[i].style.position = 'absolute';
                        elmCont[i].style.zIndex = '-1';
                    }, 500);
                });
                // elmTrigger.indexOf = [].indexOf;
                // console.log(elmTrigger.indexOf(this));
                var thisIndex = Array.prototype.indexOf.call(elmTrigger, this);
                var itemMaxHeight = elmCont[thisIndex].querySelector('img').offsetHeight + 'px';
                elmContWrapper.style.maxHeight = itemMaxHeight;
                this.classList.add("active");
                setTimeout(function () {
                    elmCont[thisIndex].style.position = 'relative';
                    elmCont[thisIndex].style.zIndex = '1';
                    elmCont[thisIndex].classList.add("active");
                }, 500);
            }, false);
        }
    }
}