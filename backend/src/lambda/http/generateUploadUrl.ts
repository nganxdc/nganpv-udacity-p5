import 'source-map-support/register'
import { createLogger } from '../../utils/logger';
import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda'
import {generateUploadUrl} from "../../businessLogic/ToDo";
// import * as middy from 'middy';
// import { cors, httpErrorHandler } from 'middy/middlewares';

const logger = createLogger('GenerateUploadUrl');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Generating UploadUrl Event: ', event);
    const todoId = event.pathParameters.todoId;

    const URL = await generateUploadUrl(todoId);

    return {
        statusCode: 202,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            uploadUrl: URL,
        })
    };
};

// Example use middy

// export const handler = middy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     logger.info('Generating UploadUrl Event: ', event);
//     const todoId = event.pathParameters.todoId;

//     const URL = await generateUploadUrl(todoId);

//     return {
//         statusCode: 202,
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             'Access-Control-Allow-Credentials': true
//         },
//         body: JSON.stringify({
//             uploadUrl: URL,
//         })
//     };
// });
// handler
//   .use(httpErrorHandler())
//   .use(cors(
//     {
//       origin: "*",
//       credentials: true,
//     }
//   ))