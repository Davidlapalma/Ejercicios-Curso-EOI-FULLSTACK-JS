

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email){
    console.log(email);
    emails = 0;
    if(email == "yunior.developer@hotmail.com" || email == "miguel@mrbug.es" || email == "imanol@mercadona.com")
    {
        return true
    }
    else
    {
        return false;
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email){
var longitud = email.length;
var mayusc = email.toUpperCase();
cont = 0;
var no = "";

for (i=0 ; i<=longitud ; i++)
{  
    if(email.charAt(i) == "m" || email.charAt(i) == "M")
    {
        cont++;
    }
}
if (cont == 0)
{
    cont = toString(cont)
    cont = "ninguna";
    no = "no";
}
return "El correo" + email + "tiene" + longitud + "caracteres y en mayúsculas se quedaría así" + mayusc + ". Además " + no + " contiene " + cont + " letras M";

}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email){
    console.log(email);
    longitud = email.length;
    var cont = 0;
    var no = "";
    var dominio = email.substring(email.indexOf("@")+1,longitud);
    var carac = email.indexOf("@");
    for (i=0; i<= longitud; i++)
    {
        if(email.charAt(i) == "8")
        {
             cont = cont +1;
        }
    }
    if (cont == 0)
    {
            cont = toString(cont)
            cont = "ningun/os";
            no = "no";
    }       

    return "El correo " + email + "pertenece al dominio "+ dominio + " y tiene " + carac + " caracteres sin contar el dominio ni el @. Además, el correo "+ no + " contiene "+ cont +" número[s]"; 
}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user){
    console.log(user);
    adulto = 0;
    if (user.edad>18)
    {
        adulto = 1;
    }
    else
    {
        return "El usuario " + user.nombre + " no es mayor de edad";
    }

    if (adulto == 1)
    {
        return "El usuario " + user.nombre + " es mayor de edad. Por lo tanto, le he creado un usuario con el correo " + user.correo;
    }
    
} 



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user){
    console.log(user);
    mismo = "";
    if (user.nombre==="Yunior")
    { 
        return "La persona introducida es Yunior";    
    }
    if (user.correo.indexOf("yunior") > -1 || user.edad == 24)
    {
        if (user.correo.indexOf("yunior") > -1 )
        {
           mismo = "el mismo correo";
        }
        else
        {
            mismo = "la misma edad";
        }
        return "La persona introducida pudiera ser Yunior. Ya que tiene " + mismo; 
    }
    else
    {
        return "La persona introducida no es Yunior";
    }
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////

var error = [];
var validado = true;
function ejercicio06(usuario){
    error = [];
    validado = true;
    console.log(usuario);
        //console.log(user);
    
        if (!(usuario.nombre.length >= 5 && usuario.nombre.length <= 60)) {
            validado = false;
            error.push(
                {
                    code: 'name_invalid_min_max_length',
                    text: 'nombre debe tener mínimo 5 caracteres y un máximo de 60.'
                }
            );
        }
    
    
    
        if (!/[A-Z a-z]+$/.test(usuario.nombre)) {
            validado = false;
            error.push(
                {
                    code: 'char_name_invalid',
                    text: 'Solo usa letras y espacios.'
                }
            );
        }
    
    
    
        if (!(usuario.correo.length > 7 && usuario.correo.length < 60)) {
            validado = false;
            error.push(
                {
                    code: 'email_invalid_minmax_length',
                    text: 'El correo [correo] debe contener más de 7 caracteres y menos de 60.'
    
                }
            );
        }
        if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(usuario.correo.toLowerCase())){
            validado = false;
            error.push(
                {
                    code: 'email_invalid_format',
                    text: 'El correo no contiene el formato correcto.'
    
                }
            );
       }
       
       if (!(parseInt(usuario.edad) > 5 && parseInt(usuario.edad) < 150)) {
        validado = false;
        error.push(
            {
                code: 'age_invalid',
                text: 'Edad no permitida'
            }
        );
    }

    var objeto = {
        valid: validado,
        errors: error
    }

    return objeto;

}  


/*function erroresEnEmail(usuario){
    var emails = usuario.correo.toLowerCase();
    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emails)){
         error = error.push(posiblesErrores['invalid_email_format']);
    }
    if(emails.length<7 || emails.length>60){
         error= error.push(posiblesErrores['invalid_email_minmax']);   
    }
    return error
}
function erroresEdad(usuario){
    var edades = parseInt(usuario.edad)
    if (!parseInt(edades))
    {
        error= error.push(posiblesErrores['invalid_age_format']);
    }
    if ( edades <5 || edades >150){
        error= error.push(posiblesErrores['invalid_email_minmax']);
    }
        return error
    

}*/
////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(usuarios){

    console.log(usuarios);
        var id = 0;
        var usuariosvalidos = [];
        var number=[];  
        var resultado = [];
        var error = [];
        var objErrors;
    
        usuarios.forEach(usuario => {
            if (ejercicio06(usuario).valid === true) {           
                usuario.id = id++;
                usuariosvalidos.push(usuario);
                number.push(usuario.id);                
            }
            else{
                objErrors = {
                    usuario : usuario,
                    errors : ejercicio06(usuario).errors
                }
               error.push(objErrors);
            }
        });
        //
    
        resultado = {
            item_inserted : usuariosvalidos.length,
            ids : number,
            with_errors: error,
            users_stored : usuariosvalidos
        }
    
        return resultado;
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
