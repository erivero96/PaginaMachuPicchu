// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario de forma predeterminada

        // Obtener los valores de los campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const passport = document.getElementById('passport').value.trim();
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;
        const specialRequests = document.getElementById('special-requests').value.trim();

        // Validar los campos
        if (!name || !email || !phone || !passport || !checkIn || !checkOut) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Simulación de envío de datos (en un entorno real se haría una solicitud al servidor)
        console.log('Nombre:', name);
        console.log('Correo Electrónico:', email);
        console.log('Teléfono:', phone);
        console.log('Número de Pasaporte:', passport);
        console.log('Fecha de Llegada:', checkIn);
        console.log('Fecha de Salida:', checkOut);
        console.log('Solicitudes Especiales:', specialRequests);

        // Mostrar mensaje de éxito
        alert('Reserva realizada con éxito. Nos pondremos en contacto contigo pronto.');

        // Limpiar el formulario
        form.reset();
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
