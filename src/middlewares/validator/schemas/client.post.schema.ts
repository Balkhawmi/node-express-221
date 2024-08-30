import { z } from "zod";
import app from "../../../app";

// Fonction pour vérifier l'unicité du numéro de téléphone
export const verifiLiTelephone = async (value: string) => {
  const count = await app.prisma.client.count({
    where: { telephone: value },
  });
  return count < 1;
};

// Schéma de validation pour les clients
export const clientPostSchema = z.object({
  nom: z.string({
    required_error: "Le nom est obligatoire",
  })
  .min(1, "Le nom ne doit pas être vide"),  // Assure que le champ n'est pas vide

  prenom: z.string({
    required_error: "Le prénom est obligatoire",
  })
  .min(1, "Le prénom ne doit pas être vide"),  // Assure que le champ n'est pas vide

  telephone: z.string({
    required_error: "Le téléphone est obligatoire",
  })
  .length(9, "Le téléphone doit contenir 9 chiffres")
  .refine(async (value) => await verifiLiTelephone(value), "Le téléphone existe déjà"),
  adresse: z.string({
    required_error: "L'adresse est obligatoire",
  })
  .min(1, "L'adresse ne doit pas être vide"),
  sexe: z.string({
    required_error: "Le sexe est obligatoire",
  })
  .min(1, "Le sexe ne doit pas être vide"),
  photo: z.string({
    required_error: "La photo est obligatoire",
  })
  .min(1, "La photo ne doit pas être vide")  // Assure que le champ n'est pas vide
});
