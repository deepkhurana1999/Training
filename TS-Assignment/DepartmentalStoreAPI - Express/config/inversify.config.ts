import { Container } from "inversify";

import TYPES from "../types";
import IBaseRepository from "../db/respositories/contracts/base.contract";
import BaseRepository from "../db/respositories/base.repository";
import IProductRepository from "../db/respositories/contracts/product.contract";
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
container.bind<IBaseRepository>(TYPES.BaseRepository).to(BaseRepository);
container.bind<IProductRepository>(TYPES.ProductRepository).to(ProductRepository);
container.bind<IProductService>(TYPES.ProductService).to(ProductService);
container.bind<ICategoryService>(TYPES.CategoryService).to(CategoryService);
container.bind<IStaffService>(TYPES.StaffService).to(StaffService);
container.bind<ISupplierService>(TYPES.SupplierService).to(SupplierService);

export default container;