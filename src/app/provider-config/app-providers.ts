import { AuthenticationService } from "../services/authentication.service";
import { ProductService } from "../services/product.service";
import { UserService } from "../services/user.service";

export const AuthenticationServiceProvider = {
  provide: AuthenticationService,
  useClass: AuthenticationService
}

export const ProductServiceProvider = {
  provide: ProductService,
  useClass: ProductService
};

export const UserServiceProvider = {
  provide: UserService,
  useClass: UserService
};

export const APP_PROVIDERS = [
  AuthenticationServiceProvider,
  UserServiceProvider,
  ProductServiceProvider,
];
