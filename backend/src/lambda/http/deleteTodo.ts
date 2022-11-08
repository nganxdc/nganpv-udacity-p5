import 'source-map-support/register'
import { createLogger } from '../../utils/logger';
import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda';
import {deleteToDo, removeImageInS3} from "../../businessLogic/ToDo";
import { getUserId } from '../../auth/utils'
// import * as middy from 'middy';
// import { cors, httpErrorHandler } from 'middy/middlewares';

const logger = createLogger('Log from deleteTodo.ts');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Deleting Event: ', event);

    const userId = getUserId(event)
    const todoId = event.pathParameters.todoId;
    await removeImageInS3(todoId);
    const deleteData = await deleteToDo(todoId, userId);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: deleteData,
    }
};

// Example use middy

// export const handler = middy(
//     async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     logger.info('Deleting Event: ', event);

//     const userId = getUserId(event)
//     const todoId = event.pathParameters.todoId;
//     await removeImageInS3(todoId);
//     const deleteData = await deleteToDo(todoId, userId);

//     return {
//         statusCode: 200,
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             'Access-Control-Allow-Credentials': true
//         },
//         body: deleteData,
//     }
// });

// handler
//   .use(httpErrorHandler())
//   .use(cors(
//     {
//       origin: "*",
//       credentials: true,
//     }
//   ))
