class SempreVivaGalleryItemComponent extends HTMLElement {
    constructor() {
        super();
        this.setAttribute("class", "col-sm-6 col-lg-4 mb-4");
        this.appendChild(this.getTemplate());
    }

    getTemplate() {
        const img = document.createElement("img");
        img.setAttribute("class", "d-block w-100 shadow-1-strong rounded");
        img.setAttribute("src", this.getAttribute("src"));
        img.setAttribute("alt", this.getAttribute("alt"));

        return img;
    }
}

window.customElements.define("gallery-item", SempreVivaGalleryItemComponent);
