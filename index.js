const { MongoClient } = require('mongodb');
const drivers = [
    {
        name: "ALI AFIQ",
        vehicleType : "Sedan",
        isAvailable : true,
        rating: 4.8,
    },
    {
        name: "AFIQ ALI",
        vehicleType : "SUV",
        isAvailable : true,
        rating: 4.5,
    }
];
console.log("BEFORE UPDATE NEW NAME OF DRIVERS");
drivers.forEach((driver_name) => console.log(driver_name.name));
const count = drivers.push({name:"AKMAL", vehicleType: "SUV", isAvailable: false, rating:4.9});
console.log("");
console.log("AFTER UPDATE NEW NAME OF DRIVERS");
console.log("Number of drivers name:",count);
console.log("");
console.log("Drivers Name");
drivers.forEach((driver_name) => console.log(driver_name.name));
async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        const db = client.db("testDB");
        const driver_name = db.collection("drivers");
       //IF WANT TO DISPLAY ALL THE DRIVER NAMES SEPARATELY IN DATABASE//    
        for (const driver of drivers) {
            const result = await driver_name.insertOne(driver);
            console.log(`New driver created with result: ${result.insertedId}`);
        }

        //CODES TO UPDATE DRIVERS RATING BY 0.1 FOR AFIQ ALI//
        const update_result = await db.collection(`drivers`).updateOne(
            { name:"AFIQ ALI"},
            { $inc: {rating:0.1} }
        );
        const updated_drivers = await db.collection("drivers").find({
            name: "AFIQ ALI"
        }).toArray();
        console.log("Updated drivers:", updated_drivers);

        //CODES TO UPDATE DRIVERS RATING BY 0.1 FOR ALL THE DRIVERS//
        /*const update_result = await db.collection("drivers").updateMany(
            { name: {$in: ["AFIQ ALI","ALI AFIQ","AKMAL"]}},
            { $inc: {rating:0.1} }
        );
        const updated_drivers = await db.collection("drivers").find({
            name: "AFIQ ALI"
        }).toArray();
        console.log("Updated drivers:", updated_drivers);*/

        //CODES TO DELETE ALL THE UNAVAILABLE DRIVERS//
        const delete_result = await db.collection('drivers').deleteMany({ isAvailable: false});
        console.log("Deleted Drivers:",delete_result);

        const availableDrivers = await db.collection("drivers").find({
            isAvailable: true,
            rating: { $gte: 4.5 }
            }).toArray();
            console.log("Available drivers:", availableDrivers);

        //IF WANT TO DISPLAY ALL THE DRIVER NAMES COMBINED TOGETHER IN DATABASE//    
        //const result = await driver_name.insertOne({drivers: drivers});//

        //CODES TO FIND ALL THE AVAILABLE DRIVERS WITH RATING >= 4.5 //
        /*const availableDrivers = await db.collection("drivers").find({
            isAvailable: true,
            rating: { $gte: 4.5 }
            }).toArray();
            console.log("Available drivers:", availableDrivers);*/


    } finally 
        {
            await client.close();
        }
}main();

/*When you see [object Object] in your console output, 
it means that you're trying to display an object as a 
string. In JavaScript, when an object is coerced into
a string (for example, when using template literals like
${delete_result}), the object's default toString() method
is called. This default method returns the string 
"[object Object]", which isn't very informative*/
