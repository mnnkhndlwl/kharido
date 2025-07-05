const { ProductModel } = require("../models");
const { APIError, BadRequestError } = require("../../utils/app-errors");

//Dealing with data base operations
class ProductRepository {
  async CreateProduct(data) {
    try {
      const product = new ProductModel({ ...data });

      const productResult = await product.save();
      return productResult;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Product"
      );
    }
  }

  async Products() {
    try {
      return await ProductModel.find();
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Get Products"
      );
    }
  }

  async FindById(id) {
    try {
      return await ProductModel.findById(id);
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Product"
      );
    }
  }

  async FindByCategory(category) {
    try {
      const products = await ProductModel.find({ category: category });
      return products;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Category"
      );
    }
  }

  async SearchProductsRegex(searchRegex) {
    try {
      let result;
      result = await ProductModel.find({
        name: { $regex: searchRegex },
      }).sort({ createdAt: -1 });
      if (!result.length > 0) {
        result = await ProductModel.find({
          category: { $regex: searchRegex },
        }).sort({ createdAt: -1 });
      }
      if (!result.length > 0) {
        result = await ProductModel.find({
          subcategory: { $regex: searchRegex },
        }).sort({ createdAt: -1 });
      }
      if (!result.length > 0) {
        result = await ProductModel.find({
          brand: { $regex: searchRegex },
        }).sort({ createdAt: -1 });
      }

      console.log(result);
      return result;
    } catch (error) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Product"
      );
    }
  }

  async FindSelectedProducts(selectedIds) {
    try {
      const products = await ProductModel.find()
        .where("_id")
        .in(selectedIds.map((_id) => _id))
        .exec();
      return products;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Find Product"
      );
    }
  }
}

module.exports = ProductRepository;
