$(function(){
    $('.featured_slider').slick({
        infinite: true,       // Habilita el ciclo infinito
        speed: 3000,          // Establece la velocidad del deslizamiento (en milisegundos)
        slidesToShow: 1,      // Muestra una diapositiva a la vez
        slidesToScroll: 1,    // Desplaza una diapositiva a la vez
        cssEase: 'linear',    // Usa un easing lineal para movimiento continuo
        autoplay: true,       // Inicia el deslizamiento automáticamente
        autoplaySpeed: 0,     // Establece la velocidad de auto-reproducción
        arrows: false,        // Oculta las flechas de navegación
        dots: false           // Oculta los puntos de navegación
    });
});
