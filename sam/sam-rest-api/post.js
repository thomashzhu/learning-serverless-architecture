const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
  const userId = event.pathParameters.userId;
  const { firstName, lastName, email, website } = JSON.parse(event.body);

  const item = {
    email,
    firstName,
    lastName,
    userId,
    website,
  };

  await documentClient.put({
    Item: item,
    TableName: tableName,
  }).promise();

  return {
    body: JSON.stringify({
      message: 'Data inserted / updated successfully.',
    }),
    statusCode: 200,
  };
};