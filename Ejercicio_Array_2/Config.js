
    let carros = [1,1,3,4,4,5,6,6,7,7,7,7,8,9], repite = 1, MayorRepite = -999, i, datos;

    for(i = 0; i < 11; i++)
    {
        if(carros[i] == carros[ i + 1 ])
        repite = repite + 1;
        else{
            if( repite > MayorRepite ){
                MayorRepite = repite;
                datos = carros[i];
            }
            repite = 1;
        }

    }

    if(repite > MayorRepite ){
        MayorRepite = repite;
        datos = carros[i];
    }

    /*var unicos = carros.filter(function(item, index, array){
        return array.index.indexOf(item) === index;
    })*/

    //var carros2 = [1,2,3,3,4,5,6,6,7,8,8,9]

    //let unicos = new Set(carros);

    alert("El valor que mas se repire en el arreglo de array es el "+datos+" un total de "+ MayorRepite+" veces");



    console.log.name
    ("El valor que mas se repire en el arreglo de array es el "+datos+" un total de "+ MayorRepite+" veces");

    for(i = 0; i < 12; i++)
    console.log(carros[i] + "");

    alert(console.log.name);

    //const array = Array.from({length: 5}, ()=> '4')

 