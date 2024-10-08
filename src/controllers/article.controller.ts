import { Request, Response } from "express";
import Controller from "../core/impl/controller";
import prisma from "../config/prisma.config";
import RestResponse from "../core/response";
import { StatusCodes } from "http-status-codes";

export class ArticleController extends Controller{
    async store(req: Request, res: Response) {
        try {
        const { libelle, prix, quantiteStock, categorieId, promotion, prixDetail } = req.body;
          const newData = await prisma.article.create({
            data: {
                libelle,
                prix,
                quantiteStock,
                categorieId,
                promotion,
                prixDetail
              },
          });
    
          // Envoi de la réponse avec le statut 201 (Created) pour indiquer que la ressource a été créée avec succès
          res.status(StatusCodes.CREATED)
            .send(RestResponse.response(newData, StatusCodes.CREATED));
        } catch (error:any) {
          // Afficher l'erreur dans la console pour le débogage
          console.error('Erreur lors de la création de l\'article :', error);
    
          // Renvoyer une réponse avec le statut 400 (Bad Request) pour indiquer une erreur de validation
          res.status(StatusCodes.BAD_REQUEST)
            .send(RestResponse.response({
              name: error.name,
              message: error.message,
            }, StatusCodes.BAD_REQUEST));
        }
      }
async show(req: Request, res: Response) {
        try {
            const newData = await prisma.article.findMany({
               select:{
                id: true,
                libelle: true,
                prix: true,
                quantiteStock: true,
                categorie: {
                    select: {
                      id: true,
                      libelle: true, 
                    }
                  },
                promotion: true,
                prixDetail: true,
               }
            })
            res.status(StatusCodes.OK)
            .send(RestResponse.response(newData,StatusCodes.OK));
            } catch (error) {
               res.status(StatusCodes.NOT_FOUND)
               .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
            }
    }

    async showCategorie(req: Request, res: Response) {
        try {
            const newData = await prisma.categorie.findMany({
               select:{
                id: true,
                libelle: true
               }
            })
            res.status(StatusCodes.OK)
            .send(RestResponse.response(newData,StatusCodes.OK));
            } catch (error) {
               res.status(StatusCodes.NOT_FOUND)
               .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
            }
    }

   async edit(req: Request, res: Response) {
        try {
            const newData = await prisma.article.findFirstOrThrow({
                where: { 
                    id: parseInt(req.params.id) 
                },
                select:{
                    id: true,
                    libelle: true,
                    prix: true,
                    quantiteStock: true,
                    categorie: {
                        select: {
                          libelle: true, 
                        }
                      },
                    promotion: true,
                    prixDetail: true,
                   } 
            })
            res.status(StatusCodes.OK)
            .send(RestResponse.response(newData,StatusCodes.OK));
            } catch (error) {
               res.status(StatusCodes.NOT_FOUND)
               .send(RestResponse.response(error,StatusCodes.NOT_FOUND)); 
            }
    }

    async editByStock(req: Request, res: Response) {
        try {
            const articleId = parseInt(req.params.id);
            const ajoutStock = parseInt(req.body.quantiteStock);
    
            // Vérifier si l'article existe et récupérer sa quantité actuelle
            const article = await prisma.article.findUniqueOrThrow({
                where: { id: articleId },
                select: {
                    id: true,
                    libelle: true,
                    prix: true,
                    quantiteStock: true, // Récupérer la quantité actuelle en stock
                    categorie: {
                        select: {
                          libelle: true, 
                        }
                      },
                    promotion: true,
                    prixDetail: true,
                }
            });
    
            // Calculer la nouvelle quantité en stock
            const nouveauStock = article.quantiteStock + ajoutStock;
    
            // Mettre à jour la quantité en stock de l'article
            const updatedArticle = await prisma.article.update({
                where: { id: articleId },
                data: { quantiteStock: nouveauStock },
                select: {
                    id: true,
                    libelle: true,
                    prix: true,
                    quantiteStock: true,
                    categorie: {
                        select: {
                          libelle: true, 
                        }
                      },
                    promotion: true,
                    prixDetail: true,
                }
            });
    
            res.status(StatusCodes.OK)
                .send(RestResponse.response(updatedArticle, StatusCodes.OK));
        } catch (error: any) {
            if (error.name === 'NotFoundError') {
                // Si l'article n'existe pas, retourner une erreur 404
                res.status(StatusCodes.NOT_FOUND)
                    .send(RestResponse.response({ message: `L'article avec l'ID ${req.params.id} n'existe pas.` }, StatusCodes.NOT_FOUND));
            } else {
                // Gérer d'autres erreurs
                res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                    .send(RestResponse.response(error, StatusCodes.INTERNAL_SERVER_ERROR));
            }
        }
    }

    async getArticleByLibelle(req: Request, res: Response) {  
        try {
            

            // Rechercher les articles dont le libellé contient la valeur donnée (insensible à la casse)
            const articles = await prisma.article.findMany({
                where: { 
                    libelle: req.body.libelle
                },
                select: {
                    id: true,
                    libelle: true,
                    prix: true,
                    quantiteStock: true,
                    categorie: {
                        select: {
                          libelle: true, 
                        }
                      },
                    promotion: true,
                    prixDetail: true,
                } 
            });

            if (articles.length === 0) {
                return res.status(StatusCodes.NOT_FOUND)
                    .send(RestResponse.response({ message: `Aucun article trouvé avec le libellé "${req.body.libelle}".` }, StatusCodes.NOT_FOUND));
            }

            res.status(StatusCodes.OK)
                .send(RestResponse.response(articles, StatusCodes.OK));
        } catch (error: any) {
            console.error('Erreur lors de la récupération des articles par libellé :', error);

            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                .send(RestResponse.response({
                    name: error.name,
                    message: error.message
                }, StatusCodes.INTERNAL_SERVER_ERROR));
        }
    }
                                                                                                           
}