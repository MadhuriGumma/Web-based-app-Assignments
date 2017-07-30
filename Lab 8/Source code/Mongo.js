/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://madhurigumma:madhu2406@ds123381.mlab.com:23381/mongosample';// change it with your db credentials

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myobj = [
        {tweet_volume: '48857', Name: 'ChainedToTheRhythm'},
        {tweet_volume: '90590', Name: 'George Lopez'},
        {tweet_volume: '36103', Name: 'FelizMiercoles'},
        {tweet_volume: '42916', Name: 'wednesdaywisdom'},
        {tweet_volume: '15704', Name: 'Tara Palmer-Tomkinson'},
        {tweet_volume: '344416', Name: 'メンテ'},
        {tweet_volume: '707166', Name: 'SLAY CAMILIZERS'},
        {tweet_volume: '54061', Name: 'WORK FROM 5H'},
        {tweet_volume: '63844', Name: 'MyFirstAndLast'},
        {tweet_volume: '10481', Name: 'QuartaDetremuraSDV'},
        {tweet_volume: '28560', Name: 'HappyJohnnyDay'},
        {tweet_volume: '45624', Name: 'ShePersisted'},

    ];
    db.collection("Restaurants").insertMany(myobj, function (err, res) {
        if (err) throw err;
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection("Restaurants").find({}).toArray(function (err, result) {
        if (err) throw err;
        db.close();
        var fs = require('fs');
        var data = []
        for (i = 0; i < 10; i++) {
            var obj = {
                name: result[i].Name,
                id: result[i].Id

            }
            data.push(obj)
        }
        var newdata = [{
            "name": "Kansas City",
            "parent": "US",
            "children": data
        }
        ]
        fs.writeFile("Restaurants.json", JSON.stringify(newdata), function (err) {
                if (err) throw err;
            }
        );
    });
});