document.addEventListener("DOMContentLoaded", () => {
    /**
     * Images
     */

    const shownImage = document.querySelectorAll(".product-image");
    const images = document.querySelectorAll(".product-small-image");

    images.forEach((image) => {
        image.addEventListener("click", () => {
            const style = image.currentStyle || window.getComputedStyle(image, false);
            const url = style.backgroundImage.slice(4, -1).replace(/"/g, "");
            
            shownImage.forEach((img) => {
                img.style.backgroundImage = `url(${url})`;
            });
        });
    });

    /**
     * Select
     */

    const selectionField = document.querySelector(".select-field").children;
    const randomOption = Math.floor(Math.random() * selectionField.length);

    for (let i = 0; i < selectionField.length; i++) {
        if (i === randomOption) {
            selectionField[i].selected = true;
        } else {
            selectionField[i].selected = false;
        };
    };

    /**
     * Selector
     */

    const productBoxes = document.querySelectorAll(".product-box");
    let price = 0;

    productBoxes.forEach((box) => {
        const innerBoxes = box.querySelectorAll(".product-inner");

        innerBoxes.forEach((innerBox, index) => {
            const amount = innerBox.querySelector(".amount");
            
            const minus = innerBox.querySelector(".minus");
            minus.style.userSelect = "none";

            const plus = innerBox.querySelector(".plus");
            plus.style.userSelect = "none";

            const productPrice = Number(innerBox.querySelector(".inner-product-price").innerHTML);
            const productName = innerBox.getAttribute("data-product");

            minus.addEventListener("click", () => {
                if (Number(amount.innerHTML) !== 0) {
                    amount.innerHTML = Number(amount.innerHTML) - 1;
                    Number(amount.innerHTML) === 0 ? minus.classList.add("not-active") : minus.classList.remove("not-active");
                    price = price - productPrice;
                    document.querySelector(".price").innerHTML = `$${price.toFixed(2)}`;
                    document.getElementById(productName).value = Number(amount.innerHTML);
                };

                // if (index === 0) {
                //     Number(amount.innerHTML) > 0 ? innerBoxes[1].classList.remove("closed") : innerBoxes[1].classList.add("closed");
                // };
            });

            plus.addEventListener("click", () => {
                amount.innerHTML = Number(amount.innerHTML) + 1;
                Number(amount.innerHTML) === 0 ? minus.classList.add("not-active") : minus.classList.remove("not-active");
                price = price + productPrice;
                document.querySelector(".price").innerHTML = `$${price.toFixed(2)}`;
                document.getElementById(productName).value = Number(amount.innerHTML);

                if (index === 0) {
                    Number(amount.innerHTML) > 0 ? innerBoxes[1].classList.remove("closed") : innerBoxes[1].classList.add("closed");
                };
            });
        });
    });

    /**
     * Form
     */

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (price === 0) {
            document.querySelector(".required").style.display = "block";
            document.querySelector("form").style.display = "block";
        } else {
            window.location = window.location.pathname + "/out-of-stock";
        };
    });
});