"use strict";
/**
 * @openapi
 * components:
 *   schemas:
 *     Client:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: Dupont
 *         prenom:
 *           type: string
 *           example: Jean
 *         telephone:
 *           type: string
 *           example: "+33612345678"
 *         adresse:
 *           type: string
 *           example: Thies
 *         sexe:
 *           type: string
 *           example: M
 *         photo:
 *           type: string
 *           example: "http://example.com/photo.jpg"
 *         user:
 *           $ref: '#/components/schemas/User'
 *       required:
 *         - id
 *         - nom
 *         - prenom
 *         - telephone
 *         - adresse
 *         - sexe
 *
 *     ClientRequest:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *           example: Dupont
 *         prenom:
 *           type: string
 *           example: Jean
 *         telephone:
 *           type: string
 *           example: "+33612345678"
 *         adresse:
 *           type: string
 *           example: Thies
 *         sexe:
 *           type: string
 *           example: M
 *         photo:
 *           type: string
 *           example: "http://example.com/photo.jpg"
 *         mail:
 *           type: string
 *           example: "jean.dupont@example.com"
 *         password:
 *           type: string
 *           example: "securepassword123"
 *       required:
 *         - nom
 *         - prenom
 *         - telephone
 *         - adresse
 *         - sexe
 *         - mail
 *         - password
 */
