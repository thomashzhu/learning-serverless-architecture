const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;

  const data = await documentClient.get({
    Key: { userId },
    TableName: tableName,
  }).promise();

  if (data.Item) {
    return {
      body: JSON.stringify(data.Item),
      statusCode: 200,
    };
  } else {
    return {
      body: JSON.stringify({
        message: 'User not found',
      }),
      statusCode: 404,
    };
  }
};