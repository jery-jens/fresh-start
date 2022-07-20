document.addEventListener("DOMContentLoaded", () => {
    /**
     * Images
     */

    const shownImage = document.querySelector(".product-image");
    const images = document.querySelectorAll(".product-small-image");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            const style = image.currentStyle || window.getComputedStyle(image, false);
            const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            console.log(url);
        });
    });

    /**
     * Selector
     */
});