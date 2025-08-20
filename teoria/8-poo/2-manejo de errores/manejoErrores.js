'use strict'
// Manejo de errores en JavaScript

// try...catch
try {
    // Código que puede generar un error
    console.log('Intentando ejecutar código...');
    throw new Error('¡Algo salió mal!'); // Lanzamos un error intencionalmente
} catch (error) {
    // Capturamos el error
    console.error('Se ha producido un error:', error.message);
}
// Finalmente, siempre se ejecuta
finally {
    console.log('Bloque finally: este código siempre se ejecuta.');
}

