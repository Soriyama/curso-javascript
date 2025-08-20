const ingresos = [
    new Ingreso('Salario', 5000),
    new Ingreso('Venta coche', 15000),
    new Ingreso('Venta bicicleta', 3000),
    new Ingreso('Venta moto', 5000)
];
const egresos = [
    new Egreso('Renta departamento', 1500),
    new Egreso('Ropa', 2000),
    new Egreso('Comida', 2500)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}


let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgresos = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentajeEgresos').innerHTML = formatoPorcentaje(porcentajeEgresos);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

let formatoMoneda = (valor) => {
    return valor.toLocaleString('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
}
let formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-ES', { style: 'percent', minimumFractionDigits: 2 });
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}
const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" >
                        <ion-icon name="close-circle-outline" onclick="eliminarIngreso('${ingreso.id}')"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
    return ingresoHTML;
}

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" >
                        <ion-icon name="close-circle-outline" onclick="eliminarEgreso('${egreso.id}')"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
    return egresoHTML;
}

const eliminarIngreso = (id) => {
    const index = ingresos.findIndex(ingreso => ingreso.id == id);
    console.log(index)
    if (index !== -1) {
        ingresos.splice(index, 1);
        cargarCabecero();
        cargarIngresos();
    }
}
const eliminarEgreso = (id) => {
    console.log("Eliminando egreso con ID:", id);
    const index = egresos.findIndex(egreso => egreso.id == id);
    console.log(index);
    if (index !== -1) {
        egresos.splice(index, 1);
        cargarCabecero();
        cargarEgresos();
    }
}

const agregarDato = () => {

    const forma = document.getElementById('forma');
    forma.addEventListener('submit', function (e) {
        e.preventDefault();
        const tipo = document.getElementById('tipo').value;
        const descripcion = document.getElementById('descripcion').value;
        const valor = document.getElementById('valor').value;
        if (descripcion !== '' && valor !== '') {
            if (tipo === 'ingreso') {
                ingresos.push(new Ingreso(descripcion, +valor)); // +valor para convertirlo en número
                cargarCabecero();
                cargarIngresos();
            } else if (tipo === 'egreso') {
                egresos.push(new Egreso(descripcion, +valor));
                cargarCabecero();
                cargarEgresos();
            }
        }
    });

}