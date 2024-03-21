import Note from '../models/notes.model.js';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const getAllNotes = async (_, res?: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNewNote = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Note cannot be empty" });
    }

    const note = req.body;
    const newNote = new Note({
      title: note.title,
      description: note.description,
      ...(note.collectionId && { collectionId: note.collectionId}),
    });
    newNote
      .save()
      .then(() => res.status(200).json(newNote))
      .catch((err) => res.status(409).json({ message: err.message }));
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
}

export const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getNotesByCollectionId = async (req, res) => {
  const { id } = req.params;
  try {
    const notes = await Note.find({ collectionId: new mongoose.Types.ObjectId(id) });
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
