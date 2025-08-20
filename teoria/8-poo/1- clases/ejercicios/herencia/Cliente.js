class Cliente extends Persona {
    static contadorCliente = 0;
    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
        this._idCliente = this.idPersona.toString() + (Empleado.contadorCliente++).toString();
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
        return `${super.toString()} \nId Cliente: ${this._idCliente} \n Fecha de registro: ${this._fechaRegistro}`;
    }
}