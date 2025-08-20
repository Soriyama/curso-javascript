const personas = [
    new Persona('Juan', 'Pérez'),
    new Persona('Ana', 'Gómez'),
    new Persona('Luis', 'Martínez')
];

function mostrarPersonas() {
    let texto = '';
    for (let persona of personas) {
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'].value;
    const apellido = forma['apellido'].value;
    const persona = new Persona(nombre, apellido);
    personas.push(persona);
    mostrarPersonas();
    forma.reset();


}