import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
});

export const NoteModel = mongoose.model('notes', noteSchema);