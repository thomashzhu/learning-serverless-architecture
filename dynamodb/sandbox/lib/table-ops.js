"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
AWS.config.update({
    region: 'us-east-1',
});
const dynamodb = new AWS.DynamoDB();
// dynamodb.listTables((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// dynamodb.describeTable({
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(data, null, 2));
//   }
// });
// dynamodb.createTable({
//   AttributeDefinitions: [
//     {
//       AttributeName: 'user_id',
//       AttributeType: 'S',
//     }, {
//       AttributeName: 'timestamp',
//       AttributeType: 'N',
//     },
//   ],
//   KeySchema: [
//     {
//       AttributeName: 'user_id',
//       KeyType: 'HASH',
//     },
//     {
//       AttributeName: 'timestamp',
//       KeyType: 'RANGE',
//     },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1,
//     WriteCapacityUnits: 1,
//   },
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(data, null, 2));
//   }
// });
// dynamodb.updateTable({
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 2,
//     WriteCapacityUnits: 1,
//   },
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(data, null, 2));
//   }
// });
// dynamodb.deleteTable({
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(data, null, 2));
//   }
// });
