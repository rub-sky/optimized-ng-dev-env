import { Observable } from "rxjs";
import { Product, ProductCategories, ProductsPaginated } from "../models/product.model";


export abstract class ProductServiceBase {
    public abstract getAllProductCategories(): Observable<ProductCategories>;
    public abstract getAllProducts(): Observable<ProductsPaginated>;
    public abstract getProductById(id: string): Observable<Product>;
    public abstract getProductsOfCategory(category: string): Observable<ProductsPaginated>;
    public abstract searchProducts(query: string): Observable<ProductsPaginated>;
    public abstract addProduct(newProduct: Product): Observable<Product>;
    public abstract updateProduct(newProduct: Partial<Product>): Observable<Product>;
    public abstract deleteProduct(id: number): Observable<Product>;
}
