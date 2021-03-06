const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app");
const server = awsServerlessExpress.createServer(app);

export const  handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
