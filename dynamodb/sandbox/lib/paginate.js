"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const async_1 = require("async");
const lodash_1 = require("lodash");
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();
var startKey = [];
var results = [];
var pages = 0;
async_1.doWhilst(
//iteratee
(callback) => {
    let params = {
        TableName: 'notes_sdk',
        Limit: 3
    };
    if (!lodash_1.isEmpty(startKey)) {
        params.ExclusiveStartKey = startKey;
    }
    docClient.scan(params, (err, data) => {
        if (err) {
            console.log(err);
            callback(err, {});
        }
        else {
            if (typeof data.LastEvaluatedKey !== 'undefined') {
                startKey = data.LastEvaluatedKey;
            }
            else {
                startKey = [];
            }
            if (!lodash_1.isEmpty(data.Items)) {
                results = lodash_1.union(results, data.Items);
            }
            pages++;
            callback(null, results);
        }
    });
}, 
//truth test
(results, callback) => {
    if (lodash_1.isEmpty(startKey)) {
        return callback(null, false);
        ;
    }
    else {
        return callback(null, true);
    }
}, 
//callback
(err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
        console.log("Item Count", data.length);
        console.log("Pages", pages);
    }
});
