export class DragComponent extends HTMLElement {
    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        // await super.connectedCallback();

        this.mouseDownHandler = this.mouseDown.bind(this);
        this.mouseUpHandler = this.mouseUp.bind(this);
        this.mouseMoveHandler = this.mouseMove.bind(this);

        this.addEventListener("mousedown", this.mouseDownHandler);
        
        requestAnimationFrame(() => {
            
        })

    }

    async disconnectedCallback(){
        this.removeEventListener("mousemove", this.mouseMoveHandler);
        this.mouseDownHandler = null;
        this.mouseUpHandler = null;
        this.mouseMoveHandler = null;
    }

    async mouseDown(event){
        if(event.target.matches(".mBox")){
            this._moveElement = event.target;
            document.addEventListener("mouseup", this.mouseUpHandler);
            document.addEventListener("mousemove", this.mouseMoveHandler);
        }
    }

    async mouseUp(event){
        this._moveElement.style.background = "#7fff00";
        this._moveElement = null;
        document.removeEventListener("mouseup", this.mouseDownHandler);
        document.removeEventListener("mousemove", this.mouseDownHandler);
    }

    async mouseMove(event){
        this._moveElement.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        console.log(this._moveElement.style.transform);
    }
}


customElements.define('drag-component', DragComponent);