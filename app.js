const express = require('express');
const mongodb = require('mongodb');
const app = express();
const port = 3300;
const connectionString = 'mongodb://localhost:27017';
const dbName = 'CRUD';
const collectionName = 'items';

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const client = new mongodb.MongoClient(connectionString);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const data = await collection.find().toArray(); 
    res.render('index', { data });
  } catch (error) {
    console.error('Error reading from MongoDB:', error);
    return res.status(500).send('Error reading from MongoDB');
  } finally {
    client.close();
  }
});

app.post('/create', async (req, res) => {
  const client = new mongodb.MongoClient(connectionString);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne({ data: req.body.data });
  } catch (error) {
    console.error('Error inserting into MongoDB:', error);
    return res.status(500).send('Error inserting into MongoDB');
  } finally {
    client.close();
  }

  res.redirect('/');
});

app.get('/update/:id', async (req, res) => {
  const client = new mongodb.MongoClient(connectionString);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const id = new mongodb.ObjectId(req.params.id);
    const document = await collection.findOne({ _id: id });
    if (!document) {
      console.error('Document not found for ID: ' + req.params.id);
      return res.status(404).send('Document not found');
    }
    res.render('update', { document });
  } catch (error) {
    console.error('Error updating in MongoDB:', error);
    return res.status(500).send('Error updating document');
  } finally {
    client.close();
  }
});

app.post('/update/:id', async (req, res) => {
  const client = new mongodb.MongoClient(connectionString);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const id = new mongodb.ObjectId(req.params.id);
    const updateResult = await collection.updateOne({ _id: id }, { $set: { data: req.body.data } });
    if (updateResult.modifiedCount === 0) {
      console.error('No document was updated for ID: ' + req.params.id);
      return res.status(500).send('Error updating document');
    }
  } catch (error) {
    console.error('Error updating in MongoDB:', error);
    return res.status(500).send('Error updating document');
  } finally {
    client.close();
  }

  res.redirect('/');
});

app.get('/delete/:id', async (req, res) => {
  const client = new mongodb.MongoClient(connectionString);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const id = new mongodb.ObjectId(req.params.id);
    await collection.deleteOne({ _id: id });
  } catch (error) {
    console.error('Error deleting from MongoDB:', error);
    return res.status(500).send('Error deleting document');
  } finally {
    client.close();
  }

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
