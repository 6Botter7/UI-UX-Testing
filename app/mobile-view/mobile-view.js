export default class Welcome extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();

        console.log("Hello world!");
        this.hamburger = this.element.querySelector(".hamburger");
        this.navMenu = this.element.querySelector(".nav-menu");

        this.hamburger.addEventListener("click", () => {
            this.hamburger.classList.toggle("active");
            this.navMenu.classList.toggle("active");
        })
    }
}