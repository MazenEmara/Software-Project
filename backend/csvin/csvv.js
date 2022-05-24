const fs = require("fs");
const mongodb = require("mongodb").MongoClient;
const fastcsv = require("fast-csv");
// let url = "mongodb://username:password@localhost:27017/";
let url = "mongodb+srv://ELsheikh:ELsheikh@cluster0.hehgw.mongodb.net/Rabbit_Mart?retryWrites=true&w=majority";
let stream = fs.createReadStream("./csvfile.csv");
let csvData = [];
let csvStream = fastcsv
.parse()
.on("data", function(data) {
    csvData.push({
        Product_name: data[0],
        Price: data[1],
        weight: data[2],
        description: data[3],
        quantity : data[5]
    });
    })
.on("end", function() {
    // remove the first line: header
    csvData.shift();
    console.log(csvData);
    mongodb.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) throw err;
        client
        .db("cluster0")
        .collection("product")
        .insertMany(csvData, (err, res) => {
            if (err) throw err;
            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
        });
    }
    );
});
stream.pipe(csvStream);

