    //VARIABLES
    const botonMenu = document.querySelector(".iconoMenu");

    //FUNCIONES
    function cambiarSeccion(){

        const elementos = document.querySelectorAll(".navegacion_elemento");

        console.log(elementos)
        botonMenu.classList.toggle("hola")
    }

    botonMenu.addEventListener('click', function(){

        cambiarSeccion();
    });



    