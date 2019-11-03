'use strict';

module.exports.handler = async event => {
  const { num1, num2 } = event;
  return num1 + num2;
};
