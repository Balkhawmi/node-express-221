/**
 * @openapi
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - mail
 *         - password
 *         - clientId
 *       properties:
 *         mail:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           example: password123
 *         clientId:
 *           type: Number
 *           default: 0
 *      UserResponse:
 *          type: object
 *          properties:
 *          status:
 *          type: string
 *          data:
 *           
 * 
 * 
 *     LoginRequest:
 *       type: object
 *       required:
 *         - mail
 *         - password
 *       properties:
 *         mail:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           example: password123
 * 
 *     UserResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 */
