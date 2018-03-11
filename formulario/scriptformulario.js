$("#botonañadir").click(adduser)
var users = [];
var usuar = {
    nombre: "",
    correo: "",
    edad: ""
};
var mensajeverif = `<div class="alert alert-success" role="alert">
Usuario verificado!!
</div>`;
var mensajeneg = `<div class="alert alert-danger" role="alert">
Datos erroneos
</div>`;
var mensajeemailrep = `<div class="alert alert-warning" role="alert">
Email repetido
</div>`;
function validarUsuario(usuario) {
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
    if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(usuario.correo.toLowerCase())) {
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
function adduser(event) {
    limpiarrojo();
   //var warning = false;
    usuar = [];
    event.preventDefault();
    var nombre = $('#name').val();
    var correo = $('#email').val();
    var edad = $('#age').val();
    formtoobj(nombre, correo, edad);
    console.log(nombre, correo, edad);
    console.log(usuar);
    console.log(comprobaremail(users, usuar));
    if (comprobaremail(users, usuar) === false) {
        if (checkerrors(validarUsuario(usuar)) === false)
        {
        dibujarcard(usuar);
        users.push(usuar);
        console.log(users);
        }
        else{
            alert("datos erroneos");
        }
    }
    else {
        //$("#first").append(mensajeemailrep);
        alert("Correo repetido");
        //warning = true;
        //console.log(warning);
    }
    /*if (warning === true){
    setInterval(eliminarWarnings,1000);
    }*/
}
/*function eliminarWarnings(){
    $(".alert alert-warning").remove();
}*/
function formtoobj(nombre, correo, edad) {
    usuar.nombre = nombre;
    usuar.correo = correo;
    usuar.edad = edad;

    return usuar;
}
function dibujarcard(usuario) {
    $("#first").append(usuarioToHTML(usuario));
    //$("#first").append(mensajeverif);
}

function usuarioToHTML(usuario) {

    return `
<div style="width: 18rem;">
    <div class="card-header" id = "cabecera">
        <p>${usuario.nombre}</p>
    </div>
    <div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Nombre</span>
                </div>
                <input value="${usuario.nombre}" type="text" class="form-control"  placeholder="Nombre" disabled>
            </div>
        </li>
        <li class="list-group-item">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Correo</span>
                </div>
                <input value="${usuario.correo}" type="text" class="form-control" placeholder="Correo" disabled>
            </div>
        </li>
        <li class="list-group-item">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Edad</span>
                </div>
                <input value="${usuario.edad}" type="text" class="form-control"  placeholder="Edad" disabled>
            </div>
        </li>
    </ul>
    </div>
</div>
`
}

function dibujarneg() {
    $("#first").prepend(mensajeneg);
}

function comprobaremail(usuario, nuevousuario) {
    var repetido = false;
    usuario.forEach(user => {

        if (user.correo === nuevousuario.correo) {
            repetido = true;
        }

    });

    return repetido
}
function checkerrors(usuario) {
    var errorcheck = false;
    usuario.errors.forEach(user => {
        console.log(user);
        if (user.code == 'name_invalid_min_max_length' || user.code == 'char_name_invalid') {
            $("#name").addClass('is-invalid');
            errorcheck = true;
        } else if (user.code == 'email_invalid_format' || user.code == "email_invalid_min_length") {
            $("#email").addClass('is-invalid');
            errorcheck = true;
        } else if (user.code == "age_invalid") {
            $("#age").addClass('is-invalid');
            errorcheck = true;
        }
    });
    console.log(errorcheck);
    return errorcheck
}
function limpiarrojo() {
    $("#name").removeClass('is-invalid');
    $("#email").removeClass('is-invalid');
    $("#age").removeClass('is-invalid');
}

