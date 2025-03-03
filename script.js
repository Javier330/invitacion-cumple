document.getElementById('accederBtn').addEventListener('click', function() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('celebracion').style.display = 'block';
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
    const formularioURL = 'https://forms.gle/tu-enlace'; // Aquí pon el enlace de tu formulario de Google Forms
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
