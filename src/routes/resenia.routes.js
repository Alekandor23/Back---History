import { Router } from "express";
import { getResenias } from "../controllers/resenia.controllers.js";

const router = Router();

// Ruta para obtener las resenias
router.get('/libros/:id_libro/resenias', getResenias);

export default router;