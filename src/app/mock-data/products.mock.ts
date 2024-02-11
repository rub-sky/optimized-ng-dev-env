import { Product, ProductsPaginated } from "../models/product.model";

export const productMock: Product = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: '',
  images: []
};

export const productCartMock: ProductsPaginated = {
  products: [
    productMock
    // 30 items
  ],

  total: 100,
  skip: 0,
  limit: 30
}
