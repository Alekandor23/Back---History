import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();


export const getResenias = async (req, res) => {
  const { id_libro } = req.params;

  const resenias = await prisma.resenia.findMany({
    where: {
      libroId: parseInt(id_libro, 10)
    },
    select: {
      descripcion: true,
      calificacion: true,
      usuario: {
        select: {
          nombreUsuario: true
        }
      }
    }
  });

  if (resenias.length === 0){
    return res.status(404).json({message: "Resenias no encontradas" });
  };

  res.json(resenias);
};

