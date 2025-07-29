# PROYECTO-GOLEM
Ver mapa
# Sistema de Gestión Vecinal

Este proyecto es un sistema interactivo que permite a los usuarios registrarse, acceder a grupos vecinales, visualizar mapas interactivos de zonas, y consultar o publicar reseñas relacionadas a su comunidad. Está orientado a fomentar la organización comunitaria y mejorar la seguridad ciudadana.

---

## Funcionalidades Principales
###  Registro de Usuario
Existen tres tipos de usuarios: Usuario Normal o Turista, Usuario Vecino y Usuario Chief.
Permite a los vecinos crear una cuenta personal para interactuar con las funcionalidades extra del sistema.

- Validación de número telefónico vía SMS.
- Confirmación por notificación y redirección al inicio de sesión.

###  Acceso a Grupos Vecinales
Los usuarios vecinos pueden solicitar acceso a grupos locales y ser aprobados por un usuario "Chief".

- Verificación de pertenencia previa.
- Registro de solicitud y notificación al Chief.
- Validación y respuesta automatizada.

###  Ver Mapa Interactivo
Los usuarios pueden ver el mapa interactivo y poder ver el porcentaje de riesgo.

- Acceso a la ubicación actual.
- Mapa con representación visual de peligros por zona.
- Incluye alertas activas y puntos de reunión.

###  Ver Reseñas
Cualquier usuario puede visualizar reseñas de zonas, grupos u otros usuarios.

- Filtro por fecha o puntuación.
- Visualización de detalles.
- Posibilidad de reportar contenido.

###  Botón de Pánico
Funcionalidad para llamar servicios de emergencia.

- Disponible desde cualquier parte del sistema.
- Envía alertas a usuarios "Chief" cercanos y autoridades conectadas.
- Incluye la ubicación geográfica del incidente.
- Registro del evento para seguimiento.
- Solicitud de Servicio de Emergencia
---
## Tecnologías Utilizadas

- Lenguajes: CSS, HTML y JavaScript
- IDE: Visual Studio
- UML:    
    ○ Diagrama de casos de uso
    ○ Diagramas de clases de análisis
    ○ Diagramas de colaboración
    ○ Diagrama de clases de diseño
    ○ Diagramas de estado
    ○ Diagramas de actividades
    ○ Diagramas de secuencia
    ○ Diagrama de componentes
    ○ Diagrama de despliegue

- Localización: Uso de coordenadas GPS (simuladas)
---
## 📂 Estructura del Proyecto

📁 MapZonas
┣ 📂 css
┃ ┣ 📂 alerta1
┃ ┃ ┣ 📄 global.css
┃ ┃ ┣ 📄 style.css
┃ ┃ ┗ 📄 styleguide.css
┃ ┣ 📂 alerta2
┃ ┃ ┣ 📄 global.css
┃ ┃ ┣ 📄 style.css
┃ ┃ ┗ 📄 styleguide.css
┃ ┣ 📂 formulario
┃ ┃ ┗ 📄 style.css
┃ ┣ 📂 index
┃ ┃ ┣ 📄 global.css
┃ ┃ ┣ 📄 style.css
┃ ┃ ┗ 📄 styleguide.css
┃ ┣ 📂 menu
┃ ┃ ┗ 📄 style.css
┣ 📂 html
┃ ┣ 📄 formularioindex2.html
┃ ┣ 📄 index.html
┃ ┣ 📄 mensajeindex3.html
┃ ┣ 📄 mensajeindex4.html
┃ ┗ 📄 menu.html
┣ 📂 images
┃ ┣ 📂 alerta
┃ ┣ 📂 formulario
┃ ┣ 📂 index
┃ ┗ 📂 menu
┣ 📂 js
┃ ┗ 📄 formulario.js
📄 README.md

---
##  Consideraciones de Diseño

- **Relaciones entre casos de uso**  
  - Se emplean `<<include>>` para factorizar pasos comunes (por ejemplo, validación de usuario o registro de datos).  
  - Se utilizan `<<extend>>` para incorporar flujos opcionales o de excepción.

- **Acceso directo al botón de pánico (SOS)**  
  - El botón SOS permanece siempre visible en la barra de navegación principal, garantizando activación inmediata desde cualquier pantalla.  
  - Incluye animaciones y retroalimentación visual que confirman al usuario la recepción de la petición de emergencia.

- **Simulación de ubicación y notificaciones**  
  - En entornos de prueba, se carga un conjunto de coordenadas predefinidas para verificar el comportamiento de zonas de riesgo sin requerir GPS real. 
   
