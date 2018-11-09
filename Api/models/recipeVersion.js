let mongoose = require('mongoose');
let schema = mongoose.Schema;
let RecipeVersion = new schema({
    name : String,
    description : String,
    id : String,
    date : Date
});
let model = mongoose.model('recipeVersion', RecipeVersion);
module.exports = model;