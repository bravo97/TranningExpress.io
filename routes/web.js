const router = require('express').Router();
const ProductController = require('../apps/controllers/admin/Product');
const AdminController = require('../apps/controllers/admin/Admin');
const CategoryController = require('../apps/controllers/admin/Category');
const UserController = require('../apps/controllers/admin/User');

//Login
router.get("/admin/login",AdminController.getLogin);
router.post("/admin/login",AdminController.postLogin);
router.get("/admin/logout", AdminController.getlogout);
router.get("/admin/dashboard", AdminController.getDashboard);

//User
router.get("/admin/user/list", UserController.getList);
router.get("/admin/user/add", UserController.getAdd);
router.post("/admin/user/add", UserController.postAdd);
router.post("/admin/user/add", UserController.postUser);
router.get("/admin/user/edit", UserController.getEdit);
router.post("/admin/user/edit", UserController.postEdit);
router.get("/admin/user/del", UserController.getDel);

//Categoty
router.get("/admin/category/list", CategoryController.getList);
router.get("/admin/category/add", CategoryController.getAdd);
router.post("/admin/category/add", CategoryController.postAdd);
router.get("/admin/category/edit", CategoryController.getEdit);
router.get("/admin/category/del", CategoryController.getDel);

//Product
router.get("/admin/product/list", ProductController.getList);
router.get("/admin/product/add", ProductController.getAdd);
router.get("/admin/product/edit", ProductController.getEdit);
router.get("/admin/product/del", ProductController.getDel);

router.get("/test",ProductController.getTest);
router.post("/test",ProductController.postTest);

module.exports = router;