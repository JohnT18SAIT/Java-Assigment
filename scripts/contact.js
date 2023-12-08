document.addEventListener('DOMContentLoaded', function () {
    const contactPage = document.getElementById("contact-page");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const userName = document.getElementById("user-name").value.trim();
        const userEmail = document.getElementById("user-email").value.trim();
        const userMessage = document.getElementById("user-message").value.trim();

        if (userName && userEmail && userMessage) {
            contactPage.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});