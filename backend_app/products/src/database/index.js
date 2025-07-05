// database related modules
module.exports = {
    databaseConnection: require('./connection'),
    ProductRepository: require('./repository/product-repository'),
    CategoryRepository: require('./repository/category-repository')
}