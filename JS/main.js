var selectedRow = null;

function showAlert(Mensaje, clase){
    const div = document.createElement('div');
    div.clase = `alert alert-${clase}`;

    div.appendChild(document.createTextNode(Mensaje));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
}

function clearFields(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#profesion").value = "";
    document.querySelector("#edad").value = "";
}

document.querySelector("#formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const profesion = document.querySelector("#profesion").value;
    const edad = document.querySelector("#edad").value;

    if(nombre == "" || profesion == "" || edad == ""){
        showAlert("Por favor, complete todos los campos", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#listado");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${nombre}</td>
                <td>${profesion}</td>
                <td>${edad}</td>
                <td>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Estudiante agregado correctamente", "success");
            clearFields();
        }
    }
});

document.querySelector("#listado").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Estudiante eliminado correctamente", "danger");
    }
});
