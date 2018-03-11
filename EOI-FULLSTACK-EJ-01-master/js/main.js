

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3){
    if((p1.age>p2.age) && (p1.age>p3.age))
    { 
        return p1.name;
    }
    else if ((p2.age>p1.age) && (p2.age>p3.age))
    {
        return p2.name;
    }
    else if ((p3.age>p1.age) && (p3.age>p2.age))
    {
        return p3.name;
    }
}
// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3){
    if(p1.email === p2.email || p1.email === p3.email || p2.email === p3.email) 
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3){
    var tuedad = prompt("Tu edad");
    edad=parseInt(tuedad);
    if ((edad>p1.age) && (edad>p2.age) && (edad>p3.age))
    {
        return true;
    }
    else{
        return false;
    }
}

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones
function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3){
    var correogmail = 0;
    //INDEXOF
    /*if((p1.email.indexOf("@gmail.com")) > 0)
    {
        correogmail = correogmail + 1;
    }
    if((p2.email.indexOf("@gmail.com")) > 0)
    {
        correogmail = correogmail + 1;
    }
    if((p3.email.indexOf("@gmail.com")) > 0)
    {
        correogmail = correogmail + 1;
    }*/
    //SEARCH
    /*if(p1.email.search("@gmail.com") != -1)
    {
        correogmail = correogmail + 1;
    }
    if(p2.email.search("@gmail.com") != -1)
    {
        correogmail = correogmail + 1;
    }
    if(p3.email.search("@gmail.com") != -1)
    {
        correogmail = correogmail + 1;
    }*/
    //SUBSTRING
    var longp1 = p1.email.length;
    var longp2 = p2.email.length;
    var longp3 = p3.email.length;

    /*var indicentp1 = longp1 - 10;
    var indicentp2 = longp2 - 10;
    var indicentp3 = longp3 - 10;

    if(p1.email.substring(indicentp1,longp1) === "@gmail.com")
    {
        correogmail = correogmail + 1;
    }
    if(p2.email.substring(indicentp2,longp2) === "@gmail.com")
    {
        correogmail = correogmail + 1;
    }
    if(p3.email.substring(indicentp3,longp3) === "@gmail.com")
    {
        correogmail = correogmail + 1;
    }*/
    if(p1.email.substring(p1.email.indexOf("@"),longp1) === "@gmail.com")
    {
        correogmail = correogmail + 1;
    }
    if(p2.email.substring(p2.email.indexOf("@"),longp2) === "@gmail.com")
    {
        correogmail = correogmail + 1;
    }
    if(p3.email.substring(p3.email.indexOf("@"),longp3) === "@gmail.com")
    {
        correogmail = correogmail + 1;
    }
    return correogmail
    
}