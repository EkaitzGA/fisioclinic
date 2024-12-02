
class WORKER_NOT_FOUND extends Error {
    constructor(){
        super("Trabajador no encontrado");
        this.status=404;
    }
}
class INVALID_EMAIL extends Error {
    constructor(){
        super("Email inválido");
        this.status=400;
    }
}
class INVALID_DATA extends Error {
    constructor(){    
        super("Datos inválidos");
        this.status=400;
    }
}
class PATIENT_NOT_FOUND extends Error {
    constructor(){
        super("Paciente no encontrado");
        this.status=404;
    }
}
class TREATMENT_NOT_FOUND extends Error {
    constructor(){
        super("Tratamiento no encontrado");
        this.status=404;
    }
}
class INVALID_ID extends Error {
    constructor(){
        super("ID inválido");
        this.status=400;
    }
}
class SESSION_NOT_FOUND extends Error {
    constructor(){
        super("Sesión no encontrada");
        this.status=404;
    }
}
class FINDALL_EMPTY extends Error {
    constructor(){
        super("No hay datos que mostrar");
        this.status=404;
    }
}


/* class CLIENT_ALREADY_EXISTS extends Error {
    constructor(){
        super("El usuario ya existe");
        this.status=409;
    }
} */

class EMAIL_ALREADY_EXISTS extends Error {
    constructor(){
        super("El email ya está en uso");
        this.status=409;
    }
}
class INVALID_CREDENTIALS extends Error{
    constructor(){
        super("Credenciales inválidas");
        this.status=400;
    }
}

/* class PASSWORDS_DONT_MATCH extends Error{
    constructor(){
        super("Las contraseñas no coinciden");
        this.status=400;
    }
} */

/* class ORDER_ALREADY_OPEN extends Error{
    constructor(){
        super("Ya existe un pedido abierto");
        this.status = 409;
    }
} */

/* class ORDER_DOESNT_EXIST extends Error {
    constructor(){
        super("No existe un pedido abierto");
        this.status = 404;
    }
} */

/* class PURSE_NOT_FOUND extends Error {
    constructor(){
        super("Bolso no encontrado");
        this.status=404;
    }
} */

class CREATE_DOESNT_WORK extends Error {
    constructor(){
        super("No se ha podido crear");
        this.status=204;
    }
}

class EMAIL_NOT_FOUND extends Error {
    constructor(){
        super("Email no encontrado");
        this.status=404;
    }
}

/* class USERNAME_NOT_FOUND extends Error {
    constructor(){
        super("Nombre de usuario no encontrado");
        this.status=404;
    }
}
 */
/* class PURCHASE_NOT_FOUND extends Error {
    constructor(){
        super("Usuario no encontrado");
        this.status=404;
    }
} */

export const errors ={
    WORKER_NOT_FOUND,
    PATIENT_NOT_FOUND,  /*  CLIENT_ALREADY_EXISTS, */
    EMAIL_ALREADY_EXISTS,
    INVALID_CREDENTIALS,
    TREATMENT_NOT_FOUND,
    SESSION_NOT_FOUND,
    INVALID_ID,
    INVALID_EMAIL,
    INVALID_DATA,
    /* PASSWORDS_DONT_MATCH,
    ORDER_ALREADY_OPEN,
    ORDER_DOESNT_EXIST,
    PURSE_NOT_FOUND, */
    FINDALL_EMPTY,
    CREATE_DOESNT_WORK,
    EMAIL_NOT_FOUND,
   /*  USERNAME_NOT_FOUND,
    PURCHASE_NOT_FOUND */
}

export default errors;