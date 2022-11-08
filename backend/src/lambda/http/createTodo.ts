import 'source-map-support/register'
import { createLogger } from '../../utils/logger';
import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda';
import {CreateTodoRequest} from '../../requests/CreateTodoRequest';
import {createToDo} from "../../businessLogic/ToDo";
import { getUserId } from '../../auth/utils'
// import * as middy from 'middy';
// import { cors, httpErrorHandler } from 'middy/middlewares';

const logger = createLogger('Log from createTodo.ts');

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    // TODO: Implement creating a new TODO item
    logger.info('Creating Event: ', event);

    const userId = getUserId(event)
    const newTodo: CreateTodoRequest = JSON.parse(event.body);
    const toDoItem = await createToDo(newTodo, userId);

    return {
        statusCode: 201,
        headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
            "item": toDoItem
        }),
    }
};
// Example use middy

// export const handler = middy(
// async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     // TODO: Implement creating a new TODO item
//     logger.info('Creating Event: ', event);

//     const userId = getUserId(event)
//     const newTodo: CreateTodoRequest = JSON.parse(event.body);
//     const toDoItem = await createToDo(newTodo, userId);

//     return {
//         statusCode: 201,
//         headers: {
//             "Access-Control-Allow-Origin": "*",
//             'Access-Control-Allow-Credentials': true
//         },
//         body: JSON.stringify({
//             "item": toDoItem
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


