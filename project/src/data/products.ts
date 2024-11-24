export const products = [
  {
    id: '1',
    name: 'Coca Cola',
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?q=80&w=800',
    category: 'sodas',
    description: 'Refresco carbonatado clásico 500ml',
    stock: 50
  },
  {
    id: '2',
    name: 'Doritos Nacho',
    price: 1.75,
    image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=800',
    category: 'snacks',
    description: 'Chips de maíz con sabor a queso 150g',
    stock: 40
  },
  {
    id: '3',
    name: 'Johnny Walker',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800',
    category: 'alcohol',
    description: 'Whisky Black Label 750ml',
    stock: 15
  }
] as const;