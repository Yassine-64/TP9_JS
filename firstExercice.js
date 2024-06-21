function ajouterEtudiant() {
    let nomComplet = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let matiere = document.getElementById("matiere").value;
    let note1 = parseFloat(document.getElementById("note1").value);
    let note2 = parseFloat(document.getElementById("note2").value);
    let coefficient = parseInt(document.getElementById("coefficient").value);

    if (validateNomComplet(nomComplet) && validateEmail(email) && validateMatiere(matiere) && 
        validateNote(note1) && validateNote(note2) && validateCoefficient(coefficient)) {
      
        let table = document.getElementById("etudiantsTable").getElementsByTagName("tbody")[0];
        let newRow = table.insertRow();
        let cell1 = newRow.insertCell();
        let cell2 = newRow.insertCell();
        let cell3 = newRow.insertCell();
        let cell4 = newRow.insertCell();
        let cell5 = newRow.insertCell();
        let cell6 = newRow.insertCell();
        let cell7 = newRow.insertCell();

        cell1.textContent = nomComplet;
        cell2.textContent = email;
        cell3.textContent = matiere;
        cell4.textContent = note1;
        cell5.textContent = note2;
        cell6.textContent = coefficient;
        cell7.textContent = ((note1 + note2) / 2).toFixed(2); // Calculate average

       
        document.getElementById("nom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("matiere").value = "";
        document.getElementById("note1").value = "";
        document.getElementById("note2").value = "";
        document.getElementById("coefficient").value = "";
    } else {
        alert("Veuillez saisir des données valides.");
    }
}

function validateNomComplet(nom) {
    return /^[A-Z][a-z]+ [A-Z][a-z]+$/.test(nom);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateMatiere(matiere) {
    return /^[a-zA-Z\s]+$/.test(matiere);
}

function validateNote(note) {
    return !isNaN(note) && note >= 0 && note <= 20;
}

function validateCoefficient(coefficient) {
    return !isNaN(coefficient) && coefficient > 0;
}
