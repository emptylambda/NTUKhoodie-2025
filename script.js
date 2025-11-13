document.addEventListener("DOMContentLoaded", () => {
    // Get all the necessary elements
    const modal = document.getElementById("survey-modal");
    const closeBtn = document.querySelector(".close-button");
    const interestButtons = document.querySelectorAll(".interest-button");
    
    // Form-specific elements
    const modalProductName = document.getElementById("modal-product-name");
    const hiddenProductNameInput = document.getElementById("product-name-input");

    // When a user clicks an "I'm interested" button
    interestButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Get the product name from the button's 'data-product' attribute
            const productName = button.getAttribute("data-product");
            
            // Populate the modal with the product name
            modalProductName.textContent = productName;
            hiddenProductNameInput.value = productName;
            
            // Show the modal
            modal.style.display = "flex";
        });
    });

    // When the user clicks the 'x' to close
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
