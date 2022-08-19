export class clickComponent extends HTMLElement{
    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        // await super.connectedCallback();

        this.mouseClickHandler = this.mouseClick.bind(this);

        this.addEventListener("click", this.mouseClickHandler);
        
        requestAnimationFrame(() => {
            
        })

    }

    async disconnectedCallback(){
        this.removeEventListener("click", this.mouseDownHandler);
        this.mouseDownHandler = null;
    }

    async mouseClick(event){
        console.log(event.target)
        if(event.target.matches(".cBox")){
        const x = 200;
        const y = 100;
        // let position = event.target
        event.target.style.transform = `translate( ${x}px, ${y}px) scale(2) rotate(360deg)`;
        event.target.style.background = "#0276C2";
        }
    }
}

customElements.define('click-component', clickComponent);