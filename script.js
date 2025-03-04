document.getElementById('accederBtn').addEventListener('click', function() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('celebracion').style.display = 'block';
    document.body.style.overflow = 'auto'; // Habilitar scroll solo en la pantalla de celebración
    document.getElementById('celebracion').style.overflowY = 'auto'; // Asegurar que se pueda hacer scroll en la pantalla de celebración
    startCountdown();
});

function startCountdown() {
    const countdownDate = new Date('May 10, 2025 00:00:00').getTime();
    const countdownElement = document.getElementById('countdown');
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "¡Es hora!";
        }
    }, 1000);
}

document.getElementById('hacerFormularioBtn').addEventListener('click', function() {
    const formularioURL = 'https://docs.google.com/forms/d/e/1FAIpQLSerygerAKYkTMw0pbHIVcfI0jJnf6guxj5Q9nQ3-Nu_h9RHSA/viewform?usp=header'; // Aquí pon el enlace de tu formulario de Google Forms
    window.location.href = formularioURL;
});

document.getElementById('agregarCalendarioBtn').addEventListener('click', function() {
    const event = new Date();
    const calendarEvent = {
        title: 'Celebración Cumple Javi y Salma',
        startDate: new Date('May 10, 2025 00:00:00'),
        endDate: new Date('May 10, 2025 23:59:59')
    };
    window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${calendarEvent.title}&dates=${calendarEvent.startDate.toISOString().replace(/[-:]/g, '')}/${calendarEvent.endDate.toISOString().replace(/[-:]/g, '')}`, '_blank');
});

// Asegurar que el botón "Hacer Formulario" no aparezca en la pantalla de inicio
document.getElementById('hacerFormularioBtn').style.display = 'none';

document.getElementById('celebracion').addEventListener('DOMContentLoaded', function() {
    document.getElementById('hacerFormularioBtn').style.display = 'block';
    document.getElementById('agregarCalendarioBtn').style.display = 'block';
});
