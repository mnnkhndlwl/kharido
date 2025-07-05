const { CategoryRepository } = require("../database");
const { FormateData } = require("../utils");
const { APIError } = require('../utils/app-errors');

// All Business logic will be here
class CategoryService {

    constructor(){
        this.repository = new CategoryRepository();
    }

    async CreateCategory(categoryInputs){
        try{
            const categoryResult = await this.repository.CreateCategory(categoryInputs);
            return FormateData(categoryResult);
        }catch(err){
            throw new APIError('Unable to create category');
        }
    }

    async GetCategories(){
        try{
            const categories = await this.repository.Categories();
            return FormateData(categories);
        }catch(err){
            throw new APIError('Unable to fetch categories');
        }
    }

    async GetCategoryById(categoryId){
        try {
            const category = await this.repository.FindById(categoryId);
            return FormateData(category);
        } catch (err) {
            throw new APIError('Unable to fetch category by ID');
        }
    }

    async SearchCategories(searchRegex) {
        try {
            const categories = await this.repository.SearchCategoriesRegex(searchRegex);
            return FormateData(categories); 
        } catch (err) {
            throw new APIError('Unable to search categories');
        }
    }

    async UpdateCategory(categoryId, categoryData) {
        try {
            
            const updatedCategory = await this.repository.UpdateCategory(categoryId, categoryData);
            return FormateData(updatedCategory);
        } catch (err) {
            throw new APIError('Unable to update category');
        }
    }

    async DeleteCategory(categoryId) {
        try {
            const deletedCategory = await this.repository.DeleteCategory(categoryId);
            return FormateData(deletedCategory);
        } catch (err) {
            throw new APIError('Unable to delete category');
        }
    }
}

module.exports = CategoryService;
