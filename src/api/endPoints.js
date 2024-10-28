import express from "express";

import libroRoutes from '../routes/libro.routes.js';
import reseniaRoutes from '../routes/resenia.routes.js';

const router = express.Router();


router.use('/libros', libroRoutes);
router.use('/libros', reseniaRoutes);

export default router;
