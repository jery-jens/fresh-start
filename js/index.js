document.addEventListener("DOMContentLoaded", () => {
    /**
     * Scroll-items
     */

    const scrollItems = document.querySelectorAll(".scroll-item");

    scrollItems.forEach((scrollItem) => {
        scrollItem.addEventListener("mouseenter", () => {
            scrollItem.classList.add("active");
        });

        scrollItem.addEventListener("mouseleave", () => {
            scrollItem.classList.remove("active");
        });
    });
});
