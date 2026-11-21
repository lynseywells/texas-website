// ================================= //
// ===== GET DOCUMENT ELEMENTS ===== //
// ================================= //
const form = document.getElementById("contact-form");
const emailField = document.getElementById("email");
const confirmField = document.getElementById("confirm");

// ======================================== //
// ===== VERIFY EMAIL ADDRESSES MATCH ===== //
// ======================================== //
form.addEventListener("submit", validateEmailAddress);

function validateEmailAddress(event) {
    if (emailField.value != confirmField.value) {
        alert('Emails do not match.');
        emailField.focus();
        // prevent form from submitting if emails do not match
        event.preventDefault();
    }
}
