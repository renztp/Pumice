import express from 'express';
import * as collectionsController from '../controllers/collections.controller.js';

const router = express.Router();

router.get('/', (req, res) => collectionsController.getAllCollections(req, res));
router.post('/create', (req, res) => collectionsController.createNewCollection(req, res));
router.get('/:id', (req, res) => collectionsController.getCollectionById(req, res));

export default router;