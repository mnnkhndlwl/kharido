const CategoryService = require("../services/category-service");
const UserAuth = require("./middlewares/auth");
const { createRegex } = require("../utils/regex");

module.exports = (app) => {
  const service = new CategoryService();

  app.post("/category/create", async (req, res, next) => {
    try {
      const { CategoryName, CategoryImage, subcategory } = req.body; 

      const { data } = await service.CreateCategory({
        CategoryName,
        CategoryImage,
        subcategory,
      });

      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  app.get("/get/categories", async (req, res, next) => {
    try {
      const { data } = await service.GetCategories();
      console.log(data);
      return res.status(200).json(data);
    } catch (err) {
      console.log(err);
      next(err);
    }
  });

  app.get("/get/category/:id", async (req, res, next) => {
    const categoryId = req.params.id;

    try {
      const { data } = await service.GetCategoryById(categoryId);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  app.get("/category/search", async (req, res, next) => {
    const searchValue = req.query.q;
    const searchRegex = createRegex(searchValue);

    try {
      const { data } = await service.SearchCategories(searchRegex);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  app.put("/category/update/:id", async (req, res, next) => {
    const categoryId = req.params.id;
    const updatedData = req.body; 
    console.log(updatedData?. subcategory['eggs']?.image);
    try {
      const { data } = await service.UpdateCategory(categoryId, updatedData);
      console.log(data);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });

  app.delete("/category/:id", async (req, res, next) => {
    const categoryId = req.params.id;

    try {
      const { data } = await service.DeleteCategory(categoryId);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });
};
