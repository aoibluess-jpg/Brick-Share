
/* ---------------------COOKIES---------------------*/
const avisoCookies = document.createElement('div');
avisoCookies.id = 'aviso-cookies';

const parrafoCookies=document.createElement('p');
parrafoCookies.textContent='Usamos cookies para mejorar tu experiencia.'
avisoCookies.appendChild( parrafoCookies);

const bloqueBotonesCookies=document.createElement('div');

const botonAceptar=document.createElement('button');
botonAceptar.innerHTML='Aceptar';
botonAceptar.id = 'aceptar-cookies';

const botonRechazar=document.createElement('button');
botonRechazar.innerHTML='Rechazar';
botonRechazar.id = 'rechazar-cookies';

bloqueBotonesCookies.appendChild(botonAceptar);
bloqueBotonesCookies.appendChild(botonRechazar);

avisoCookies.appendChild(bloqueBotonesCookies);

botonAceptar.onclick = cookiesFuera;
botonRechazar.onclick = cookiesFuera;

function cookiesFuera() {
    avisoCookies.remove();
}
document.body.appendChild(avisoCookies);

/*--------------------------FUNCION INCLUYO MI LIBRARIA DE EMAILJS--------------------*/

   (function(){
      emailjs.init("nzXBSBVVCTjAl4sML"); // tu clave pública
   })();

/*-------------------------FUNCION ENVIO FORMULARIO DE CONTACTO-----------------------*/
document.addEventListener('DOMContentLoaded', function() { /*Me aseguro de que está cargado todos los elem del DOM, me daba error*/
  const formularioContacto = document.getElementById('contact-form'); /*Localizo el formulario*/


function funcionExito() {// Defino  la funcion exito
         alert('Correo enviado correctamente!');
        formularioContacto.reset();
}
function funcionError(error) { //Degino la funcion error
       alert('Ha ocurrido un error: ');
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
                secciones[i].classList.remove('active'); //..y las pongo inactivas todas
            }
           
            document.getElementById(seccion).classList.add('active'); //Muestro solo la elegida, el parametro es = al id

            // Cerramos el menú lateral
            document.getElementById('sidebar').classList.remove('visible');

            // Cambiamos el texto del botón del menú
            document.getElementById('menuControl').innerHTML = '☰ MOSTRAR MENÚ';
        }



/* ---------------------FUNCION ENVIAR FORMULARIO Y MOSTRAR LA IMAGEN EN LA GALERIA----------------------*/
        // Función para el formulario
function enviarFormulario(event) {
    event.preventDefault(); //Al entrar en la funcion enviarFormulario lo primero que hacemos es evitar que se recargue la página, quiero comprobar que funciona

    let nombre=document.getElementById('nombre').value;
    let titulo=document.getElementById('titulo').value;
    let categoria=document.getElementById('categoria').value;
    let descripcion=document.getElementById('descripcion').value;
    let archivoFoto=document.getElementById('archivo').files[0]; // Solo un archivo

    let reader=new FileReader(); //Creamos un lector de archivos
    reader.onload=function(event) { //event=paquete de datos del submit
        let contenedor=document.createElement('a'); // contenedor como enlace
        contenedor.href="#"; // aquí puedes enlazar a info individual
        contenedor.classList.add('creacion');

        let img=document.createElement('img'); //Creo un elemento imagen sin nada
        img.src=event.target.result; //Dicha imagen es el resultado del event target
        img.alt=titulo;

        contenedor.appendChild(img); //La imagen es hija del contenedor-enlace que hemos creado
        document.getElementById('contenedor-galeria').appendChild(contenedor); //El contenedor-enlace es hijo de nuestro contenedor real en el html
    };

    reader.readAsDataURL(archivoFoto); //Lee el archivo como un url

    alert('¡Gracias por compartir tu construcción LEGO!');
    document.getElementById('formularioCreacion').reset();
}

    

/* ---------------------FUNCION MODO NOCHE-DIA----------------------*/
        function nochedia() {
            document.body.classList.toggle('noche'); //Le añadimos al body la classList "noche", y esta tiene el css cambiado
                                                     //Al poner toggle, se activará y desactivará esta clase
             boton=document.getElementById('luna-container2')

            if (document.body.classList.contains('noche')) { //Si la classList noche está activa...
                boton.innerHTML='🌞 Modo día'; //...cambiamos el texto del botón
            } else {
                boton.innerHTML='🌙 Modo noche';
            }

        } 
    