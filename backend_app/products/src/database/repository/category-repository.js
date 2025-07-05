const { CategoryModel } = require("../models");
const { APIError, BadRequestError } = require("../../utils/app-errors");

//Dealing with data base operations
class CategoryRepository {
  async CreateCategory(data) {
    try {
      const category = new CategoryModel({ ...data });

      const categoryResult = await category.save();
      return categoryResult;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Category"
      );
    }
  }

  async Categories() {
    try {
      const ans = await CategoryModel.find();
      console.log(ans);
      return ans;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Get Categories"
      );
    }
  }

  async FindById(id) {
    try {
      return await CategoryModel.findById(id);
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Product"
      );
    }
  }

  async SearchCategoriesRegex(searchRegex) {
    try {
      let result;
      result = await CategoryModel.find({
        CategoryName: { $regex: searchRegex },
      }).sort({ createdAt: -1 });

      console.log(result);
      return result;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Category"
      );
    }
  }

  async UpdateCategory(categoryId, data) {
    try {
      // Find the category by ID and update its fields
      console.log("data update wala", data);
      const updatedCategory = await CategoryModel.findByIdAndUpdate(
        categoryId,
        {
          $set: data,
        },
        { new: true } // Return the updated category
      );

      return updatedCategory;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to update Category"
      );
    }
  }

  async DeleteCategory(categoryId) {
    try {
      // Find the category by ID and delete it
      const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
      return deletedCategory;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to delete Category"
      );
    }
  }
}

module.exports = CategoryRepository;
