

/* ---------------------COOKIES---------------------*/
document.addEventListener('DOMContentLoaded', function() {
    const cookiesModal = new bootstrap.Modal(document.getElementById('cookiesModal'), { //Bootstrap Modal= Objeto predefinido
        backdrop: 'static',
        keyboard: false
    });
    cookiesModal.show();
    
    document.getElementById('aceptarCookies').addEventListener('click', function() {
        cookiesModal.hide();
    });
    
    document.getElementById('rechazarCookies').addEventListener('click', function() {
        cookiesModal.hide();
    });
});



/*--------------------------FUNCION INCLUYO MI LIBRERIA DE EMAILJS--------------------*/
function initEmailJS() { 
    emailjs.init("nzXBSBVVCTjAl4sML"); // clave publica para recibir los mails en mi cuenta de emailjs dado que no tengo un servidor propio
}
initEmailJS(); //Llamo a la funcion

/*-------------------------FUNCION ENVIO FORMULARIO DE CONTACTO-----------------------*/
document.addEventListener('DOMContentLoaded', function() { /*Me aseguro de que está cargado todos los elem del DOM, me daba error*/
  const formularioContacto = document.getElementById('contact-form'); /*Localizo el formulario*/


    function funcionExito() {// Defino  la funcion exito
         alert('Correo enviado correctamente!');
        formularioContacto.reset();
    }
    function funcionError(error) { //Degino la funcion error
       alert('Ha ocurrido un error ');
    }

    formularioContacto.addEventListener('submit', function(event) { //FUNCIÓN SUBMIT
        event.preventDefault(); // Evito que se recargue la página al hacer el evento submit

        emailjs.sendForm('service_irpkka5', 'template_4hxp0jd', formularioContacto) //ESTA FRASE ES LA QUE ENVÍA EL FORMULARIO
        .then(funcionExito, funcionError); // Activo las funciones ya definidas tras hacer sendForm, puede dar error o exito
     });
});




/* ---------------------MOSTRAR/OCULTAR EL MENÚ---------------------*/
        let menuControl=document.getElementById('menuControl'); //Localizo el menu
        
        menuControl.addEventListener('click', //Cuando se hace click en el menu, salta la funcion...
                function() {
                    const sidebar=document.getElementById('sidebar'); //Localizo el sidebar que contiene los botones de cada apartado
            
                     if (sidebar.classList.contains('visible')) { //Si la barra lateral es visible...(Empieza siendo invisible, display none)
                         sidebar.classList.remove('visible'); //...lo invierto para que no se vean y...
                         this.innerHTML='☰ MOSTRAR MENÚ'; //...cambio el texto del menú
                     } else {
                         sidebar.classList.add('visible'); 
                        this.innerHTML='✕ OCULTAR MENÚ';
                     }
                }
            );




/* ---------------------MOSTRAR LA SECCION----------------------*/
        //Función para mostrar la sección elegida del menú (INTRO, GALERIA,CONSEJOS,CREACIONES...)
        //En el html ya he puesto los botones onclick para llamarla desde ahí cada vez que se pulsen
        function mostrarSeccion(seccion) { 
            let secciones=document.getElementsByClassName('content');
            for (let i=0; i<secciones.length; i++) { //Recorro todas las secciones...
                secciones[i].classList.remove('active'); //..y las pongo inactivas todas para que no se vean
            }
           
            document.getElementById(seccion).classList.add('active'); //Muestro solo la elegida, el parametro es = al id

            // Cerramos el menú lateral
            document.getElementById('sidebar').classList.remove('visible');

            // Cambiamos el texto del botón del menú
            document.getElementById('menuControl').innerHTML = '☰ MOSTRAR MENÚ';
        }




/* ---------------------FUNCION ENVIAR FORMULARIO Y MOSTRAR LA IMAGEN EN LA GALERIA----------------------*/
let galeriaData = [];
let i = 0;

function enviarFormulario(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let titulo = document.getElementById('titulo').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let archivoFoto = document.getElementById('archivo').files[0];

    let reader = new FileReader();
    reader.onload = function(event) {
        let contenedor = document.createElement('a');
        contenedor.href = "#";
        contenedor.classList.add('creacion');

        let img = document.createElement('img');
        img.src = event.target.result;
        img.alt = titulo;
        img.id = i; // Le doy a la imagen un ID, que va a coincidir con el ID de los datos galeriaData
        img.className = 'w-100 h-100'; //Bootstrap
        img.style.objectFit = 'cover'; //mejora

        galeriaData.push({
            id: i,
            nombre,
            titulo,
            categoria,
            descripcion,
            imagen: img.src
        });

        contenedor.appendChild(img);
        document.getElementById('contenedor-galeria').appendChild(contenedor);
        img.onclick = mostrarDetalles;

        i++;
    };

    reader.readAsDataURL(archivoFoto);
    alert('¡Gracias por compartir tu construcción LEGO!');
    document.getElementById('formularioCreacion').reset();
}

/*----------------------FUNCION DESPLIEGO UNA IMAGEN DE LA GALERIA-----------------------------*/ //NO BOOTSTRAP//
function mostrarDetalles(event) { 
    const idImagen=this.id; //La id de la imagen original, cuyo click es el evento
    data=null;
    for(let i=0;i<galeriaData.length;i++){
         if (galeriaData[i].id == idImagen) {  // si el id coincide...
            data = galeriaData[i];             // ...guardamos el objeto en data
            break;                   // salimos del bucle
        }
    }

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.display = 'flex';

    const detalle = document.createElement('div');
    detalle.classList.add('detalle');
    detalle.innerHTML = `
        <img src="${data.imagen}" alt="${data.titulo}">
        <h2>${data.titulo}</h2>
        <p><strong>Autor:</strong> ${data.nombre}</p>
        <p><strong>Categoría:</strong> ${data.categoria}</p>
        <p><strong>Descripción:</strong> ${data.descripcion}</p>
    `;
    overlay.appendChild(detalle); //DETALLE (div) es hijo de OVERLAY (otro div)
    document.body.appendChild(overlay); //OVERLAY es hijo del BODY

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) overlay.remove();
    });
}




/* ---------------------FUNCION MODO NOCHE-DIA----------------------*/
        function nochedia() {
            document.body.classList.toggle('noche'); //Le añadimos al body la classList "noche", y esta tiene el css cambiado
                                                     //Al poner toggle, se activará y desactivará esta clase
             boton=document.getElementById('luna-container2');

            if (document.body.classList.contains('noche')) { //Si la classList noche está activa...
                boton.innerHTML='🌞 Modo día'; //...cambiamos el texto del botón
            } else {
                boton.innerHTML='🌙 Modo noche';
            }

        } 
    