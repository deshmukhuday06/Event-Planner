// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Contact Form Validation and Submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload on form submission

    // Get form input values
    const name = document.getElementById("name").value;
    const contactNo = document.getElementById("contact-no").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate form fields
    if (!name || !contactNo || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simple email validation using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Log data for demonstration (This would be where the backend form submission happens)
    console.log({
        Name: name,
        ContactNo: contactNo,
        Email: email,
        Message: message,
    });

    // Display success message
    alert("Your message has been sent successfully!");

    // Optionally, reset the form after submission
    form.reset();
});
