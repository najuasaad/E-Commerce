// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
})

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})

Product.belongsToMany(Tag, {
  through: {
    model: 'product_tag',
    unique: false,
  },
  foreignKey: 'product_id',
  //as: 'tags',
})

Tag.belongsToMany(Product, {
  through: {
    model: 'product_tag',
    unique: false,
  },
  foreignKey: 'tag_id',
  //as: 'products',
})

// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: 'tag_id'
// })

// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: 'tag_id',
// })

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
