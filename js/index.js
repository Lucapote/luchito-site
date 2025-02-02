// Configuración del Intersection Observer
const observerOptions = {
    root: null, // usar el viewport como contenedor
    threshold: 0.2, // cuando al menos 20% del elemento es visible
    rootMargin: '0px'
};

// Callback que se ejecuta cuando los elementos son intersectados
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-visible');
            // Una vez que la animación se ejecutó, dejamos de observar el elemento
            observer.unobserve(entry.target);
        }
    });
};

// Crear el observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Seleccionar los elementos a animar
const bio = document.querySelector('.aboutMe__bio');
const estudios = document.querySelector('.aboutMe__estudios');
const logros = document.querySelector('.aboutMe__logros');

// Agregar las clases iniciales y comenzar a observar
if (bio) {
    bio.classList.add('slide-from-left');
    observer.observe(bio);
}

if (estudios) {
    estudios.classList.add('slide-from-right');
    observer.observe(estudios);
}

if (logros) {
    logros.classList.add('slide-from-left');
    observer.observe(logros);
}