document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0; // Índice de la diapositiva actualmente visible
    const sliderWrapper = document.querySelector('.slider-wrapper'); // Contenedor del carrusel
    const slides = document.querySelectorAll('.image-box'); // Selección de todas las imágenes en el carrusel
    const totalSlides = slides.length; // Número total de imágenes en el carrusel
    const slidesPerView = 3; // Número de diapositivas visibles en un momento dado
    const maxSlides = totalSlides - slidesPerView; // Número máximo de desplazamientos posibles

    // Función para mostrar la diapositiva actual
    function showSlide(index) {
        if (index < 0) {
            // Si el índice es negativo, volver al último conjunto visible
            currentSlide = maxSlides;
        } else if (index > maxSlides) {
            // Si el índice supera el máximo, reiniciar al inicio
            currentSlide = 0;
        } else {
            // Si el índice es válido, actualizar la diapositiva actual
            currentSlide = index;
        }

        // Calcular la traslación necesaria para mostrar la diapositiva correcta
        const translation = -(currentSlide * (100 / slidesPerView)) + '%';
        sliderWrapper.style.transform = `translateX(${translation})`;
    }

    // Función para mover las diapositivas hacia adelante o atrás
    window.moveSlide = function(step) {
        showSlide(currentSlide + step);
    };

    // Inicializar el slider mostrando la primera diapositiva
    showSlide(0);
});
