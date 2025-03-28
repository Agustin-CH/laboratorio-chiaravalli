const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonBorrar = document.getElementById("borrar");
const resultado = document.getElementById("resultado");

botonSumar.addEventListener("click", () => {
    const valor1 = parseFloat(numero1.value) || 0;
    const valor2 = parseFloat(numero2.value) || 0;
    resultado.textContent = valor1 + valor2;
});

botonRestar.addEventListener("click", () => {
    const valor1 = parseFloat(numero1.value) || 0;
    const valor2 = parseFloat(numero2.value) || 0;
    resultado.textContent = valor1 - valor2;
});

botonBorrar.addEventListener("click", () => {
    numero1.value = "";
    numero2.value = "";
    resultado.textContent = "";
});


const botonAgregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const botonBorrarLista = document.getElementById("borrarLista");

let arrayObjetos = [];

const renderizarLista = () => {
    lista.innerHTML = "";
    arrayObjetos.forEach((objeto, index) => {
        const item = document.createElement("li");
        item.textContent = `Objeto ${index + 1}: ${JSON.stringify(objeto)}`;
        lista.appendChild(item);
    });
};

botonAgregar.addEventListener("click", () => {
    const nuevoObjeto = { id: arrayObjetos.length + 1, valor: `Elemento ${arrayObjetos.length + 1}` };
    arrayObjetos.push(nuevoObjeto); 
    renderizarLista();
});

botonBorrarLista.addEventListener("click", () => {
    if (arrayObjetos.length > 0) {
        arrayObjetos.pop();
        renderizarLista();
    }
});