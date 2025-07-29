// Manejo de inactividad del usuario
let inactividadTimeout;

function redirigirPorInactividad() {
    window.location.href = "mensajeindex4.html";
}

function resetearInactividad() {
    // Cancelar cualquier redirección pendiente
    clearTimeout(inactividadTimeout);

    // Reiniciar el conteo de inactividad (15 segundos)
    inactividadTimeout = setTimeout(redirigirPorInactividad, 15000);
}

// Detectar eventos que implican actividad del usuario
['mousemove', 'keydown', 'touchstart', 'click'].forEach(evento => {
    document.addEventListener(evento, resetearInactividad);
});

// Iniciar por primera vez el contador
resetearInactividad();

// Simulación automática de llenado del formulario al entrar
window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('input[placeholder="Ingresa tu nombre"]').value = "Joel Lizarazu";
    document.querySelector('input[placeholder="Tu ubicación actual"]').value = "Calle Paccieri y 16 de Julio, Cochabamba";
    tipoEmergenciaSelect.value = "medica";
    descripcionTipoEmergencia.textContent = tipoEmergenciaSelect.options[tipoEmergenciaSelect.selectedIndex].text;


    // Actualizar la vista previa de descripción
    document.querySelectorAll('.description-value')[0].textContent = "Emergencia Médica";
    document.querySelectorAll('.description-value')[1].textContent = "Joel Lizarazu";
    document.querySelectorAll('.description-value')[2].textContent = "Calle Paccieri y 16 de Julio, Cochabamba";
})

// Conexión dinámica del campo select con la descripción
const tipoEmergenciaSelect = document.querySelector('select');
const descripcionTipoEmergencia = document.querySelectorAll('.description-value')[0];

tipoEmergenciaSelect.addEventListener('change', () => {
    descripcionTipoEmergencia.textContent = tipoEmergenciaSelect.options[tipoEmergenciaSelect.selectedIndex].text;
});

let stream = null;
let photoTaken = false;

// Camara encendida (encender)
window.addEventListener('load', function() {
    startCamera();
});

// Tiempo, hora
function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false  // Usa formato 24 horas
    });
    document.getElementById('footer-datetime').textContent = formatted;
}

// Actualizar fecha y hora en la descripción
function updateDescriptionDate() {
    const now = new Date();
    const formatted = now.toLocaleString('es-ES');
    document.getElementById('currentDate').textContent = formatted;
}

setInterval(updateDateTime, 1000);
updateDateTime();
updateDescriptionDate();

// Empezar cámara
async function startCamera() {
    const video = document.getElementById('video');
    const errorMsg = document.getElementById('errorMsg');

    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                width: { ideal: 343 },
                height: { ideal: 250 },
                facingMode: 'environment' // Prefer back camera
            },
            audio: false
        });

        video.srcObject = stream;
        errorMsg.style.display = 'none';

    } catch (error) {
        console.error('Error accessing camera:', error);
        errorMsg.textContent = 'Error al acceder a la cámara: ' + error.message;
        errorMsg.style.display = 'block';
    }
}

// Tomar foto
document.getElementById('snapBtn').addEventListener('click', function() {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const capturedPhoto = document.getElementById('capturedPhoto');
    const snapBtn = document.getElementById('snapBtn');
    const retakeBtn = document.getElementById('retakeBtn');

    // Tamaño del canvas igual al video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Dibujar el video en el canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convertir el canvas a imagen
    const imageDataURL = canvas.toDataURL('image/png');
    capturedPhoto.src = imageDataURL;
    capturedPhoto.style.display = 'block';

    // Ocultar video y mostrar foto
    video.style.display = 'none';
    snapBtn.style.display = 'none';
    retakeBtn.style.display = 'block';
    photoTaken = true;

    // Terminar el stream de la cámara
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
});

// Retomar foto
document.getElementById('retakeBtn').addEventListener('click', function() {
    const video = document.getElementById('video');
    const capturedPhoto = document.getElementById('capturedPhoto');
    const snapBtn = document.getElementById('snapBtn');
    const retakeBtn = document.getElementById('retakeBtn');

    // Ocultar la foto capturada y mostrar el video
    capturedPhoto.style.display = 'none';
    video.style.display = 'block';
    snapBtn.style.display = 'block';
    retakeBtn.style.display = 'none';
    photoTaken = false;

    // Reiniciar camara
    startCamera();
});
