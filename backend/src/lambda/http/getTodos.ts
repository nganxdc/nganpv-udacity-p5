import 'source-map-support/register'
import { createLogger } from '../../utils/logger';
import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda';
import {getAllToDo} from "../../businessLogic/ToDo";
import { getUserId } from '../../auth/utils';
// import * as middy from 'middy';
// import { cors, httpErrorHandler } from 'middy/middlewares';

const logger = createLogger('GetTodos');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Getting All Event: ', event);

    const userId = getUserId(event);
    const toDos = await getAllToDo(userId);

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            "items": toDos,
        }),
    }
};

// Example use middy

// export const handler = middy(
//     async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     logger.info('Getting All Event: ', event);

//     const userId = getUserId(event);
//     const toDos = await getAllToDo(userId);

//     return {
//         statusCode: 200,
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             'Access-Control-Allow-Credentials': true
//         },
//         body: JSON.stringify({
//             "items": toDos,
//         }),
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
