const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;

  await documentClient.delete({
    Key: { userId },
    TableName: tableName,
  }).promise();

  return {
    body: JSON.stringify({
      message: 'User deleted successfully',
    }),
    statusCode: 200,
  };
};