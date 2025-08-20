'use strict';
// Definición de las clases Producto y Orden para un sistema de ventas
class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }
    get idProducto() {

        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }
    toString() {
        return `Id Producto: ${this._idProducto} \nNombre: ${this._nombre} \nPrecio: ${this._precio}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    };

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            this._contadorProductosAgregados++;
        } else {
            console.log('No se pueden agregar más productos, máximo permitido: ' + Orden.MAX_PRODUCTOS);
        }
    }
    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden() {
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += '\n{' + producto.toString() + '}';
        }
        return `Orden: ${this._idOrden}, Total: $${this.calcularTotal()}, Productos: ${productosOrden}`;

    }
}

const producto1 = new Producto('Pantalón', 2000);
const producto2 = new Producto('Camisa', 1500);
const producto3 = new Producto('Zapatos', 3000);
const producto4 = new Producto('Sombrero', 800);
const producto5 = new Producto('Bufanda', 500);
const producto6 = new Producto('Guantes', 600);

const orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);

console.log(orden1.calcularTotal());
console.log(orden1.mostrarOrden());

const orden2 = new Orden();
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto6);
console.log(orden2.calcularTotal());
console.log(orden2.mostrarOrden());
orden2.agregarProducto(producto1); // Intentando agregar un producto más allá del límite
orden2.agregarProducto(producto2); // Intentando agregar otro producto más allá del límite
orden2.agregarProducto(producto3); // Intentando agregar otro producto más allá del límite
