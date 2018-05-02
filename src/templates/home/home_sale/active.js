export default class {
    constructor () {
        if(document.readyState === 'interactive') this.init();
        else document.addEventListener("DOMContentLoaded", this.init.bind(this));
    }

    init () {
        const elmTrigger = document.querySelectorAll('.home_sale_nav_item');
        const elmCont = document.querySelectorAll('.home_sale_content_item');
        const elmContWrapper = document.querySelector('.home_sale_content');
        const firstImage = elmCont[0].querySelector('img');
        console.log(firstImage);
        firstImage.onload = function() {
            console.log(firstImage);
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
            };
        };
    }
}