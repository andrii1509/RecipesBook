let mongoose = require('mongoose');
let schema = mongoose.Schema;
let RecipeSchema = new schema({
    name : String,
    description : String,
    date : Date
});
let model = mongoose.model('recipe', RecipeSchema);
module.exports = model;