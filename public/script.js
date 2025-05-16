const inputDescripcion = document.getElementById("descripcion");
const inputMonto = document.getElementById("monto");
const inputCategoria = document.getElementById("categoria");
const form = document.getElementById("form");
const listaGastos = document.getElementById("lista-gastos");
const totalGastosElement = document.getElementById("total-gastos");

let gastos = [];
let totalGastos = 0;

function actualizarTotal() {
    totalGastos = gastos.reduce((sum, gasto) => sum + gasto.monto, 0);
    totalGastosElement.textContent = `S/ ${totalGastos.toFixed(2)}`;
}

function renderizarGastos() {
    listaGastos.innerHTML = '';
    
    gastos.forEach((gasto, index) => {
        const gastoElement = document.createElement('div');
        gastoElement.className = 'border-b pb-3';
        gastoElement.innerHTML = `
            <div class="flex justify-between">
                <span class="font-medium">${gasto.descripcion}</span>
                <span class="text-red-600">S/ ${gasto.monto.toFixed(2)}</span>
            </div>
            <div class="flex justify-between text-sm text-gray-500">
                <span>${gasto.categoria}</span>
                <button onclick="eliminarGasto(${index})" class="text-red-500 hover:text-red-700">Eliminar</button>
            </div>
        `;
        listaGastos.appendChild(gastoElement);
    });
}

window.eliminarGasto = function(index) {
    gastos.splice(index, 1);
    renderizarGastos();
    actualizarTotal();
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const descripcion = inputDescripcion.value.trim();
    const monto = parseFloat(inputMonto.value);
    const categoria = inputCategoria.value.trim();
    
    if (!descripcion || isNaN(monto) || !categoria) {
        alert('Por favor completa todos los campos correctamente');
        return;
    }
    
    const nuevoGasto = {
        descripcion,
        monto,
        categoria,
        fecha: new Date().toLocaleDateString()
    };
    
    gastos.push(nuevoGasto);
    renderizarGastos();
    actualizarTotal();
    
    inputDescripcion.value = '';
    inputMonto.value = '';
    inputCategoria.value = '';
    inputDescripcion.focus();
});