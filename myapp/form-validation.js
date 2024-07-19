// form-validation.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('obituaryForm');
    form.addEventListener('submit', (event) => {
        let valid = true;

        // Clear previous errors
        clearErrors();

        // Name validation
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            showError('nameError', 'Name is required.');
            valid = false;
        }

        // Date of Birth validation
        const dob = document.getElementById('dob').value;
        if (dob === '') {
            showError('dobError', 'Date of Birth is required.');
            valid = false;
        }

        // Date of Death validation
        const dod = document.getElementById('dod').value;
        if (dod === '') {
            showError('dodError', 'Date of Death is required.');
            valid = false;
        }

        // Content validation
        const content = document.getElementById('content').value.trim();
        if (content === '') {
            showError('contentError', 'Content is required.');
            valid = false;
        }

        // Author validation
        const author = document.getElementById('author').value.trim();
        if (author === '') {
            showError('authorError', 'Author is required.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.textContent = '');
    }
});
