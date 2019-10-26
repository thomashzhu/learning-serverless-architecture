import * as AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient();

// documentClient.put({
//   ConditionExpression: '#t <> :t',
//   ExpressionAttributeNames: {
//     '#t': 'timestamp',
//   },
//   ExpressionAttributeValues: {
//     ':t': 1,
//   },
//   Item: {
//     content: 'New Content',
//     timestamp: 1,
//     title: 'New Title',
//     user_id: 'ABC',
//   },
//   TableName: 'notes_sdk',
// }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
