exports.handler = async (event) => {
  const eventJson = JSON.stringify(event);
  console.log(eventJson);
  return {
    body: eventJson,
    statusCode: 200,
  };
};