// import "../../components/animate-bar/animate-bar.js";

// export default class Animation extends crsbinding.classes.ViewBase {
//     async connectedCallback() {
//         await super.connectedCallback();
//     }
// }

export default class AnimateBar extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
        this.container = this.element.querySelector(".container");
        console.log(this.container);
        await this.update();
        this.moveRightHandler = this.moveRight.bind(this);
        this.interval = setInterval(this.moveRightHandler, 3000);
        // this.container = this.element.querySelector(".container");
        // console.log(this.container);

        this.allChildren = this.container.getElementsByTagName('div').length;
        console.log(this.allChildren);
        

    }   

    async disconnectedCallback() {
        clearInterval(this.interval);
        this.interval = null;
        this.moveRightHandler = null;
    }


    async update() {
        const startX = -600;

        for(let i = 0; i < this.allChildren ; i++) {
            const element = this.container.children[i];
            console.log(this.container.children[i])
            element.dataset.x = startX + 400;
            element.style.translate = `${startX + i *400}px`;
        }
    }

    async moveRight() {


        let set_timeout = setTimeout(() => {
            for(let i = 0; i < this.allChildren; i++) {
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
