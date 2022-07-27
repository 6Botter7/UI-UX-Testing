import "../../test/drag-drop/drag-component.js";
import "../../test/click-react/click-component.js";

export default class Home extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        this.innerHTML = await fetch(import.meta.url.replace(".js", ".html")).then(result => result.text());
        await super.connectedCallback();
    }
}
