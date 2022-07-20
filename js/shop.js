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
            
            shownImage.style.backgroundImage = `url(${url})`;
        });
    });

    /**
     * Selector
     */

    const productBoxes = document.querySelectorAll(".product-box");

    productBoxes.forEach((box) => {
        const innerBoxes = box.querySelectorAll(".inner-box");

        innerBoxes.forEach((innerBox, index) => {
            const amount = innerBox.querySelector(".amount");
            const minus = innerBox.querySelector(".minus");
            const plus = innerBox.querySelector(".plus");

            minus.addEventListener("click", () => {
                if (Number(amount.innerHTML) !== 0) {
                    amount.innerHTML = Number(amount.innerHTML) - 1;
                    Number(amount.innerHTML) === 0 ? minus.classList.add("not-active") : minus.classList.remove("not-active");

                    } else {

                    };
                };
            });

            plus.addEventListener("click", () => {
                amount.innerHTML = Number(amount.innerHTML) + 1;
            });
        });
    });
});