document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        //Agregamos atributo a la imagen con dataset *************
        imagen.dataset.imagenId = i;
        
        const lista = document.createElement('LI');
        lista.appendChild(imagen); 

        //Añadimos el evento a la funcion mostrarImagen() ****************
        imagen.onclick = mostrarImagen;
        
        galeria.appendChild(lista);
        
        console.log(lista);
    }
};

function mostrarImagen(e){
    const id = parseInt(e.target.dataset.imagenId);
    console.log(id);

    //Generar Imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //Cerrar overlay al hacer click
    overlay.onclick = function(){
        overlay.remove()
        body.classList.remove('fijar-body')
    }

    //Boton para cerrar imagen
    const btnCerrar = document.createElement('P');
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add('btn-cerrar');
    overlay.appendChild(btnCerrar);
    //Funcionalidad del boton
    btnCerrar.onclick = function(){
        overlay.remove();
    }

    //insertar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}