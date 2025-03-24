const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB"); // Replace with your DB name
        const collection = db.collection("users"); // Replace with your Collection name

        // Insert a document with name & age
        const newData = { name: "Ali", age: 25 };
        const result = await collection.insertOne(newData);
        console.log("Inserted Data ID:", result.insertedId);

        // Retrieve and display all documents
        const data = await collection.find({}).toArray();
        console.log("All Data in Collection:", data);
        
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
 