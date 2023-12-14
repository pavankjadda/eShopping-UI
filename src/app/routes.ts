import { Routes } from "@angular/router";
import { HomeComponent } from "./layouts/home/home.component";
import { UserAuthGuard } from "./guards/user-auth.guard";
import { LoginComponent } from "./core/login/login.component";
import { LogoutComponent } from "./core/logout/logout.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "logout",
    component: LogoutComponent,
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.component").then((m) => m.accountRoutes),
  },
  {
    path: "category",
    loadChildren: () =>
      import("./api/category/category.component").then((m) => m.categoryRoutes),
  },
  {
    path: "manufacturer",
    loadChildren: () =>
      import("./api/manufacturer/manufacturer.component").then(
        (m) => m.manufacturerRoutes,
      ),
  },
  {
    path: "product",
    loadChildren: () =>
      import("./api/product/product.component").then((m) => m.productRoutes),
  },
  {
    path: "order",
    loadChildren: () =>
      import("./api/order/order.component").then((m) => m.orderRoutes),
  },
  {
    path: "cart",
    loadChildren: () =>
      import("./api/cart/cart.component").then((m) => m.cartRoutes),
  },
  {
    path: "checkout",
    loadChildren: () =>
      import("./api/checkout/checkout.component").then((m) => m.checkoutRoutes),
  },
  {
    path: "address",
    loadChildren: () =>
      import("./api/address/address.component").then((m) => m.addressRoutes),
  },
  {
    path: "address_type",
    loadChildren: () =>
      import("./api/address-type/address-type.component").then(
        (m) => m.addressTypeRoutes,
      ),
  },
  {
    path: "city",
    loadChildren: () =>
      import("./api/city/city.component").then((m) => m.cityRoutes),
  },
  {
    path: "state",
    loadChildren: () =>
      import("./api/state/state.component").then((m) => m.stateRoutes),
  },
  {
    path: "country",
    loadChildren: () =>
      import("./api/country/country.component").then((m) => m.countryRoutes),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin-home/admin-home.component").then(
        (m) => m.adminRoutes,
      ),
  },
];
