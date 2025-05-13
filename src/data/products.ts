export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'porcelanato' | 'ceramica' | 'revestimento';
  imageUrl: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Porcelanato Marmorizado Luxo",
    description: "Porcelanato de alto brilho com aparência de mármore, ideal para salas e áreas sociais.",
    price: 89.90,
    category: "porcelanato",
    imageUrl: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Porcelanato Madeira Natural",
    description: "Porcelanato que imita madeira natural, perfeito para quem quer o charme da madeira com a durabilidade do porcelanato.",
    price: 79.90,
    category: "porcelanato",
    imageUrl: "https://images.pexels.com/photos/2883047/pexels-photo-2883047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Cerâmica Rústica Terracota",
    description: "Cerâmica com textura rústica e tons terrosos, trazendo aconchego e personalidade aos ambientes.",
    price: 45.90,
    category: "ceramica",
    imageUrl: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Revestimento 3D Geométrico",
    description: "Revestimento com efeito 3D em padrões geométricos, criando paredes com personalidade e movimento.",
    price: 69.90,
    category: "revestimento",
    imageUrl: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Porcelanato Cimento Queimado",
    description: "Porcelanato com aparência de cimento queimado, trazendo o estilo industrial para qualquer ambiente.",
    price: 75.90,
    category: "porcelanato",
    imageUrl: "https://images.pexels.com/photos/6958519/pexels-photo-6958519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    name: "Cerâmica Subway",
    description: "Cerâmica no estilo subway, clássica e versátil, perfeita para cozinhas e banheiros.",
    price: 39.90,
    category: "ceramica",
    imageUrl: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 7,
    name: "Revestimento Mosaico Vidro",
    description: "Mosaico de vidro que traz luminosidade e cor para paredes de cozinhas e banheiros.",
    price: 129.90,
    category: "revestimento",
    imageUrl: "https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 8,
    name: "Porcelanato Polido Super Brilho",
    description: "Porcelanato de alto brilho e resistência, com efeito espelhado que amplia ambientes.",
    price: 99.90,
    category: "porcelanato",
    imageUrl: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];