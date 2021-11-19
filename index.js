const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require("mongodb").ObjectId;
const { query } = require('express');


const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m0coh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('cycle_house');
        const productsCollection = database.collection('products');
        const bookingsCollection = database.collection('bookings');
        const reviewsCollection = database.collection('reviews');
        const usersCollection = database.collection('users');
        
        // get Api 
        app.get('/products', async (req, res) => {
            const email = req.query.email;
            const query = {email: email}
            const cursor = productsCollection.find(query);
            const cycles = await cursor.toArray();
            res.send(cycles);
        })


        // Post Api
        app.post('/products', async (req, res) => {
            const product = req.body;
            console.log('hit the post api', products);

            const result = await productsCollection.insertOne(product);
            console.log(result);
            res.json(result)
        });
 

        // get single product
        app.get('/singleProduct/:id', async (req, res) => {
            const result = await productsCollection.find({ _id: ObjectId(req.params.id) })
            .toArray();
            res.send(result[0]);
        });


        // ad service
        app.post('/addServices', async (req, res) => {
            const result = await productsCollection.insertOne(req.body);
            res.send(result);
        });

        // ad review
        app.post('/reviews', async (req, res) => {
            const result = await reviewsCollection.insertOne(req.body);
            res.send(result);
        });

        // get Api 
        app.get('/reviews', async (req, res) => {
            const cursor = reviewsCollection.find({});
            const reviews = await cursor.toArray();
            res.send(reviews);
        })

        // cofirm order
        app.post('/confirmOrder', async (req, res) => {
            const result = await bookingsCollection.insertOne(req.body);
            res.send(result);
        });


        // My orders
        app.get('/bookings', async (req, res) => {
            const cursor = bookingsCollection.find({});
            const booking = await cursor.toArray();
            res.send(booking);
        });


        /// delete order
        app.delete("/delteOrder/:id", async (req, res) => {
            const result = await bookingsCollection.deleteOne({
            _id: ObjectId(req.params.id),
            });
            res.send(result);
        });

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.json(result);
        });

        app.put('/users', async (req, res) => {
            const user = req.body;
            console.log(user)
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        });


        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        })


        app.put('/users/admin', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const updateDoc = { $set: { role: 'admin' } };
            const result = await usersCollection.updateOne(filter, updateDoc);
            res.json(result);

        });

    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req,res) => {
    res.send('Hello Cycle Riders')
})
app.listen(port, () => {
    console.log(`listening at ${port}`)
})