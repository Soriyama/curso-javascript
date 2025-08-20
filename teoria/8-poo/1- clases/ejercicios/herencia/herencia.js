class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = Persona.contadorPersonas++;
    }

    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `Id:${this._idPersona} Nombre: ${this._nombre} ${this._apellido} Edad: ${this._edad} `;
    }

}

class Empleado extends Persona {
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = this.idPersona.toString() + (Empleado.contadorEmpleado++).toString();

    }

    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return `${super.toString()} Id Empleado: ${this._idEmpleado} Sueldo: ${this._sueldo}`;
    }
}
class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
        this._idCliente = this.idPersona.toString() + (Cliente.contadorCliente++).toString();
    }

    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro
    }

    toString() {
        return `${super.toString()} Id Cliente: ${this._idCliente}  Fecha de registro: ${this._fechaRegistro}`;
    }
}

let empleado1 = new Empleado("Olivia", "Pampo", 25, 20000);
let cliente1 = new Cliente("Sora", "Chacan", 40);

console.log(empleado1.toString());
console.log(cliente1.toString());