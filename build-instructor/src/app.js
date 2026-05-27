import express from 'express';
import { NoteModel } from './models/notes.model.js';


const app = express();

app.use(express.json());

// ---- Create note ----
app.post('/api/notes', async (req, res) => {
    try {
        // ---- Data from user ----
        const { title, description } = req.body;

        // ---- Validation ----
        if (!title) return res.status(400).json({ error: "Title is required" });
        if (!description) return res.status(400).json({ error: "Description is required" });
        if (title.trim().length < 3) return res.status(400).json({ error: "Title must be at least 3 character long" });
        if (description.trim().length < 10) return res.status(400).json({ error: "Description must be at least 10 character long" });

        // ---- If validation passes create the note ----
        const newNote = await NoteModel.create({
            title,
            description
        });

        return res.status(201).json({
            message: "Note is created successfully",
            note: newNote
        });

    } catch (error) {
        console.log("Error in Create note:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// ---- Read note ----
app.get('/api/notes', async (req, res) => {
    try {

        const notes = await NoteModel.find();

        return res.status(200).json({
            message: "Notes fetched successfully",
            notes
        });

    } catch (error) {
        console.log("Error in Read note:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// ---- Update note ----
app.patch('/api/notes/:id', async (req, res) => {
    try {
        // ---- Data from user ----
        const { id } = req.params;
        const { description } = req.body;

        // ---- Validation ----
        const note = await NoteModel.findById(id);
        if (!note) return res.status(404).json({ error: "Note not found" });
        if (!description) return res.status(400).json({ error: "Description is required" });
        if (description.trim().length < 10) return res.status(400).json({ error: "Description must be at least 10 character long" });

        // ---- Updation description ----
        note.description = description;
        await note.save();

        return res.status(200).json({
            message: "Note updated successfully",
            note
        });

    } catch (error) {
        console.log("Error in Update note:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// ---- Delete note ----
app.delete('/api/notes/:id', async (req, res) => {
    try {
        // ---- Data from user ----
        const { id } = req.params;

        // ---- Validation ----
        const note = await NoteModel.findById(id);
        if (!note) return res.status(404).json({ error: "Note not found" });

        // ---- Deleting note ----
        await NoteModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Note deleted successfully",
        });

    } catch (error) {
        console.log("Error in Delete note:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

export default app;