import express from "express";
import * as notesController from "../controllers/notes.controller.js";

const router = express.Router();

router.get("/", (req, res) => notesController.getAllNotes(req, res));
router.post("/create-new-note", (req, res) => notesController.createNewNote(req, res));
router.get("/:id", (req, res) => notesController.getNoteById(req, res));
router.get("/collection/:id", (req, res) => notesController.getNotesByCollectionId(req, res));

export default router;
