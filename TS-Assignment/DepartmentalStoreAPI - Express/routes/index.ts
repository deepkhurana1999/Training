import { Router } from "express";

import ProductRoutes from "./product.routes";
import CategoryRoutes from "./category.routes";
import ProductInventoryRoutes from "./productInventory.routes";
import ProductCategoryRoutes from "./productCategory.routes";
import ProductSupplierRoutes from "./productSupplier.routes";
import SupplierRoutes from "./supplier.routes";
import StaffRoutes from "./staff.routes";

export function init(router: Router) {
    ProductRoutes.initRoutes(router);
    CategoryRoutes.initRoutes(router);
    ProductInventoryRoutes.initRoutes(router);
    ProductCategoryRoutes.initRoutes(router);
    // ProductSupplierRoutes.initRoutes(router);
    // StaffRoutes.initRoutes(router);
    // SupplierRoutes.initRoutes(router);
}