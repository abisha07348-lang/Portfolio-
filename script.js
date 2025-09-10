document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get password values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords
    if(password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Success message
    document.getElementById('message').innerHTML = `
        <p>Registration Successful!</p>
        <p>Name: ${document.getElementById('fullName').value}</p>
        <p>Email: ${document.getElementById('email').value}</p>
        <p>Phone: ${document.getElementById('phone').value}</p>
        <p>Help Desk: ${document.getElementById('helpdesk').value}</p>
        <p>Address: ${document.getElementById('address').value}</p>
        <p>Gender: ${document.getElementById('gender').value}</p>
        <p>Date of Birth: ${document.getElementById('dob').value}</p>
        <p>Country: ${document.getElementById('country').value}</p>
    `;

    // Reset form after submission
    document.getElementById('registrationForm').reset();
});
