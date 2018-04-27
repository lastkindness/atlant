export default class Trigger {
    
    constructor() {
        //Нахожу все элементы-тригеры
        this.triggers = document.querySelectorAll('[data-trigger-event]');
        //Из каждого создаю энзекпляр класса
        Array.prototype.forEach.call(this.triggers, (item) => {
            new TriggerItem(item);
        })

    }

}

class TriggerItem {

    constructor(element) {
        this.element = element;

        //Действие тригера
        this.event = element.dataset.triggerEvent;

        //Таргеты тригера
        this.target = element.dataset.triggerTarget;
        this.targetElements = document.querySelectorAll(`[data-trigger-self="${this.target}"]`);

        //Если таргет не указан - он сам себе таргет
        if (!this.target) this.targetElements = [element];

        //Если не найдены таргеты - ошибка
        if (!this.targetElements.length) console.error("No targets for", this.element)

        this.init();
    }

    init() {

        
        this.triggerTargets();
    }

    triggerTargets() {
        const { targetElements, event, element } = this;

        //Если неправильно указано событие - ошибка
        try {
            element.addEventListener(event, () => {
                //Даю каждому таргету следить за эвентом
                Array.prototype.forEach.call(targetElements, (el) => {
                    const actClass = el.dataset.triggerClass;
                    if (actClass) {
                        //Разбиваю датаклассы на масив
                        Array.prototype.forEach.call(actClass.split(' '), (cl) => {
                            //Тоглю класс
                            el.classList.toggle(cl);
                        })
                    } else {
                        console.error('No class specified at ', el);

                    }
                })
            })

        } catch (e) {
            console.error("Wrong event at" + element);

        }
    }

}