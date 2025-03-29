const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("testDB");
        const collection = db.collection("users");

        // Insert a new document
        const insertResult = await collection.insertOne({ name: "Ali", age: 25 });
        console.log("Document inserted with ID:", insertResult.insertedId);

        // Retrieve the latest inserted document
        const result = await collection.findOne({ name: "Ali" }, { sort: { _id: -1 } });
        console.log("Query Result:", result);

    } catch (err) {
        console.error("Error:", err);
    } finally 
        {
            await client.close();
        }
}

main();
