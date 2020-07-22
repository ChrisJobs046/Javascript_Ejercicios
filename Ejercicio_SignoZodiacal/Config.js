alert()

function validarregistropersonal(){
        var elem1 = document.getElementById("nombrepersonal");
        // ...
        if(!elem1.value){
            alert("Ingrese su Nombre");
            elem1.style.backgroundColor = "red";
            return;
        }
        // ...
        document.EnvioForPersonal.submit(); // enviamos el formulario