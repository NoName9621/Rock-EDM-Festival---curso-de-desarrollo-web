document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    navegacionFija();
});

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a .header a');
    enlaces.forEach(function(enlace){
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            console.log(e.target.attributes.href.value);
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function navegacionFija(){
    const barra = document.querySelector('.header')
    //Registrar Intersection Observer
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else {
            barra.classList.add('fijo');
        }
    });
    //Elementos a observar
    observer.observe(document.querySelector('.sobre-festival'));
}