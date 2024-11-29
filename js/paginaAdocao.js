let cardData = [
    {
        title: 'Thor',
        description: 'Thor é extremamente enérgico e brincalhão. Ele adora explorar o ambiente e se movimentar bastante, sempre pronto para correr e brincar. Ao mesmo tempo, é protetor e leal, mostrando carinho e confiança para aqueles que cuidam dele.',
        image: '../img/dog1.jpeg',
    },
    {
        title: 'Daisy',
        description: 'Uma fonte inesgotável de energia e diversão, adora interagir com brincadeiras que deixam todos felizes.',
        image: '../img/dog2.jpeg'
    },
    {
        title: 'Simba',
        description: 'Sempre calmo e protetor, é aquele companheiro que transmite segurança e amor ao mesmo tempo.',
        image: '../img/dog3.jpeg'
    },
    {
        title: 'Chico',
        description: 'Chico é o mais animado e extrovertido. Ele é extremamente brincalhão, adora pular e chamar a atenção para interagir. Além disso, é muito carinhoso e gosta de receber abraços e cafunés, tornando-se um excelente companheiro para momentos de diversão e afeto.',
        image: '../img/dog4.jpeg'
    },
    {
        title: 'Bella',
        description: 'Bella: Cheia de energia e vitalidade, adora interagir e transmitir alegria com sua presença contagiante.',
        image: '../img/dog5.jpeg'
    },
    {
        title: 'Pretinha',
        description: 'Pretinha: é a mais carinhosa e companheira do grupo. Apesar de pequeno, ela tem energia de sobra para brincar e se divertir, sempre com o rabinho abanando. Ela gosta de atenção e está sempre por perto, pedindo carinho e espalhando alegria.',
        image: '../img/dog6.jpeg'
    },
    {
        title: 'Teddy',
        description: 'Teddy é um cão sereno e doce, que valoriza momentos de calma e proximidade. Ele é carinhoso e tem uma personalidade acolhedora, gostando de estar ao lado das pessoas que ama. Apesar de ser tranquilo, ele também aprecia momentos de brincadeira com quem confia.',
        image: '../img/dog7.jpeg'
    },
    {
        title: 'Bob',
        description: 'Bob: Curioso e esperto, está sempre pronto para descobrir algo novo e compartilhar momentos divertidos.',
        image: '../img/dog8.jpeg'
    },
    {
        title: 'Max',
        description: 'Max é calmo e sereno, mas também tem seu lado brincalhão. Ele gosta de momentos tranquilos, mas nunca perde a chance de interagir com quem ama.',
        image: '../img/dog9.jpeg'
    },
    {
        title: 'Pipoca',
        description: 'Pipoca: Apesar de ser cheia de personalidade, não resiste a um carinho e adora se sentir amada, trazendo sempre um toque especial ao ambiente.',
        image: '../img/dog10.jpeg'
    },
    {
        title: 'Marley',
        description: 'Marley: Brilhante e cheio de vivacidade, adora aprender coisas novas e estar envolvido em momentos alegres.',
        image: '../img/dog11.jpeg'
    },
    {
        title: 'Nina',
        description: 'Nina: Com seu jeito curioso e brincalhão, ama explorar e criar momentos de diversão para todos ao redor.',
        image: '../img/dog12.jpeg'
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
            <div>
                <button class="btn-redirect">
                    <img src="../img/patas.png" alt="Button 2">
                </button>
                <button class="btn-redirect">
                    <img src="../img/mao (2).png" alt="Button 1">
                </button>
            </div>
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

const readMoreBtn = document.querySelector(".vermais");
const searchInput = document.getElementById('searchInput');
const noResultsMessage = document.getElementById('noResultsMessage');
const footer = document.querySelector("#footer")

// Função para filtrar e exibir os cards com base no nome
function filterCards() {
    const query = searchInput.value.toLowerCase(); // Obtém o valor da busca em minúsculas
    let filteredData = cardData.filter(item => 
        item.title.toLowerCase().includes(query)
    );
    
    // Limpa o conteúdo dos cards antes de atualizar
    cardContainer.innerHTML = '';
    
    // Se não houver resultados, exibe a mensagem e não cria os cards
    if (filteredData.length === 0) {
        noResultsMessage.style.display = 'flex';
        noResultsMessage.style.alignItems = 'center'
        noResultsMessage.style.justifyContent = 'center'
    } else {
        noResultsMessage.style.display = 'none';
        createCards(filteredData); // Cria os cards filtrados
    }

    // Controla a visibilidade do botão "Ver Mais"
    if (filteredData.length <= 6) {
        readMoreBtn.style.display = 'none'; // Esconde o botão se houver 6 ou menos cards
    } else {
        readMoreBtn.style.display = 'block'; // Mostra o botão se houver mais de 6 cards
    }
}

// Adiciona o evento de digitação no campo de busca
searchInput.addEventListener('input', filterCards);

// Função para alternar o "Ver Mais"
readMoreBtn.addEventListener("click", (e) => {
    cardContainer.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Ver Mais") {
        readMoreBtn.innerText = "Ver Menos";
    } else {
        readMoreBtn.innerText = "Ver Mais";
    }
});