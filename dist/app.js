var form = document.getElementById('petForm');
var petGallery = document.getElementById('petGallery');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var petName = document.getElementById('petName').value;
    var ownerName = document.getElementById('ownerName').value;
    var petType = document.getElementById('petType').value;
    var petPhoto = (_a = document.getElementById('petPhoto').files) === null || _a === void 0 ? void 0 : _a[0];
    if (petPhoto) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            // Cria o elemento HTML para o cartão do pet
            var petCard = document.createElement('div');
            petCard.className = 'petCard';
            // Define o conteúdo do cartão com os dados do pet e a imagem
            petCard.innerHTML = "\n        <img src=\"" + ((_a = event.target) === null || _a === void 0 ? void 0 : _a.result) + "\" alt=\"" + petName + "\">\n        <h3>" + petName + " (" + petType + ")</h3>\n        <p>Dono: " + ownerName + "</p>\n      ";
            // Adiciona o cartão à galeria
            petGallery.appendChild(petCard);
        };
        // Lê a imagem do arquivo e a converte para uma URL base64
        reader.readAsDataURL(petPhoto);
    }
    else {
        alert('Por favor, envie uma foto do pet.');
    }
});
