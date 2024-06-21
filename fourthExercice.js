function f1() {
    let pays = document.getElementById("pays").value;
    let capitale = document.getElementById("capitale").value;
    let table = document.querySelector("table");

    let newRow = document.createElement("tr");

    let colPays = document.createElement("td");
    colPays.textContent = pays.toUpperCase(); 
    colPays.style.textTransform = "uppercase"; 

    let colCapitale = document.createElement("td");
    colCapitale.textContent = capitale;
    colCapitale.style.textTransform = "capitalize"; 
    newRow.appendChild(colPays);
    newRow.appendChild(colCapitale);

    table.appendChild(newRow);
}
