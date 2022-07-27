export class clickComponent extends HTMLElement{
    async connectedCallback(){
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());

        
    }

    requestAnimationFrame(){
        this.clickHandler = this.mouseClick.bind(this);
        this.addEventListener("mouseClick", this.clickHandler);
    }

    async disconnectedCallback(){
        await this.removeEventListener("mouseClick", this.clickHandler);
        this.clickHandler = null;
    }

    mouseClick(event){
            if(event.target.matches(".header")){
            const x = 200;
            const y = 100;
            event.target.style.transform = `translate( ${x}px, ${y}px) scale(2) rotate(45deg)`;
            event.target.style.background = "#FF0090";
        }
    }
}

customElements.define('click-component', clickComponent);