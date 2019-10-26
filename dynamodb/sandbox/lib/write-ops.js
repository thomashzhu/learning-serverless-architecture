"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
AWS.config.update({
    region: 'us-east-1',
});
const documentClient = new AWS.DynamoDB.DocumentClient();
// documentClient.put({
//   Item: {
//     user_id: 'bb',
//     timestamp: 2,
//     title: 'change title',
//     content: 'change content',
//   },
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// documentClient.update({
//   ExpressionAttributeNames: {
//     '#t': 'title',
//   },
//   ExpressionAttributeValues: {
//     ':t': 'Updated title',
//   },
//   Key: {
//     user_id: 'bb',
//     timestamp: 1,
//   },
//   TableName: 'notes_sdk',
//   UpdateExpression: 'set #t = :t',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// documentClient.delete({
//   Key: {
//     user_id: 'bb',
//     timestamp: 1,
//   },
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// documentClient.batchWrite({
//   RequestItems: {
//     'notes_sdk': [
//       {
//         DeleteRequest: {
//           Key: {
//             user_id: 'bb',
//             timestamp: 2,
//           },
//         },
//       },
//       {
//         PutRequest: {
//           Item: {
//             content: 'Content 11',
//             timestamp: 1,
//             title: 'Title 11',
//             user_id: '11',
//           },
//         },
//       },
//       {
//         PutRequest: {
//           Item: {
//             content: 'Content 22',
//             timestamp: 2,
//             title: 'Title 22',
//             user_id: '22',
//           },
//         },
//       },
//     ],
//   },
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
