export default class AnimateBar extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
        await this.update();

        this.moveRightHandler = this.moveRights.bind(this);
        this.interval = setInterval(this.moveHandler, 1000);

}

    async disconnectedCallback() {
        clearInterval(this.interval);
        this.interval = null;
        this.moveRightHandler = null;
    }


    async update() {
        const startX = -600;

        for(let i = 0; i < 4; i++) {
            const element = this.container.children[i];
            element.dataset.x = x + 400;
            element.style.translate = `${startX + i *400}px`;
        }
    }

    async moveRight() {
        let set_timeout = setTimeout(() => {
            for(let i = 0; i < 4; i++) {
                const element = this.container.children[i];
                const x = Number(element.dataset.x);
                element.dataset.x = x + 400;
                element.style.translate = `${x + 400}px`;
            }
        }, 0);
         
        let clear_timeout = setTimeout(() => {
            clearTimeout(set_timeout);
            clearTimeout(clear_timeout);
            const element = this.container.removeChild(this.container.lastElementChild);
            this.container.insertBefore(element , this.container.firstElementChild);

            element.dataset.x = -600;
            element.style.translate = "-600px";
        }, 500);
    }

}

customElements.define("animate-bar", AnimateBar);