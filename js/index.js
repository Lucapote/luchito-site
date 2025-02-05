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

const galerias = document.querySelector(".layout__galleries");
const agenda = document.querySelector(".layout__agenda");

// Agregar las clases iniciales y comenzar a observar

// -------------------- Desde el costado --------------------

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

// -------------------- Desde abajo --------------------

if(galerias){
    galerias.classList.add("slide-from-bottom");
    observer.observe(galerias);
}

if(agenda){
    agenda.classList.add("slide-from-bottom");
    observer.observe(agenda);
}

// Menu Desplegable


const boton = document.querySelector(".nav__crossContainer");
const lineas = document.querySelectorAll(".nav__crossLinea");
const aside = document.querySelector(".layout__asideNav");

let cruz = false;
let visible = "aside__visible"

let esconder = ()=>{
    
    if(!cruz){
        cruz = true

        lineas.forEach((linea, index)=>{
        
            let mostrar = `clicked${index+1}`;
    
            linea.classList.add(mostrar)  
        })

        aside.classList.add(visible);
    }else{
        cruz=false;

        lineas.forEach((linea, index)=>{

            let mostrar = `clicked${index+1}`;

            linea.classList.remove(mostrar)

        })

        aside.classList.remove(visible)
    }
    
}

boton.addEventListener("click", esconder);

addEventListener("scroll", ()=>{
    lineas.forEach((linea, index)=>{
        
        let mostrar = `clicked${index+1}`;

        linea.classList.remove(mostrar)
    })

    aside.classList.remove(visible)
})