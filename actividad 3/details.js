const dogsData = [
  {
    id: 1,
    name: "Alexi",
    img: "./img/card-alexi.jpg",
    race: "Corgi",
    gender: "Macho",
    age: "1 año",
    vaccines: "Vacunas al día",
    sterilized: "Sí",
  },
  {
    id: 2,
    name: "Bodom",
    img: "./img/card-bodom.jpg",
    race: "Golden Retriever",
    gender: "Macho",
    age: "2 años",
    vaccines: "Vacunas al día",
    sterilized: "No",
  },
  {
    id: 3,
    name: "Pola",
    img: "./img/card-bolt.jpg",
    race: "Pastor Polaco",
    gender: "hembra",
    age: "6años",
    vaccines: "Vacunas al día",
    sterilized: "Sí",
  },
  {
    id: 4,
    name: "Charly",
    img: "./img/card-charly.jpg",
    race: "Killterry",
    gender: "Macho",
    age: "7 meses",
    vaccines: "Vacunas al día",
    sterilized: "No",
  },
  {
    id: 5,
    name: "Lucio",
    img: "./img/card-lucio.jpg",
    race: "Bulldog francés",
    gender: "Macho",
    age: "4 años",
    vaccines: "Vacunas al día",
    sterilized: "Sí",
  },
  {
    id: 6,
    name: "Toño",
    img: "./img/card-tonio.jpg",
    race: "Fusión genética",
    gender: "Macho",
    age: "6 meses",
    vaccines: "Vacunas al día",
    sterilized: "No",
  },
];

const params = new URLSearchParams(window.location.search);

const dogId = params.get("id");
const dogObj = dogsData.find((item) => item.id == dogId);

document.getElementById("dog-details").innerHTML = `
    <h1>${dogObj.name.toUpperCase()}</h1>
    <div class="dog-inner">
        <div>
            <img src="${dogObj.img}" alt="dog-img">
        </div>
        <div>
            <p>Raza: ${dogObj.race}</p>
            <p>Sexo: ${dogObj.gender}</p>
            <p>Peso: ${dogObj.weight}</p>
            <p>Edad: ${dogObj.age}</p>
            <p>Vacunas: ${dogObj.vaccines}</p>
            <p>Esterilizado: ${dogObj.sterilized}</p>
        </div>
    </div>
    <button class="btn btn-secondary mt-2"><a href="./index.html">Volver</a></button>
`;
