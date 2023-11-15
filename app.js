const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const mongoURI = 'mongodb://localhost:27017/CRUD';

MongoClient.connect(mongoURI, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);

    const db = client.db('CRUD');
    const collection = db.collection('todos');

    app.get('/', (req, res) => {
        collection.find().toArray((err, todos) => {
            res.render('index', { todos });
        });
    });

    app.post('/add', (req, res) => {
        collection.insertOne({ task: req.body.task, done: false }, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        });
    });

    app.post('/toggle', (req, res) => {
        const todoId = req.body.id;
        collection.updateOne({ _id: new MongoClient.ObjectID(todoId) }, { $set: { done: true } }, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        });
    });

    app.post('/delete', (req, res) => {
        const todoId = req.body.id;
        collection.deleteOne({ _id: new MongoClient.ObjectID(todoId) }, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        });
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
