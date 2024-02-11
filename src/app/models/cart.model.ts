import { Pagination } from "./pagination.model";
import { Product } from "./product.model";


export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface CartsPaginated extends Pagination {
  carts: Cart[];
}
