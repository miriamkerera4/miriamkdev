
function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1").value;

    if (!firstName || !lastName || !email || !exampleFormControlTextarea1) {
        alert("Please complete all required fields.");
    } else {
        alert("Form submitted successfully!");
        // Optionally submit form here
        // document.getElementById("contactForm").submit();
    }
}

