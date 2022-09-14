export class textGrid extends BindableElement {
    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        await super.connectedCallback();
    }
    
}

customElements.define("text-grid", textGrid);