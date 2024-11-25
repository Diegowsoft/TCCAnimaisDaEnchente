let cardData = [
    {
        title: 'Card 1',
        description: 'Descrição do Card 1',
        image: '../img/chocarro1.jpeg'
    },
    {
        title: 'Card 2',
        description: 'Descrição do Card 2',
        image: '../img/chocarro1.jpeg'
    },
    {
        title: 'Card 3',
        description: 'Descrição do Card 3',
        image: '../img/chocarro1.jpeg'
    },
    {
        title: 'Card 4',
        description: 'Descrição do Card 4',
        image: '../img/chocarro1.jpeg'
    },
    {
        title: 'Card 5',
        description: 'Descrição do Card 4',
        image: '../img/chocarro1.jpeg'
    },
    {
        title: 'Card 6',
        description: 'Descrição do Card 4',
        image: '../img/chocarro1.jpeg'
    },
];

let cardContainer = document.querySelector('.card-container');

// Função para criar os cards
function createCards(data) {
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

        // Adicionando a imagem e o overlay ao card
        card.appendChild(img);
        card.appendChild(overlay);

        // Adicionando o card ao container
        cardContainer.appendChild(card);
    });
}

// Criar os cards ao carregar a página
createCards(cardData);