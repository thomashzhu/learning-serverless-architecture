exports.handler = async (event) => {
  const { num1, num2 } = JSON.parse(event.body);
  return {
    body: JSON.stringify({
      num1,
      num2,
      result: num1 + num2,
    }),
    statusCode: 200,
  };
};