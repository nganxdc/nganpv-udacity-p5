import { decode } from 'jsonwebtoken'
import { JwtPayload } from './JwtPayload'
import { APIGatewayProxyEvent } from "aws-lambda";

/**
 * Parse a JWT token
 * @param jwtToken JWT token to parse
 * @returns return a sub of JWT (userId)
 */
export function parseUserId(jwtToken: string): string {
  const decodedJwt = decode(jwtToken) as JwtPayload
  return decodedJwt.sub
}

/**
 * Get JWT token
 * @param authHeader
 * @returns return token
 */
export function getToken(authHeader: string): string {

    if (!authHeader) {
      throw new Error('No authentication header');
    }
  
    if (!authHeader.toLowerCase().startsWith('bearer ')) {
      throw new Error('Invalid authentication header');
    }
  
    const split = authHeader.split(' ');
    const token = split[1];
  
    return token;
}

/**
 * Get bearer token in header
 * @param event APIGatewayProxyEvent
 * @returns JWT token
 */
export function getUserId(event: APIGatewayProxyEvent): string {
  const authorization = event.headers.Authorization
  const split = authorization.split(' ')
  const jwtToken = split[1]

  return parseUserId(jwtToken)
}