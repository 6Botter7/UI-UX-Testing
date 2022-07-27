export class Drag extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
    

        await super.connectedCallback();
        
        
        requestAnimationFrame(() => {
            this.mouseDownHandler = this.mouseDown.bind(this);
            this.mouseUpHandler = this.mouseUp.bind(this);
            this.mouseMoveHandler = this.mouseMove.bind(this);

            this.addEventListener("mousedown", this.mouseDownHandler);
        })

    }

    async disconnectedCallback(){
        this.removeEventListener("mouseDown", this.mouseDownHandler);
        this.mouseDownHandler = null;
    }

    async mouseDown(event){
        // if(event.target.matches(".mBox")){
        //     this._moveElement = event.target;
        //     document.addEventListener("mouseUp", this.mouseDownHandler);
        //     document.addEventListener("mouseMove", this.mouseDownHandler);
        // }
        if(event.target.matches(".mBox")){
            const x = 200;
            const y = 100;
            event.target.style.transform = `translate( ${x}px, ${y}px) scale(2) rotate(45deg)`;
            event.target.style.background = "#FF0090";
        }
    }

    async mouseUp(event){
        this._moveElement = null;
        document.removeEventListener("mouseUp", this.mouseDownHandler);
        document.removeEventListener("mouseMove", this.mouseDownHandler);
    }

    async mouseMove(event){
        this._moveElement.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        console.log(this._moveElement.style.transform);

    }
}


customElements.define("drag", Drag);