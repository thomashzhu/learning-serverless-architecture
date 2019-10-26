import moment from 'moment';

const greeting = {
  en:  'Hello',
  fr: 'Bonjour',
  hi: 'Namaste',
};

exports.handler = async (event) =>  {
  const name = event.pathParameters.name;
  const { lang, ...info } = event.queryStringParameters;

  const message = `${greeting[lang] || greeting.en} ${name}`;
  const response = {
    info,
    message,
    timestamp: moment().unix(),
  };

  return {
    body: JSON.stringify(response),
    statusCode:  200,
  };
};
