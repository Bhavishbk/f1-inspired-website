import { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'tees', name: 'Racing Tees', image: 'https://tse1.mm.bing.net/th/id/OIP.cgpppLu84mMLjjIcyKh9cgHaHa?pid=Api&P=0&h=180', isActive: false },
  { id: 'caps', name: 'Racing Caps', image: 'https://images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-2025-pinstripe-team-cap_ss5_p-202358985+u-1oyf0xjgnm9itln5q9az+v-33dziuymrfemuxaooak9.jpg?_hv=2&w=532', isActive: false },
  { id: 'accessories', name: 'Pit Accessories', image: 'https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-f1%C2%AE-lego%C2%AE-w15-race-car_ss5_p-202284778+u-riksnkqkctchbixoiz5w+v-hcakechv9dgpqiykg4rj.png?_hv=2&w=532', isActive: false },
  { id: 'limited', name: 'Limited Edition', image: 'https://f1store4.formula1.com/content/ws/all/ddefcf3a-4165-4542-a7c6-0c3dd9c4bf00__800X700.png', isActive: false },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Monaco GP Racing Tee',
    price: 89.99,
    image: 'https://f1store4.formula1.com/content/ws/all/5e270eab-f2eb-47e3-810d-dde2742fb47c__800X1080.png?w=800',
    category: 'tees',
    description: 'Premium cotton tee inspired by the legendary Monaco Grand Prix circuit.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Silverstone Speed Tee',
    price: 94.99,
    image: 'https://f1store4.formula1.com/content/ws/all/e41cbd2a-7a53-46f6-bf5f-474f60566c5c__800X700.png',
    category: 'tees',
    description: 'Racing-inspired design celebrating the home of British motorsport.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Pit Crew Performance Tee',
    price: 79.99,
    image: 'https://f1store4.formula1.com/content/ws/all/0b53fd73-e288-4209-8546-7af5847bb2e0__800X1080.png?w=800',
    category: 'tees',
    description: 'Technical fabric tee designed for maximum performance and comfort.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Formula Racing Heritage Tee',
    price: 99.99,
    image: 'https://f1store4.formula1.com/content/ws/all/151bdf9c-d237-4ca0-a762-dcd09f0f5743__1600X900.png',
    category: 'tees',
    description: 'Vintage-inspired design celebrating F1 racing heritage.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Grid Position Tee',
    price: 84.99,
    image: 'https://images.footballfanatics.com/red-bull-racing/red-bull-racing-2025-team-bomber-jacket_ss5_p-201493642+u-vz3feoawhz76w4hqignc+v-l3wbmexd37iz3pqwuzbu.jpg?_hv=2&w=400',
    category: 'tees',
    description: 'Bold graphics inspired by starting grid formations.',
    inStock: false,
  },
  {
    id: '6',
    name: 'Podium Victory Tee',
    price: 89.99,
    image: 'https://images.footballfanatics.com/red-bull-racing/red-bull-racing-max-verstappen-2024-f1%C2%AE-world-drivers-champion-poster_ss5_p-202593815+u-w8cllibrv71oiwkwoj4q+v-fxp8w31ric4yaws2tkpk.jpg?_hv=2&w=400',
    category: 'tees',
    description: 'Celebrate racing victories with this premium design.',
    inStock: true,
  }
];
