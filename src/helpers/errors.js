
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

class INVALID_DATE extends Error {
    constructor(){
        super("Fecha inválida");
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
class INCORRECT_STATUS extends Error {
    constructor(){
        super("Status inexistente");
        this.status=400;
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

class CREATE_DOESNT_WORK extends Error {
    constructor(){
        super("No se ha podido crear");
        this.status=204;
    }
}

class BLOCK_UPDATE_SESSION extends Error {
    constructor(){
        super("No se puede actualizar una sesión cerrada");
        this.status=400;
    }
}

class EMAIL_NOT_FOUND extends Error {
    constructor(){
        super("Email no encontrado");
        this.status=404;
    }
}

class INVALID_DATE_RANGE extends Error {
    constructor(){
        super("Rango de fechas inválido");
        this.status=400;
    }
}

class HISTORY_NOT_FOUND extends Error {
    constructor(){
        super("Historial no encontrado");
        this.status=404;
    }
}
class SLOTS_NOT_FOUND extends Error {
    constructor(){
        super("Horarios no encontrados");
        this.status=404;
    }
}


export const errors ={
    WORKER_NOT_FOUND,
    HISTORY_NOT_FOUND,
    PATIENT_NOT_FOUND,
    SLOTS_NOT_FOUND,
    EMAIL_ALREADY_EXISTS,
    INVALID_CREDENTIALS,
    TREATMENT_NOT_FOUND,
    SESSION_NOT_FOUND,
    INVALID_ID,
    INVALID_EMAIL,
    INVALID_DATE_RANGE,
    INVALID_DATA,
    INVALID_DATE,
    INCORRECT_STATUS,
    BLOCK_UPDATE_SESSION,
    FINDALL_EMPTY,
    CREATE_DOESNT_WORK,
    EMAIL_NOT_FOUND,

}

export default errors;