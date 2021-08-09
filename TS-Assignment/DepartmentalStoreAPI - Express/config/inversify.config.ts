import { Container } from "inversify";

import TYPES from "../types";
import BaseContract from "../db/respositories/contracts/base.contract";
import BaseRepository from "../db/respositories/base.repository";
import ProductContract from "../db/respositories/contracts/product.contract";
import ProductRepository from "../db/respositories/product.repository";
import ProductService from "../services/product.service";
import IProductService from "../services/contracts/product.contract";
import SupplierService from "../services/supplier.service";
import ISupplierService from "../services/contracts/supplier.contract";
import StaffService from "../services/staff.service";
import IStaffService from "../services/contracts/staff.contract";
import CategoryService from "../services/category.service";
import ICategoryService from "../services/contracts/category.contract";


var container = new Container();
container.bind<BaseContract>(TYPES.BaseContract).to(BaseRepository);
container.bind<ProductContract>(TYPES.ProductContract).to(ProductRepository);
container.bind<IProductService>(TYPES.ProductService).to(ProductService);
container.bind<ICategoryService>(TYPES.CategoryService).to(CategoryService);
container.bind<IStaffService>(TYPES.StaffService).to(StaffService);
container.bind<ISupplierService>(TYPES.SupplierService).to(SupplierService);

export default container;