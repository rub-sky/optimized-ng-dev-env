import { AuthenticationDevService } from "../services/authentication.dev-service";
import { AuthenticationService } from "../services/authentication.service";
import { ProductDevService } from "../services/product.dev-service";
import { ProductService } from "../services/product.service";
import { UserDevService } from "../services/user.dev-service";
import { UserService } from "../services/user.service";


export const AuthenticationServiceProvider = {
  provide: AuthenticationService,
  useClass: AuthenticationDevService
}

export const ProductServiceProvider = {
  provide: ProductService,
  useClass: ProductDevService
};

export const UserServiceProvider = {
  provide: UserService,
  useClass: UserDevService
};

export const APP_PROVIDERS = [
  AuthenticationServiceProvider,
  UserServiceProvider,
  ProductServiceProvider,
];