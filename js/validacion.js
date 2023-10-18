(function () {
    'use strict';

    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    password2.addEventListener("input", function () {
        // Confirmación de contraseña
        if (password1.value !== password2.value) {
            password2.classList.remove("is-valid");
            password2.classList.add("is-invalid");
            password2.setCustomValidity('Las contraseñas no coinciden');
        } else {
            password2.classList.remove("is-invalid");
            password2.classList.add("is-valid");
            password2.setCustomValidity('');
        }
    });

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();
