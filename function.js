document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos do formulário
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    // Cria uma nova linha e adiciona os valores na tabela
    var table = document.getElementById('contactsTable');
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = phone;

    // Limpa os campos do formulário
    document.getElementById('contactForm').reset();
});