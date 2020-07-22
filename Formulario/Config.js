function valida_cedula(event, ced) {  
    var c = ced.replace(/-/g,'');  
    var cedula = c.substr(0, c.length - 1);  
    var verificador = c.substr(c.length - 1, 1);  
    var suma = 0;  
    var cedulaValida = 0;
    if(ced.length < 11) { return false; }  
    for (i=0; i < cedula.length; i++) {  
        mod = "";  
         if((i % 2) == 0){mod = 1} else {mod = 2}  
         res = cedula.substr(i,1) * mod;  
         if (res > 9) {  
              res = res.toString();  
              uno = res.substr(0,1);  
              dos = res.substr(1,1);  
              res = eval(uno) + eval(dos);  
         }  
         suma += eval(res);  
    }  
    el_numero = (10 - (suma % 10)) % 10;  
    if (el_numero == verificador && cedula.substr(0,3) != "000") {  
      cedulaValida = 1;
    }  
    else   {  
     cedulaValida = 0;
    }  
    return cedulaValida;
}

