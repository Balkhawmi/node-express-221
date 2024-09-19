/**
 * @openapi
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         libelle:
 *           type: string
 *           example: Article Example
 *         prix:
 *           type: number
 *           format: float
 *           example: 29.99
 *         quantiteStock:
 *           type: integer
 *           example: 100
 *         categorieId:
 *           type: integer
 *           example: categorie Example
 *         promotion:
 *           type: string
 *           example: 123
 *         prixDetail:
 *           type: number
 *           format: float
 *           example: 29.99
 *       required:
 *         - id
 *         - libelle
 *         - prix
 *         - quantiteStock 
 *         - categorieId
 *         - promotion
 *         - prixDetail
 * 
 *     ArticleRequest:
 *       type: object
 *       properties:
 *         libelle:
 *           type: string
 *           example: Article Example
 *         prix:
 *           type: number
 *           format: float
 *           example: 29.99
 *         quantiteStock:
 *           type: integer
 *           example: 100
 *         categorieId:
 *           type: integer
 *           example: 123
 *         promotion:
 *           type: string
 *           example: categorie Example
 *         prixDetail:
 *           type: number
 *           format: float
 *           example: 29.99
 *       required:
 *         - libelle
 *         - prix
 *         - quantiteStock
 *         - categorieId
 *         - promotion
 *         - prixDetail
 */
