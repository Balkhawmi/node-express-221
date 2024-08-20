/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         mail:
 *           type: string
 *           example: user@example.com
 *         role:
 *           type: string
 *           enum: [ADMIN, BOUTIQUIER, CLIENT]
 *           example: ADMIN
 *         clientId:
 *           type: integer
 *           example: 1
 *       required:
 *         - id
 *         - mail
 *         - role
 *         - clientId
 * 
 *     UserRequest:
 *       type: object
 *       properties:
 *         mail:
 *           type: string
 *           example: user@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: password123
 *         clientId:
 *           type: integer
 *           example: 1
 *         role:
 *           type: string
 *           enum: [ADMIN, BOUTIQUIER, CLIENT]
 *           example: ADMIN
 *       required:
 *         - mail
 *         - password
 *         - clientId
 *         - role
 * 
 *     UserResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         mail:
 *           type: string
 *           example: user@example.com
 *         role:
 *           type: string
 *           enum: [ADMIN, BOUTIQUIER, CLIENT]
 *           example: ADMIN
 *         clientId:
 *           type: integer
 *           example: 1
 *       required:
 *         - id
 *         - mail
 *         - role
 *         - clientId
 * 
 *     RoleEnum:
 *       type: string
 *       enum:
 *         - ADMIN
 *         - BOUTIQUIER
 *         - CLIENT
 *       example: ADMIN
 */
