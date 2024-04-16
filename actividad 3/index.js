const cardsData = [
  {
    id: 1,
    name: "Alexi",
    content: "Conten Perruno",
    img: "./img/card-alexi.jpg",
    race: "Desconocida",
    gender: "Macho",
    weight: "10 kg",
    age: "1 año",
    health: "Saludable",
    vaccines: "Vacunas al día",
    sterilized: "Esterilizado",
  },
  { id: 2, name: "Bodom", img: "./img/card-bodom.jpg" },
  { id: 3, name: "Pola", img: "./img/card-bolt.jpg" },
  { id: 4, name: "Charly", img: "./img/card-charly.jpg" },
  { id: 5, name: "Lucio", img: "./img/card-lucio.jpg" },
  { id: 6, name: "Toño", img: "./img/card-tonio.jpg" },
];

const container = document.getElementById("cards-container");
function showDetails(id) {
  window.location.href = `./details.html?id=${id}`;
}

cardsData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${item.img}" alt="Dogo" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <button type="button" class="btn btn-primary" onclick="showDetails('${item.id}')">
            Conocer
        </button>
        
    </div>`;

  container.appendChild(card);
});
