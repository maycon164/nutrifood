import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

export default [
  {
    name: `Hamburguer`,
    value: 12.99,
    category: `fastfood`,
    status: `available`,
    image: `http://localhost:${PORT}/food.jpeg`,
  },
  {
    name: `Bolo`,
    value: 15.99,
    category: `dessert`,
    status: `available`,
    image: `http://localhost:${PORT}/bolo.jpeg`,
  },
  {
    name: `Hot Dog`,
    value: 10.99,
    category: `fastfood`,
    status: `available`,
    image: `http://localhost:${PORT}/hotdog.jpeg`,
  },
  {
    name: `Milkshake`,
    value: 9.99,
    category: `dessert`,
    status: `available`,
    image: `http://localhost:${PORT}/milkshake.jpeg`,
  },
  {
    name: `Torta de Morango`,
    value: 22.99,
    category: `dessert`,
    status: `available`,
    image: `http://localhost:${PORT}/torta.jpeg`,
  },
  {
    name: `Sorvete 4 bolas`,
    value: 12.69,
    category: `dessert`,
    status: `available`,
    image: `http://localhost:${PORT}/sorvete.jpeg`,
  },
  {
    name: `Trancoso, do G&T Bar`,
    value: 6.69,
    category: `drinks`,
    status: `available`,
    image: `http://localhost:${PORT}/trancoso.webp`,
  },
  {
    name: `Santa Rosa Tavares`,
    value: 9.69,
    category: `drinks`,
    status: `available`,
    image: `http://localhost:${PORT}/rosatavares.webp`,
  },
  {
    name: `Salada Mista`,
    value: 11.69,
    category: `salads`,
    status: `available`,
    image: `http://localhost:${PORT}/saladamista.jpeg`,
  },
  {
    name: `Gelatina Colorida`,
    value: 12.99,
    category: `dessert`,
    status: `available`,
    image: `http://localhost:${PORT}/gelatina-colorida.jpeg`,
  },
  {
    name: `Salada de Frutas`,
    value: 7.99,
    category: `dessert`,
    status: `available`,
    image: `http://localhost:${PORT}/salada-de-frutas.jpeg`,
  }
];
