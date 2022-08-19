import { mazeSizes } from "../maze-escape/maze-sizes.js";

export class MazeEscape extends HTMLElement {

    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        // console.log(mazeSizes)
        this.mazeSizes = [];
        for (let size in mazeSizes) {
            console.log(size)
            console.log(mazeSizes[size])
            this.mazeSizes.push(mazeSizes[size]);
            
        }
        console.log(this.mazeSizes)

        this.mouseClickHandler = this.clickBtn.bind(this);

        this.addEventListener("click", this.clickBtn);
        
        requestAnimationFrame(() => {
            
        })

    }

    async disconnectedCallback(){
        this.removeEventListener("click", this.mouseDownHandler);
        this.mouseDownHandler = null;
    }
    
    
    


    clickBtn (event) {
        console.log("Hello Mom, clicked BTN!");
        // alert("Hello Dad")
        if (event.target == this.querySelector("#submit")) {
            console.log(this.mazeSizes[0])
            console.log(this.mazeSizes[1])
            console.log(this.mazeSizes[2])
        }
        this.small = this.mazeSizes[0]
        this.medium = this.mazeSizes[1]
        this.large = this.mazeSizes[2]

        // Still not sure about this

        // this.rows = this.mazeSizes[]
        // this.columns = this.mazeSizes[]


    }


    hello() {
        alert("Hello, world!");
    }


    // funtion to start wrtiting the grid

    // function start to assign rows and grid to sizes



    }

    


    customElements.define("maze-escape", MazeEscape); 