let express = require('express');
let cors = require('cors');
let mongoose = require('mongoose');
let recipe = require('./models/recipe');
let versionsRecipe = require('./models/recipeVersion');
let app = express();
mongoose.connect('mongodb://localhost:27017/storage', { useNewUrlParser : true});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));

app.get('/recipes', async function (req, res, next) {
    try {
        let recipeArr = await recipe.find({});
        res.json(recipeArr)
    }catch (e) {
        next(e)
    }
});
app.post('/add', async function (req, res, next) {
    try {
        await recipe.create(req.body);
        res.json("success")
    }catch (e) {
        next(e)
    }
});
app.post('/editRecipe', async function (req, res, next) {
    try {
        await recipe.findByIdAndUpdate(req.body.id, req.body.obj, {new : true});
        let oldRecipe = req.body.old;
        await versionsRecipe.create({
            name : oldRecipe.name,
            description : oldRecipe.description,
            id : oldRecipe._id,
            date : oldRecipe.date
        });
        res.json('success update');
    }catch (e) {
        next(e)
    }
});
app.post('/deleteRecipe',async function (req, res, next) {
    try {
        await recipe.findOneAndDelete(req.body._id);
        await versionsRecipe.deleteMany({id : req.body._id});
        console.log(await versionsRecipe.find({id : req.body._id}));
        res.json('removed!!')
    }catch (e) {
        next(e)
    }
});

app.post('/versions',async function (req, res, next) {
    try{
        console.log(await versionsRecipe.find({id : req.body._id}));
        res.json(await versionsRecipe.find({id : req.body._id}));

    }catch (e) {
        next(e)
    }

});


app.use((err, req, res, next)=>{
    res.status(500).json({
        message : err.msg,
        status : err.status
    })
});


app.listen(3000, function (err) {
    console.log('Listening...');
})
