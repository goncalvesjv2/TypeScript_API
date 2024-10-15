import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";
import { CreateClientController } from "./controller/client/CreateClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";
import { CreateSaleController } from "./controller/sale/CreateSaleController";
import { ListSaleController } from "./controller/sale/ListSaleController";
import { UpdateSaleController } from "./controller/sale/UpdateSaleController";
import { DeleteSaleController } from "./controller/sale/DeleteSaleController";

const router = Router();
const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

const createSaleController = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSaleController();
const deleteSaleController = new DeleteSaleController();

router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);
router.put("/users/:id", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.put("/categories/:id", updateCategoryController.handle);
router.delete("/categories/:id", deleteCategoryController.handle);

router.post("/products", createProductController.handle);
router.get("/products", listProductController.handle);
router.put("/products/:id", updateProductController.handle);
router.delete("/products/:id", deleteProductController.handle);

router.post("/clients", createClientController.handle);
router.get("/clients", listClientController.handle);
router.put("/clients/:id", updateClientController.handle);
router.delete("/clients/:id", deleteClientController.handle);

router.post("/sales", createSaleController.handle);
router.get("/sales", listSaleController.handle);
router.put("/sales/:id", updateSaleController.handle);
router.delete("/sales/:id", deleteSaleController.handle);

export {router};