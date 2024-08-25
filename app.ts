const form = document.getElementById('petForm') as HTMLFormElement;
const petGallery = document.getElementById('petGallery') as HTMLElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const petName = (document.getElementById('petName') as HTMLInputElement).value;
  const ownerName = (document.getElementById('ownerName') as HTMLInputElement).value;
  const petType = (document.getElementById('petType') as HTMLInputElement).value;
  const petPhoto = (document.getElementById('petPhoto') as HTMLInputElement).files?.[0];

  if (petPhoto) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
      // Cria o elemento HTML para o cartão do pet
      const petCard = document.createElement('div');
      petCard.className = 'petCard';

      // Define o conteúdo do cartão com os dados do pet e a imagem
      petCard.innerHTML = `
        <img src="${event.target?.result}" alt="${petName}">
        <h3>${petName} (${petType})</h3>
        <p>Dono: ${ownerName}</p>
      `;

      // Adiciona o cartão à galeria
      petGallery.appendChild(petCard);
    };

    // Lê a imagem do arquivo e a converte para uma URL base64
    reader.readAsDataURL(petPhoto);
  } else {
    alert('Por favor, envie uma foto do pet.');
  }
});