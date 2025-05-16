const inputDescripcion = document.getElementById("descripcion");
const inputMonto = document.getElementById("monto");
const inputCategoria = document.getElementById("categoria");
const btnEnviar = document.getElementById("btnEnviar");


const h2 = document.createElement('h2');






btnEnviar.addEventListener('click' ,(event)=>{
    event.preventDefault();
    h2.textContent = inputDescripcion.value
    document.body.appendChild(h2);
});

