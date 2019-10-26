import * as AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient();

// documentClient.get({
//   Key: {
//     user_id: '11',
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

// documentClient.query({
//   ExpressionAttributeValues: {
//     ':uid': 'ABC',
//   },
//   KeyConditionExpression: 'user_id = :uid',
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// documentClient.scan({
//   ExpressionAttributeValues: {
//     ':content': 'Content',
//   },
//   FilterExpression: 'content = :content',
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// documentClient.batchGet({
//   RequestItems: {
//     notes: {
//       Keys: [
//         {
//           user_id: 'k8LjjHJ3l2LL9xc',
//           timestamp: 1571998923131,
//         },
//       ],
//     },
//     notes_sdk: {
//       Keys: [
//         {
//           user_id: '11',
//           timestamp: 1,
//         },
//         {
//           user_id: '22',
//           timestamp: 2,
//         },
//       ],
//     },
//   },
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(data, null, 2));
//   }
// });
