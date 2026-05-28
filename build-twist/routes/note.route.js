import express from 'express';
import { createNote, deleteNote, readNote, updateNote } from '../controllers/note.controller.js';

const route = express.Router();

// ---- Create note route ----
route.post('/notes', createNote);

// ---- Read note route ----
route.get('/notes', readNote);

// ---- Update note route ----
route.patch('/notes/:id', updateNote);

// ---- Delete note route ----
route.delete('/notes/:id', deleteNote);

export default route;