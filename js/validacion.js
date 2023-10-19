(function () {
    'use strict';

    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const termsCheckbox = document.getElementById('terminos');
    const termsError = document.getElementById('terminosError');
    const termsAlert = document.getElementById('terminosAlert'); // Nuevo elemento para mostrar el mensaje de alerta

    password2.addEventListener('input', function () {
        // Confirmación de contraseña
        if (password1.value !== password2.value) {
            password2.setCustomValidity('Las contraseñas no coinciden');
        } else {
            password2.setCustomValidity('');
        }
    });

    // Selección de todos los formularios con la clase 'needs-validation'
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            // Verifica si los términos y servicios están aceptados
            if (!termsCheckbox.checked) {
                termsError.style.display = 'block'; // Muestra el mensaje de error
                termsAlert.style.display = 'block'; // Muestra el mensaje de alerta
            } else {
                termsError.style.display = 'none'; // Oculta el mensaje de error
                termsAlert.style.display = 'none'; // Oculta el mensaje de alerta
            }

            form.classList.add('was-validated');
        });
    });
})();
